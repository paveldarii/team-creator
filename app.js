const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const promptUser = () =>
  inquirer.prompt([
    {
      name: "role",
      type: "list",
      message: "What is employee's role in you team?",
      choices: ["Manager", "Engineer", "Intern", "Other"],
      //       message: `
      // What is employee's role in the team? Enter one of the numbers above.`,
    },
  ]);
const managerList = [];
const engineerList = [];
const internList = [];
const otherEmployeeList = [];
const getEmployeeData = () => {
  promptUser().then((response) => {
    switch (response.role) {
      case "Manager":
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the manager's name?",
            },
            {
              type: "input",
              name: "email",
              message: "What is the manager's email address?",
            },
            {
              type: "input",
              name: "office",
              message: "What is the manager's office number?",
            },
          ])
          .then((response) => {
            managerList.push(
              new Manager(response.name, response.email, response.office)
            );
          });

        break;
      case "Engineer":
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the engineer's name?",
            },
            {
              type: "input",
              name: "email",
              message: "What is the engineer's email address?",
            },
            {
              type: "input",
              name: "github",
              message: "What is the engineer's GitHub username?",
            },
          ])
          .then((response) => {
            engineerList.push(
              new Engineer(response.name, response.email, response.github)
            );
          });
        break;
      case "Intern":
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the intern's name?",
            },
            {
              type: "input",
              name: "email",
              message: "What is the intern's email address?",
            },
            {
              type: "input",
              name: "school",
              message: "What is the intern's school name?",
            },
          ])
          .then((response) => {
            internList.push(
              new Intern(response.name, response.email, response.school)
            );
          });
        break;
      case "Other":
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the employee's name?",
            },
            {
              type: "input",
              name: "email",
              message: "What is the employee's email address?",
            },
          ])
          .then((response) => {
            otherEmployeeList.push(new Employee(response.name, response.email));
          });
        break;
      default:
        console.log("no answer for you");
    }
  });
};
getEmployeeData();

// const generateHTML = (answers) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//   </div>
// </div>
// </body>
// </html>`;

// promptUser()
//   .then((answers) =>
//     writeFileAsync("generated-html-file/index.html", generateHTML(answers))
//   )
//   .then(() => console.log("Successfully wrote to index.html"))
//   .catch((err) => console.error(err));
