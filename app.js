// require allows js file to access fs module functions through the fs assignment
const fs = require("fs");
const generatePage = require("./src/page-template.js");

// holds the user command-lin arguments
const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile("./index.html", generatePage(name, github), (err) => {
  if (err) throw new Error(err);

  console.log("Portfolio complete! Checkout index.html to see the output!");
});
