// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None' ) {
    return ` `;
  } else
  return `![Badge](https://img.shields.io/badge/License-${license}-blue)`
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if(license === 'None') {
    return ` `;
  } else
  return `(https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return ` `;
  } else
  return `## License
  This application is covered by the ${license} license.`; 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}</br>
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  To install necessary dependencies, run the following command:
  </br>
  ${data.install}
  ## Usage
  ${data.repo}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions about repo, open an issue or contact me directly at (https://github.com/${data.github}) or you can email me at: ${data.email} `;
    }

module.exports = generateMarkdown;