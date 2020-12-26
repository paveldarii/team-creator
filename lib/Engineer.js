const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, email, github) {
    super(name, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
  getGitHubSection() {
    let gitHubSection;
    if (this.getGithub() !== "") {
      gitHubSection = `<li class="list-group-item list-group-item-info">GitHub: https://github.com/${this.getGithub()}</li>`;
    } else {
      gitHubSection = "";
    }
    return gitHubSection;
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
      ${this.getGitHubSection()}
    </ul>
  </div>`;
      return section;
    }
  }
}

module.exports = Engineer;
