// TODO: Create a function that returns a license badge based on which license is passed in

const licenseObj = {
  MIT: {
    link: "https://opensource.org/licenses/MIT",
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  },
  Mozilla: {
    link: "https://opensource.org/licenses/MPL-2.0",
    badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  },
  BSD: {
    link: "https://opensource.org/licenses/BSD-3-Clause",
    badge: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  },
  ISC: {
    link: "https://opensource.org/licenses/ISC",
    badge: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }


}

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (licenseObj[license]) {
    licenseBadge = licenseObj[license]["badge"];
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (licenseObj[license]) {
    licenseLink = licenseObj[license]["link"]
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
  return `
  For information about licensing, visit ${renderLicenseLink(license)}`
  } else {
  return `
  No license information`
  }
}




// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ${renderLicenseBadge(answers.license)}

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
  ${renderLicenseSection(answers.license)}

  ## Contributing
  ${answers.contributors}

  ## Tests
  ${answers.tests}

  ## Questions
  If you have questions, email me: <${answers.email}>
  
  Check out my [Github profile](https://github.com/${answers.github})

   :dizzy: Happy coding! :dizzy:

`;};

module.exports = generateMarkdown;
