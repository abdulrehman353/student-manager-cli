const { addStudent, getStudents, deleteStudent } = require("./student");
const logger = require("./logger");

logger.info("========== Test Started ==========");

try {

    logger.info("Running Add Student Test...");

    console.log(addStudent(101, "Ali", 20, "JavaScript"));

    logger.info("Add Student Test Passed.");

} catch (error) {

    logger.error(`Add Student Test Failed: ${error.message}`);

}

try {

    logger.info("Running View Student Test...");

    console.log(getStudents());

    logger.info("View Student Test Passed.");

} catch (error) {

    logger.error(`View Student Test Failed: ${error.message}`);

}

try {

    logger.info("Running Delete Student Test...");

    console.log(deleteStudent(101));

    logger.info("Delete Student Test Passed.");

} catch (error) {

    logger.error(`Delete Student Test Failed: ${error.message}`);

}

logger.info("========== Test Completed ==========");