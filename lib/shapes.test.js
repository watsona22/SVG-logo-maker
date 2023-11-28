const validateShape = require('./lib/shapes.js');

//the example below should pass

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

describe('validateShape', () => {

    //writes a test to see that the number of characters entered is no more than 3 characters long.
    // describe('Word size', () => {
    //     it('should return false for a letter length greater than 3 characters long', () => {
    //         const validateShape = new validateShape();
    //         const result = validateShape.isLength('pace');

    //         expect(result).toEqual(false);
    //     });
    // });

    const triangle = new Triangle('./lib/shapes.js');
    describe('Triangle', () => {
        it('should return true for a triangle with the chosen color'), () => {
            shape.setColor("orange");
            expect(shape.render()).toEqual('<polygon points="150,25 250,175 50,175" fill="orange" />');

        }
    })
});


const square = new Square('./lib/shapes.js');
describe('Square', () => {
    it(`should return true for a square with the chosen color, ${this.color}`), () => {
        shape.setColor(`${this.color}`);
        expect(shape.render()).toEqual(`<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`);
    }
});

const shape = new Circle('./lib/shapes.js');
describe('Circle', () => {
    it(`should return true for a circle with the chosen color, ${this.color}`), () => {
        shape.setColor(`${this.color}`);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${this.color}" />`);
    }
});