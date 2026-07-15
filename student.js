// Store students in memory
const students = [];

// Add student
function addStudent(name) {
    if (!name || name.trim() === "") {
        throw new Error("Student name cannot be empty.");
    }

    students.push(name.trim());
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