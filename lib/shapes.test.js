const { Circle, Triangle, Square } = require('./shapes.js');

describe('Triangle', () => {
    it('should return SVG string for a triangle with the given color', () => {
        const triangle = new Triangle();
        triangle.setColor("orange");

        const expectedSVG = '<polygon points="150,25 250,175 50,175" fill="orange" />'
        expect(triangle.render()).toEqual(expectedSVG);
    });
});

describe('Square', () => {
    it('should return SVG string for a square with the given color', () => {
        const square = new Square();
        square.setColor("blue");

        const expectedSVG = '<rect x="75" y="25" width="150" height="150" fill="blue" />'
        expect(square.render()).toEqual(expectedSVG);
    });
});

describe('Circle', () => {
    it('should return SVG string for a circle with the given color', () => {
        const circle = new Circle();
        circle.setColor("green");

        const expectedSVG = '<circle cx="150" cy="100" r="80" fill="green" />'
        expect(circle.render()).toEqual(expectedSVG);
    });
});
