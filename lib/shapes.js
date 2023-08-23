class Shape {
    constructor(text, textcolor, shape, shapecolor) {
        this.text = text,
        this.textcolor = textcolor,
        this.shapecolor = shapecolor
        this.shape = shape
    }

    // returns markup for the shape based on what shape the user chooses.
    makeShape(shape) {
        if (shape == 'triangle') {
            return '<polygon points="150 10, 240 190, 60 190"'
        } else if (shape == 'circle') {
            return `<${shape} cx="150" cy="100" r="90"`
        } else if (shape == 'square') {
            return '<rect x="60" y="10" width="180" height="180"'
        }
    }

    // returns markup for the text based on what shape the user chooses.
    makeText(shape, textcolor, text) {
        if (shape == 'triangle') {
            return `<text x="100px" y="150px" font-size="50px" fill="${textcolor}">${text}</text>`
        } else if (shape == 'circle' || 'square') {
            return `<text x="85px" y="125px" font-size="70px" fill="${textcolor}">${text}</text>`
        }
    }
};



module.exports = new Shape()
// module.exports = Shape.makeShape()
// module.exports = Shape.makeText()