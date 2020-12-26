const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, email, officeNumber) {
    super(name, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeSection() {
    let officeSection;
    if (this.getOfficeNumber() !== "") {
      officeSection = `<li class="list-group-item list-group-item-info">Office: ${this.getOfficeNumber()}</li>`;
    } else {
      officeSection = "";
    }
    return officeSection;
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
      ${this.getOfficeSection()}
    </ul>
  </div>`;
      return section;
    }
  }
}

module.exports = Manager;
