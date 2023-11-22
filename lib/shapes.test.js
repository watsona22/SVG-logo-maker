const triangle = new Triangle('../shapes.test.js');
describe('Triangle', () => {
    describe('Shape Color', () => {
        it('should return a blue polygon'), () => {
            shape.setColor("blue");
            expect(shape.render()).toEqual('');

        }
    })
});


const square = new Square('../shapes.test.js');
describe('Square', () => {
    describe('Shape Color', () => {
        it('should return a'), () => {
            shape.setColor("blue");
            expect(shape.render()).toEqual('');

        }
    })
});

const shape = new Circle('../shapes.test.js');
describe('Circle', () => {
    describe('Shape Color', () => {
        it('should return a'), () => {
            shape.setColor("blue");
            expect(shape.render()).toEqual('');
        }
    })
});