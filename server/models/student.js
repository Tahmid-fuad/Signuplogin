const mongoose = require('mongoose')
const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    id: String,
    role: { type: String, enum: ['admin', 'teacher', 'student'], default: 'student' },
    batch: { type: String, enum: ['19', '20', '21', '22', '23'] },
    resetToken: String,
    resetTokenExpiry: Date
})

const StudentModel = mongoose.model('student', StudentSchema)
module.exports = StudentModel