const Student = require("./StudentModel");
const logger = require("./logger");

// Store students in memory
const students = [];

// Add student
function addStudent(id, name, age, course) {

    if (!id || id.toString().trim() === "") {
        logger.error("Student ID cannot be empty.");
        throw new Error("Student ID cannot be empty.");
    }

    if (!name || name.trim() === "") {
        logger.error("Student name cannot be empty.");
        throw new Error("Student name cannot be empty.");
    }

    if (!age || isNaN(age) || age <= 0) {
        logger.error("Invalid student age entered.");
        throw new Error("Please enter a valid age.");
    }

    if (!course || course.trim() === "") {
        logger.error("Course cannot be empty.");
        throw new Error("Course cannot be empty.");
    }

    // Check duplicate ID
    const exists = students.find(student => student.id == id);

    if (exists) {
        logger.error(`Student ID ${id} already exists.`);
        throw new Error("Student ID already exists.");
    }

    const student = new Student(
        id,
        name.trim(),
        Number(age),
        course.trim()
    );

    students.push(student);

    logger.info(`Student Added: ID=${student.id}, Name=${student.name}, Age=${student.age}, Course=${student.course}`);

    return "Student added successfully!";
}

// Get all students
function getStudents() {
    logger.info("Student list viewed.");
    return students;
}

// Delete student
function deleteStudent(id) {

    const index = students.findIndex(student => student.id == id);

    if (index === -1) {
        logger.error(`Student with ID ${id} not found.`);
        throw new Error("Student not found.");
    }

    const deletedStudent = students[index];

    students.splice(index, 1);

    logger.info(`Student Deleted: ID=${deletedStudent.id}, Name=${deletedStudent.name}`);

    return "Student deleted successfully!";
}

module.exports = {
    addStudent,
    getStudents,
    deleteStudent
};