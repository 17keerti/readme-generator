// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input;',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please write a short description of your project',
    name: 'description',
  },
  {
    type: 'input;',
    message: 'What is your github username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
    type: 'list',
    message: 'What kind of license should your project have?',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'dependencies',
    default: 'npm i',
  },
  {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'test',
    default: 'npm test',
  },
  {
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'repo',
  },
  {
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?',
    name: 'contributing',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('generatedReadme.md', data, (err) => 
  err ? console.error(err) : console.log('Success!')

  )};

// TODO: Create a function to initialize app
function init() {} 

// Function call to initialize app
init();
