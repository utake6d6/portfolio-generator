// // allows access to inquirer in the app.js file
const inquirer = require("inquirer");
// // require allows js file to access fs module functions through the fs assignment
// const fs = require("fs");
// // allows access to page-template.js
// const generatePage = require("./src/page-template");
// // allows html page to be generated
// const pageHTML = generatePage(name, github);

// fs.writeFile("./index.html", "./index.html", pageHTML, (err) => {
//   if (err) throw err;

//   console.log("Portfolio complete! Checkout index.html to see the output!");
// });

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ])
  .then((answers) => console.log(answers));
