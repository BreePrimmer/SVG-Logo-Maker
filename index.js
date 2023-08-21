// const shapeFunctions = require('shapes.js')
const inquirer = require('inquirer')
const fs = require('fs')
const shapes = require('./lib/shapes')


// generates the svg markup
const generateSVG = ({text, textcolor, shape, shapecolor}) => (
    `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${shapes.makeShape(shape)} fill="${shapecolor}"/>
    ${shapes.makeText(shape, textcolor, text)}`
    
)

// prompts for user input
inquirer.prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'Please select the shape for your logo.',
        choices: ['triangle', 'square', 'circle']
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'Please enter the color for your shape.'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters for your logo text.'
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'Please enter the color for your logo text.'
    }
]).then((response) => {
    // generates the markup with the user input response and writes the svg file.
    console.log(response)
    const markup = generateSVG(response)
    // generates file
    fs.writeFile('./logo.svg', markup, err => {
        err ? console.error(err) : console.log("Generated logo.svg")
    });
});