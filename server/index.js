const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const StudentModel = require('./models/student');
const setupTransporter = require('./emailConfig');
const MarksModel = require("./models/marks");
const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true
}));

const uri = "mongodb://localhost:27017/";

mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.post('/register', async (req, res) => {
  const { name, email, password, id, role, batch, desig } = req.body;

  try {
    const existingUser = await StudentModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new StudentModel({ name, email, password: hashedPassword, id, role, batch, desig });
    const savedUser = await newUser.save();

    const token = jwt.sign({ email, role }, "fwaxcgqgsgf", { expiresIn: '1h' });

    res.status(201).json({ user: savedUser, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await StudentModel.findOne({ email });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const token = jwt.sign({ email, role: user.role, id: user.id }, "tyftugihd7e", { expiresIn: '1h' });

        res.status(200).json({ message: "Success", role: user.role, id: user.id, email: user.email, token });
      } else {
        res.status(400).json({ message: "The password is incorrect" });
      }
    } else {
      res.status(400).json({ message: "No record existed" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  res.status(200).json({ message: "Logged out successfully" });
});

// Forget password part
app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await StudentModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 600000; // Token valid for 1 hour
    await user.save();

    const resetLink = `http://localhost:5173/reset-password/${resetToken}`;

    // Get the transporter and send the email
    const transporter = await setupTransporter();
    await transporter.sendMail({
      to: email,
      subject: 'Password Reset Request',
      text: `Please use the following link to reset your password: ${resetLink}`,
    });

    res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to handle resetting the password
app.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await StudentModel.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    user.password = await bcrypt.hash(password, 10);
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Student data retrieve
app.get('/studentdata/:id', async (req, res) => {
  const studentId = req.params.id;
  try {
    const student = await StudentModel.findOne({ id: studentId });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ name: student.name, email: student.email, id: student.id, batch: student.batch });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Teacher data retrieve
app.get('/teacherdata/:email', async (req, res) => {
  const teacherEmail = req.params.email;
  try {
    const teacher = await StudentModel.findOne({ email: teacherEmail });
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.json({ name: teacher.name, email: teacher.email, desig: teacher.desig });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Mark submission
app.post('/submitMarks', async (req, res) => {
  const { batch, course, exam, studentId, marks, teacherEmail } = req.body;

  try {
    // Ensure batch document exists
    let batchDoc = await MarksModel.findOneAndUpdate(
      { batchYear: batch },
      { $setOnInsert: { batchYear: batch, students: [] } },
      { new: true, upsert: true }
    );

    // Find or create student entry
    let student = batchDoc.students.find(s => s.studentId === studentId);
    if (!student) {
      student = { studentId: studentId, courses: [] };
      batchDoc.students.push(student);
      await batchDoc.save(); // Save to ensure nested document structure
    }

    // Retrieve updated batchDoc with student included
    batchDoc = await MarksModel.findOne({ batchYear: batch });
    student = batchDoc.students.find(s => s.studentId === studentId);

    // Find or create course entry
    let courseEntry = student.courses.find(c => c.courseCode === course);
    if (!courseEntry) {
      courseEntry = { courseCode: course, exams: [] };
      student.courses.push(courseEntry);
      await batchDoc.save(); // Save to ensure nested document structure
    }

    // Retrieve updated batchDoc with course included
    batchDoc = await MarksModel.findOne({ batchYear: batch });
    student = batchDoc.students.find(s => s.studentId === studentId);
    courseEntry = student.courses.find(c => c.courseCode === course);

    // Find or create exam entry
    let examEntry = courseEntry.exams.find(e => e.examType === exam);
    if (!examEntry) {
      examEntry = { examType: exam, marks: [] };
      courseEntry.exams.push(examEntry);
      await batchDoc.save(); // Save to ensure nested document structure
    }

    // Retrieve updated batchDoc with exam included
    batchDoc = await MarksModel.findOne({ batchYear: batch });
    student = batchDoc.students.find(s => s.studentId === studentId);
    courseEntry = student.courses.find(c => c.courseCode === course);
    examEntry = courseEntry.exams.find(e => e.examType === exam);

    // Clear existing marks
    examEntry.marks = [];

    // Add the new marks entry
    examEntry.marks.push({ marks, teacherEmail });

    // Save the updated batch document
    await batchDoc.save();

    res.status(200).json({ message: 'Marks submitted successfully' });
  } catch (error) {
    console.error('Error submitting marks:', error);
    res.status(500).json({ message: 'Error submitting marks' });
  }
});




// Fetch student marks by studentId
app.get('/studentMarks/:id', async (req, res) => {
  const studentId = req.params.id;
  try {
    const studentMarks = await MarksModel.findOne({ 'students.studentId': studentId }, { 'students.$': 1 });
    if (!studentMarks) {
      return res.status(404).json({ message: 'Marks not found for the student' });
    }
    res.json(studentMarks.students[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});


app.get('/getMarksByCourse', async (req, res) => {
  try {
    const marksData = await MarksModel.find({});
    if (!marksData) {
      return res.status(404).json({ message: 'No marks data found' });
    }

    const courses = {};
    marksData.forEach(batch => {
      batch.students.forEach(student => {
        student.courses.forEach(course => {
          if (!courses[course.courseCode]) {
            courses[course.courseCode] = [];
          }
          const studentData = { studentId: student.studentId };
          course.exams.forEach(exam => {
            studentData[exam.examType] = exam.marks.map(m => m.marks).join(', ');
          });
          courses[course.courseCode].push(studentData);
        });
      });
    });

    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});



// Define port and start server
const port = 3001;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
