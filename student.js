const Student = require("./StudentModel");

// Store students in memory
const students = [];

// Add student
function addStudent(id, name, age, course) {

    if (!id || id.toString().trim() === "") {
        throw new Error("Student ID cannot be empty.");
    }

    if (!name || name.trim() === "") {
        throw new Error("Student name cannot be empty.");
    }

    if (!age || isNaN(age) || age <= 0) {
        throw new Error("Please enter a valid age.");
    }

    if (!course || course.trim() === "") {
        throw new Error("Course cannot be empty.");
    }

    const student = new Student(
        id,
        name.trim(),
        Number(age),
        course.trim()
    );

    students.push(student);

    return "Student added successfully!";
}

// Get all students
function getStudents() {
    return students;
}

module.exports = {
    addStudent,
    getStudents
};