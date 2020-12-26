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
var hasMoreEmployee = true;
const managerList = [];
const engineerList = [];
const internList = [];
const otherEmployeeList = [];
const getEmployeeData = () => {
  promptUser().then((response) => {
    switch (response.role) {
      case "Manager":
        return inquirer
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
            {
              type: "confirm",
              name: "hasMoreTeammates",
              message: "Do you have more team mates that you want to add?",
            },
          ])
          .then((response) => {
            hasMoreEmployee = response.hasMoreTeammates;
            managerList.push(
              new Manager(response.name, response.email, response.office)
            );
            if (hasMoreEmployee) {
              getEmployeeData();
            } else {
              generateHtmlFile();
            }
          });

      case "Engineer":
        return inquirer
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
            {
              type: "confirm",
              name: "hasMoreTeammates",
              message: "Do you have more team mates that you want to add?",
            },
          ])
          .then((response) => {
            hasMoreEmployee = response.hasMoreTeammates;
            engineerList.push(
              new Engineer(response.name, response.email, response.github)
            );
            if (hasMoreEmployee) {
              getEmployeeData();
            } else {
              generateHtmlFile();
            }
          });

      case "Intern":
        return inquirer
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
            {
              type: "confirm",
              name: "hasMoreTeammates",
              message: "Do you have more team mates that you want to add?",
            },
          ])
          .then((response) => {
            hasMoreEmployee = response.hasMoreTeammates;
            internList.push(
              new Intern(response.name, response.email, response.school)
            );
            if (hasMoreEmployee) {
              getEmployeeData();
            } else {
              generateHtmlFile();
            }
          });

      case "Other":
        return inquirer
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
            {
              type: "confirm",
              name: "hasMoreTeammates",
              message: "Do you have more team mates that you want to add?",
            },
          ])
          .then((response) => {
            hasMoreEmployee = response.hasMoreTeammates;
            otherEmployeeList.push(new Employee(response.name, response.email));
            if (hasMoreEmployee) {
              getEmployeeData();
            } else {
              generateHtmlFile();
            }
          });

      default:
        console.log("no answer for you");
    }
  });
};
getEmployeeData();

generateHtmlFile = () => {
  generateEmployeeHTMLSections = () => {
    var allEmployeeList = [
      managerList,
      engineerList,
      internList,
      otherEmployeeList,
    ];
    var allSections = "";

    for (let i = 0; i < allEmployeeList.length; i++) {
      if (allEmployeeList[i].length > 0) {
        for (let j = 0; j < allEmployeeList[i].length; j++) {
          teamMember = allEmployeeList[i][j];
          //code bellow returns the generated sections for each employee
          section = teamMember.generateSection();
          allSections += section;
        }
      } else {
        continue;
      }
    }
    return allSections;
  };
  const generatedHTMLFile = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <style>
    h1 {
      text-align: center;
      background-color: #282365;
      padding: 20px;
      color: #309ed7;
    }

    h4,
    h5 {
      margin: 0;
      background-color: #224b89;
      color: #309ed7;
      text-align: center;
      padding-left: 5%;
    }

    h4 {
      border-radius: 15px 15px 0px 0px;
    }

    ul {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .col,
    .col-md-5,
    .col-lg-4 {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    body {
      background-image: url("background.jpg");
      background-size: 100%;
    }
  </style>
  <title>My-team</title>
</head>

<body style="background-image: url('background.jpg'),background-size 100%">
  <h1> My team</h1>
  <div class="container">
    <div class="row">
      ${generateEmployeeHTMLSections()}
    </div>
  </div>
  </div>
</body>

</html>
  `;
  writeFileAsync("output/team.html", generatedHTMLFile)
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));
};
