// parent class shape
class Shape {
    constructor(text, textcolor, shape, shapecolor) {
        this.text = text,
        this.textcolor = textcolor,
        this.shapecolor = shapecolor
        this.shape = shape
    }

    makeTriangle(shape) {
        if (shape == 'triangle') {
            return '<polygon points="150 10, 240 190, 60 190"'
        }
    }

    makeCircle(shape) {
        if (shape == 'circle') {
            return `<${shape} cx="150" cy="100" r="90"`
        }
    }

    makeSquare(shape) {
        if (shape == 'square') {
            return '<rect x="60" y="10" width="180" height=180"'
        }
    }
}

// class Triangle extends Shape {
//     constructor(this, text, textcolor, shapecolor, shape) {
//         super(text, textcolor, shape, shapecolor);
//     }

//     makeTriangle(shape) {
//         if (shape == 'Triangle') {
//             return '<polygon points="150 10, 240 190, 60 190"'
//         }
//     }
// }

// class Circle extends Shape {
//     constructor(this, text, textcolor, shapecolor, shape) {
//         super(text, textcolor, shape, shapecolor);
//     }

//     makeCircle() {

//     }
// }

// class Square {
//     constructor()
// }