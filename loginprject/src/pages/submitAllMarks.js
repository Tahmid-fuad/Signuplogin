import axios from 'axios';

const batch = '20';
const term = '31';
const course = '303';
const courseCrdt = 3;
const courseTyp = 'theory';
const exam = 'CT-2';
const teacherEmail = 'azad@cuet.ac.bd';

let studentId = 2008001;
const marksArray = [15, 12, 14, 17, 19, 11, 14, 16, 13, 14, 15, 15, 12];

const submitMarks = async (studentId, marks) => {
    const data = {
        batch,
        term,
        course,
        courseCrdt,
        courseTyp,
        exam,
        studentId:`${studentId}`,
        marks:`${marks}`,
        marks,
        teacherEmail
    };

    try {
        console.log(data);
        const response = await axios.post('http://localhost:3001/submitMarks', data);
        console.log(`Marks for Student ID ${studentId} submitted successfully:`, response.data);
    } catch (error) {
        console.error(`Error submitting marks for Student ID ${studentId}:`, error.response ? error.response.data : error.message);
    }
};

const submitAllMarks = async () => {
    for (const marks of marksArray) {
        await submitMarks(studentId, marks);
        studentId++;
    }
};

submitAllMarks();
