// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'N/A') {
    return `![License](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  else {
    return '';
  }}

  // TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'N/A') {
    return `![License](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  else {
    return '';
}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'N/A') {
    return `License badge ${license} was rendered with [img.shields.io](https://img.shields.io)`;
  }
  else {
    return '';
}}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)

## Installation
${data.dependencies}

## Usage
${data.usage}

## Credits
Find me at github.com/${data.username} 
Email: [${data.email}](mailto:${data.email})

## License
${renderLicenseSection(data.license)}

## Features

## Contributing
${data.contributing}

## Tests

${data.tests}

## Questions

`;
}

export default generateMarkdown;