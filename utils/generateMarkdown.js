// TODO: Create a function that returns a license badge based on which license is passed in

const licenseObj = {
  MIT: {
    link: "https://opensource.org/licenses/MIT",
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  },
  Mozilla: {
    link: "",
    badge: ""
  },
  BSD: {
    link: "",
    badge: ""
  },
  ISC: {
    link: "",
    badge: ""
  }


}

// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## Description
  ${answers.description}


  ## Table of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribution](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Contributing
  ${answers.contributors}

  ## Tests
  ${answers.tests}

  ## Questions
  ${answers.email}
  ${answers.github}

`};

module.exports = generateMarkdown;
