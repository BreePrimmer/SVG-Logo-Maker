const shapes = require('./shapes')

// shape generation testing
test("Creating the square shape", () => {
    expect(shapes.makeShape('square')).toBe('<rect x="60" y="10" width="180" height="180"')
})

// text and color generation testing
test("Blue BRD text for the triangle shape", () => {
    expect(shapes.makeText('triangle', 'blue', 'BRD')).toBe('<text x="100px" y="150px" font-size="50px" fill="blue">BRD</text>');
})

test("White TGT text for the circle shape", () => {
    expect(shapes.makeText('circle', 'white', 'TGT')).toBe('<text x="85px" y="125px" font-size="70px" fill="white">TGT</text>')
})

test("Brown GPR text for the square shape", () => {
    expect(shapes.makeText('square', 'brown', 'GPR')).toBe('<text x="85px" y="125px" font-size="70px" fill="brown">GPR</text>')
})

