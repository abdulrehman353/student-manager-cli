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

            const id = prompt("Enter Student ID: ");
            const name = prompt("Enter Student Name: ");
            const age = prompt("Enter Student Age: ");
            const course = prompt("Enter Student Course: ");

            console.log(addStudent(id, name, age, course));

        } catch (error) {

            console.log("Error:", error.message);

        }

    }

    else if (choice === "2") {

        const students = getStudents();

        if (students.length === 0) {

            console.log("No students found.");

        } else {

            console.log("\n===== Student List =====");

            students.forEach((student) => {
    console.log(student.getDetails());
});

        }

    }

    else if (choice === "3") {

        console.log("Goodbye!");
        break;

    }

    else {

        console.log("Invalid option.");

    }

}