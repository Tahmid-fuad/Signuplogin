const mongoose = require('mongoose');

const MarksSchema = new mongoose.Schema({
    marks: { type: String, required: true }
})
const ExamSchema = new mongoose.Schema({
    examType: { type: String, required: true }, 
    marks: [MarksSchema]
});

const StudentSchema = new mongoose.Schema({
    studentId: { type: String, required: true, index: true },
    exams: [ExamSchema]
});

const CourseSchema = new mongoose.Schema({
    courseCode: { type: String, required: true }, 
    students: [StudentSchema]
});

const BatchSchema = new mongoose.Schema({
    batchYear: { type: String, required: true, index: true },
    courses: [CourseSchema]
});

const MarksModel = mongoose.model('Marks', BatchSchema);
module.exports = MarksModel;
