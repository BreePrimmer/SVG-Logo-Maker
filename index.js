// const shapeFunctions = require('shapes.js')
const inquirer = require('inquirer')

const fs = require('fs')

class Shape {
    constructor(text, textcolor, shape, shapecolor) {
        this.text = text,
        this.textcolor = textcolor,
        this.shapecolor = shapecolor
        this.shape = shape
    }

    makeShape(shape) {
        if (shape == 'triangle') {
            return '<polygon points="150 10, 240 190, 60 190"'
        } else if (shape == 'circle') {
            return `<${shape} cx="150" cy="100" r="90"`
        } else if (shape == 'square') {
            return '<rect x="60" y="10" width="180" height="180"'
        }
    }

    makeText(shape, textcolor, text) {
        if (shape == 'triangle') {
            return `<text x="110px" y="150px" font-size="50px" fill="${textcolor}">${text}</text>`
        } else if (shape == 'circle' || 'square') {
            return `<text x="90px" y="125px" font-size="70px" fill="${textcolor}">${text}</text>`
        }
    }

    // makeTriangle(shape) {
    //     if (shape == 'triangle') {
    //         return '<polygon points="150 10, 240 190, 60 190"'
    //     }
    // }

    // makeCircle(shape) {
    //     if (shape == 'circle') {
    //         return `<${shape} cx="150" cy="100" r="90"`
    //     }
    // }

    // makeSquare(shape) {
    //     if (shape == 'square') {
    //         return '<rect x="60" y="10" width="180" height=180"'
    //     }
    // }
}

const userShape = new Shape()
// userShape.makeShape()


const generateSVG = ({text, textcolor, shape, shapecolor}) => (
    `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${userShape.makeShape(shape)} fill="${shapecolor}"/>
    ${userShape.makeText(shape, textcolor, text)}`
    
)

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
    console.log(response)
    // const userShape = new Shape(response)
    // userShape.makeShape()
    const markup = generateSVG(response)
    console.log(markup)
    fs.writeFile('./logo.svg', markup, err => {
        err ? console.error(err) : console.log("File Successfully Written")
    });
});

// const createTriangle = () => {
//     if (shape == 'Triangle') {
//         let Triangle.shape = 
//     }
// }