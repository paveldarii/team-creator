id = 0;
class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    id += 1;
    return id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
  generateSection = () => {
    let nameSection;
    let roleSection;
    let idSection;
    let emailSection;

    let section;

    if (this.getName() === "") {
      section = "";
      return section;
    } else {
      nameSection = `<h4>${this.getName()}</h4>`;
      if (this.getRole() != "Employee") {
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
      section = `
      <div class="col-md-6 col-lg-4">
      ${nameSection}
      ${roleSection}
      <ul>
        ${idSection}
        ${emailSection}
      </ul>
    </div>`;
      return section;
    }
  };
}

module.exports = Employee;
