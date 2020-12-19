const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ]);

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
  </div>
</div>
</body>
</html>`;

promptUser()
  .then((answers) =>
    writeFileAsync("generated-html-file/index.html", generateHTML(answers))
  )
  .then(() => console.log("Successfully wrote to index.html"))
  .catch((err) => console.error(err));
