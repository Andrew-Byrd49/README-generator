// TODO: Include packages needed for this application

// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal packages
const api = require('.utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input

// Questions for user input
const questions = [
    {
        type: 'input',
        message: "What's your GitHub username?",
        name: 'username',
        default: 'connietran-dev',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A valid GitHub username is required!')
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What's the name of the github repo you wish to use?",
        name: 'repo',
        default: 'readme-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A valid GitHub repo is required!')
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What's the title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A project title is required!')
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Add a description to your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A description is required!')
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "If applicable, describe the steps a user needs to follow to install your project.",
        name: 'install',
    }

    {
        type: 'input',
        message: "Please provide instructions and examples of how your project will be used.",
        name: 'usage',
    }

    {
        type: 'input',
        message: "If applicable, describe the steps a user needs to follow to install your project.",
        name: 'license',
    }

    {
        type: 'input',
        message: "If applicable, describe the steps a user needs to follow to install your project.",
        name: 'contributing',
    }

    {
        type: 'input',
        message: "If applicable, describe the steps a user needs to follow to install your project.",
        name: 'tests',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
