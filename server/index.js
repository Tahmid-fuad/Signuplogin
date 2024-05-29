const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const StudentModel = require('./models/student');

const app = express();
app.use(express.json());
app.use(cors());

const uri = "mongodb://localhost:27017/Student";

mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Check if the email is already registered
  const existingUser = await StudentModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json("Email already registered");
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the new user with the hashed password
    const newUser = new StudentModel({ name, email, password: hashedPassword });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await StudentModel.findOne({ email });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
