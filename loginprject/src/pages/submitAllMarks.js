import axios from 'axios';

const batch = '20';
const term = '11';
const course = 'm183';
const courseCrdt = 3;
const courseTyp = 'theory';
const exam = 'Term Final'; 
const teacherEmail = 'azad@cuet.ac.bd';

let studentId = 2008001;

const grades = `A
B
A+
B-
A
A-
C+
B+
C+
A
F
B-
A+
C+
A
B
B-
B
C+
A
C+
A+
B+
C+
A-
B-
B+
C+
A+
D
C
C
A-
F
A+
A
A
A+
C
A-
F
F
B-
A+
A
A-
B-
A-
B
C+
D
B
B+
B-
D
B+
A+
B
F
B-
C+`;

const marksArray = grades
    .trim() // Remove any extra whitespace from start and end
    .split('\n') // Split the string by new lines
    .map(grade => grade.trim()); // Trim each grade and return as an array

const abcd = {
    "A+": 210,
    "A": 195,
    "A-": 180,
    "B+": 165,
    "B": 150,
    "B-": 135,
    "C+": 120,
    "C": 105,
    "D": 90,
    "F": 0
};

const submitMarks = async (studentId, marks) => {
    const data = {
        batch,
        term,
        course,
        courseCrdt,
        courseTyp,
        exam,
        studentId: `${studentId}`,
        marks: `${marks}`,
        teacherEmail
    };

    try {
        console.log(data);
        const response = await axios.post('http://localhost:3001/submitMarks', data);
        // console.log(`Marks for Student ID ${studentId} submitted successfully:`, response.data);
    } catch (error) {
        console.error(`Error submitting marks for Student ID ${studentId}:`, error.response ? error.response.data : error.message);
    }
};

const submitAllMarks = async () => {
    let index = 0;
    while (index < marksArray.length) {
        // if (studentId === 2008028 || studentId === 2008052 || studentId === 2008041) {
        //     studentId++;
        //     continue;
        // }
        
        const grade = marksArray[index];
        const numericMarks = abcd[grade]; // Map grade to numeric marks
        
        await submitMarks(studentId, numericMarks);
        studentId++;
        index++;
    }
};

submitAllMarks();
