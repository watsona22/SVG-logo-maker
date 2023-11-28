const validateShape = require('./shapes.js');


describe('validateShape', () => {

    describe('Triangle', () => {
        it('should return true for a triangle with the chosen color', () => {
            triangle.setColor("orange");
            expect(triangle.render()).toEqual('<polygon points="150,25 250,175 50,175" fill="orange" />');
        });
    });

    describe('Square', () => {
        it('should return true for a square with the chosen color', () => {
            square.setColor("blue");
            expect(square.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="blue" />');
        });
    });

    describe('Circle', () => {
        it('should return true for a circle with the chosen color', () => {
            circle.setColor("green");
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
        });
    });
});