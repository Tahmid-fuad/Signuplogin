const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const StudentModel = require('./models/student')

const app = express()
app.use(express.json())
app.use(cors())


const uri = "mongodb://localhost:27017/Student";

mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.post('/register', (req, res) => {
  StudentModel.create(req.body)
    .then(student => res.json(student))
    .catch(err => res.json(err))
})

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  StudentModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success")
        }
        else {
          res.json("The password is incorrect")
        }
      }
      else {
        res.json("No record existed")
      }
    })
})

const port = 3001
app.listen(port, () => {
  console.log(`server running at port ${port}`,)
})