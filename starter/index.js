// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description?"
    },
    {
        type: "input",
        name: "Installation",
        message: "How do you want to install?"
    },
    {
        type: "input",
        name: "Usage",
        message: "What kind of group you looking for?"
    },
    {
        type: "input",
        name: "Contributting",
        message: "How do you make it?"
    },
    {
        type: "input",
        name: "Test",
        message: "What kind of group you looking for?"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'None'],
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function () {
        console.log("README generated!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log (answers.title)
            console.log (answers.description)
            console.log (answers.Installation)
            console.log (answers.Usage)
            console.log (answers.Contributting)
            console.log (answers.license)
            console.log (answers.githubUsername)
            console.log (answers.email);
            // insert the answers to the template

            const template = generateMarkdown(answers)
            console.log(template)

            // write the template into a file
            writeToFile("sample.md", template)
        })

}

// Function call to initialize app
init();
