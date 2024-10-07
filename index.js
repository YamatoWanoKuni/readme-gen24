// TODO: Include packages needed for this application
import inquirer from 'inquirer'
import fs from 'fs'
import generateMarkdown from './utils/generateMarkdown.js'
// TODO: Create an array of questions for user input
const questions =[
  {
  type: 'input',
  name: 'username',
  message: ('What is your GitHub Username?'),
},
{
  type: 'input',
  name: 'email',
  message: ('What is your email address?'),
},
{
  type: 'input',
  name: 'title',
  message: (`What is your project's Title?`),
},
{
  type: 'input',
  name: 'description',
  message: ('Write a short description of your project?'),
},
{
  type: 'list',
  message: ('What kind of license should project have?'),
  name: 'license',
  choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'N/A'],
},{
  type: 'input',
  name: 'dependencies',
  message: ('What command should be run to install dependencies?'),
  default: 'npm i'
},{
  type: 'input',
  name: 'tests',
  message: ('What command should be run to run tests?'),
  default: 'npm test'
},{
  type: 'input',
  name: 'usage',
  message: ('What does the user need to know about using the repo?'),
},{
  type: 'input',
  name: 'contributing',
  message: ('What does the user need to know about contributing to the repo?'),
},];
   
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data , (err) =>
    err ? console.log(err) : console.log('Success!'));
}
  


// }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    
    console.log('Generating README');
    writeToFile('README.md', generateMarkdown({...responses}));
  });
}

// Function call to initialize app
init()