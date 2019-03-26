class Student {
  fullName: string;
  constructor(public firstName: string, public midName: string, public lastName: string) {
    this.fullName = firstName + " " + midName + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + ", " + person.lastName;
}

let user = new Student("A", "B", "C");
document.body.innerHTML = greeter(user);