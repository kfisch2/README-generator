// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage information:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?'
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Who contributed to this project?'
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
    choices: ['MIT', 'ISC', 'GNUPLvT'],
    filter(val) {
      return val;
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

