const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, email, school) {
    super(name, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
  getSchoolSection() {
    let schoolSection;
    if (this.getSchool() !== "") {
      schoolSection = `<li class="list-group-item list-group-item-info">School: ${this.getSchool()}</li>`;
    } else {
      schoolSection = "";
    }
    return schoolSection;
  }
  generateSection() {
    let section;
    if (this.getNameSection() === "") {
      return;
    } else {
      section = `
    <div class="col-md-6 col-lg-4">
    ${this.getNameSection()}
    ${this.getRoleSection()}
    <ul>
      ${this.getIdSection()}
      ${this.getEmailSection()}
      ${this.getSchoolSection()}
    </ul>
  </div>`;
      return section;
    }
  }
}

module.exports = Intern;
