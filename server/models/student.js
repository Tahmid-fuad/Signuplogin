const mongoose = require('mongoose')
const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ['admin', 'teacher', 'student'], default: 'student' }
})

const StudentModel = mongoose.model('student', StudentSchema)
module.exports = StudentModel