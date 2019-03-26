var Student = /** @class */ (function () {
    function Student(firstName, midName, lastName) {
        this.firstName = firstName;
        this.midName = midName;
        this.lastName = lastName;
        this.fullName = firstName + " " + midName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + ", " + person.lastName;
}
var user = new Student("A", "B", "C");
document.body.innerHTML = greeter(user);
