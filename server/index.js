const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const StudentModel = require('./models/student');

const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true
}));

const uri = "mongodb://localhost:27017/Student";

mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await StudentModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new StudentModel({ name, email, password: hashedPassword, role });
    const savedUser = await newUser.save();
    
    const token = jwt.sign({ email, role }, "your_secret_key", { expiresIn: '1h' });

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
        const token = jwt.sign({ email, role: user.role }, "tyftugihd7e", { expiresIn: '1h' });
        
        res.status(200).json({ message: "Success", role: user.role, token });
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

const port = 3001;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
