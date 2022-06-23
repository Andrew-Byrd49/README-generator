// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal packages
const api = require('./utils/git-api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
    },

    {
        type: 'input',
        message: "Please provide instructions and examples of how your project will be used.",
        name: 'usage',
    },

    {
        type: 'input',
        message: "Please select a license for your project.",
        choices: ["MIT", "GPLv3", "GPL"],
        name: 'license',
    },

    {
        type: 'input',
        message: "If applicable, describe how others can contribute to your project.",
        name: 'contributing',
    },

    {
        type: 'input',
        message: "If applicable, provide any tests you have for your project and how they can be ran.",
        name: 'tests',
    },
];

// Genrates README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log('Awesome, your README file has been generated :)')
    });
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {

    try {
        const userResponses = await inquirer.prompt(questions);
        console.log('Your responses: ', userResponses);
        console.log('Okay, fetching your GitHub data now...');

        // Call GitHub api
        const userInfo = await api.getUser(userResponses);
        console.log('Your GitHub account info: ', userInfo);

        //  Pass the responses and GitHub info to generateMarkdown
        console.log('Generating that README...');
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        //  Apply markdown to README file
        await writeFileAsync('yourNewREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
