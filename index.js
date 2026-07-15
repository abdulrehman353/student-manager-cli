const prompt = require("prompt-sync")();
const { addStudent, getStudents } = require("./student");

while (true) {
    console.log("\n===== Student Manager =====");
    console.log("1. Add Student");
    console.log("2. View Students");
    console.log("3. Exit");

    const choice = prompt("Choose an option: ");

    if (choice === "1") {
        try {
            const name = prompt("Enter student name: ");
            console.log(addStudent(name));
        } catch (error) {
            console.log("Error:", error.message);
        }
    }
    else if (choice === "2") {
        const students = getStudents();

        if (students.length === 0) {
            console.log("No students found.");
        } else {
            console.log("\nStudents:");
            students.forEach((student, index) => {
                console.log(`${index + 1}. ${student}`);
            });
        }
    }
    else if (choice === "3") {
        console.log("Goodbye!");
        break;
    }
    else {
        console.log("Invalid option. Please try again.");
    }
}