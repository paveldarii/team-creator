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
  generateSection = () => {
    let nameSection;
    let roleSection;
    let idSection;
    let emailSection;
    let lastSection;
    let section;

    if (this.getName() === "") {
      section = "";
      return section;
    } else {
      nameSection = `<h4>${this.getName()}</h4>`;
      if (this.getRole() != "Intern") {
        roleSection = `<h5>Employee</h5>`;
      } else {
        roleSection = `<h5>${this.getRole()}</h5>`;
      }
      idSection = `<li class="list-group-item list-group-item-info">Id: ${this.getId()}</li>`;
      if (this.getEmail() !== "") {
        emailSection = `<li class="list-group-item list-group-item-info">Email: ${this.getEmail()}</li>`;
      } else {
        emailSection = "";
      }
      if (this.getSchool() !== "") {
        lastSection = `<li class="list-group-item list-group-item-info">School: ${this.getSchool()}</li>`;
      } else {
        lastSection = "";
      }
      section = `
      <div class="col-md-6 col-lg-4">
      ${nameSection}
      ${roleSection}
      <ul>
        ${idSection}
        ${emailSection}
        ${lastSection}
      </ul>
    </div>`;
      return section;
    }
  };
}

module.exports = Intern;
