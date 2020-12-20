var id = 0;
class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    id = id + 1;
    return id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
