// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
    validate: name => {
      if (name) {
        return true;
      } else {
        console.log("Your project must have a name.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project:',
    validate: description => {
      if (description) {
        return true;
      } else {
        console.log("You must provide a description");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage information:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
    validate: installInfo => {
      if (installInfo) {
        return true;
      } else {
        console.log("Please provide instructions for installation");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'test', 
    message: 'Test instructions?'
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Who contributed to this project?',
    validate: contributor => {
      if (contributor) {
        return true;
      } else {
        console.log("There must be at least one contributor");
        return false;
      }
    }
  },
  {
    type: 'name',
    name: 'email',
    message: 'Email for questions?'
  },
  {
    type: 'name',
    name: 'github',
    message: 'What is your github?'
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Would you like to include a license?',
    choices: ['MIT', 'Mozilla', 'BSD', 'ISC'],
    filter(license) {
      return license;
    }
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log("Success!")
    }
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    // create the layout with the user answers
    const markdown = generateMarkdown(answers)
    writeToFile('README.md', markdown)
  })
    .catch(err => {
      console.log(err)
    });
}

// Function call to initialize app
init();

