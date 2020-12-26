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
  getNameSection() {
    let nameSection = `<h4>${this.getName()}</h4>`;
    return nameSection;
  }
  getRoleSection() {
    let roleSection;
    if (this.getRole() != "Employee") {
      roleSection = `<h5>${this.getRole()}</h5>`;
    } else {
      roleSection = `<h5>Employee</h5>`;
    }
    return roleSection;
  }
  getIdSection() {
    let idSection = `<li class="list-group-item list-group-item-info">Id: ${this.getId()}</li>`;
    return idSection;
  }
  getEmailSection() {
    let emailSection;
    if (this.getEmail() !== "") {
      emailSection = `<li class="list-group-item list-group-item-info">Email: ${this.getEmail()}</li>`;
    } else {
      emailSection = "";
    }
    return emailSection;
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
      </ul>
    </div>`;
      return section;
    }
  }
}

module.exports = Employee;
