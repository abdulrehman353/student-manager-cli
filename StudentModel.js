class Student {

    constructor(id, name, age, course) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.course = course;
    }

    getDetails() {
        return `
---------------------------
ID     : ${this.id}
Name   : ${this.name}
Age    : ${this.age}
Course : ${this.course}
---------------------------`;
    }

}

module.exports = Student;