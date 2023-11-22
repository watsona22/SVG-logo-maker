const shape = new Triangle('../shapes.test.js');
describe('Triange', () => {
    describe('Shape Color', () => {
        it('should return a blue polygon', () => {
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

        });
    });


});