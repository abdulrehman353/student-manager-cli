const { addStudent, getStudents } = require("./student");

console.log("Running Tests...");

// Test 1: Add a valid student
try {
    addStudent("Ali");
    console.log("✅ Test 1 Passed");
} catch (error) {
    console.log("❌ Test 1 Failed");
}

// Test 2: Empty student name
try {
    addStudent("");
    console.log("❌ Test 2 Failed");
} catch (error) {
    console.log("✅ Test 2 Passed");
}

// Test 3: Check if student was stored
const students = getStudents();

if (students.length === 1 && students[0] === "Ali") {
    console.log("✅ Test 3 Passed");
} else {
    console.log("❌ Test 3 Failed");
}