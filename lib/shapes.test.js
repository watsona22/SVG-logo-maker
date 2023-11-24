const triangle = new Triangle('../shapes');
describe('Triangle', () => {
    describe('Shape Color', () => {
        it('should return a blue triangle'), () => {
            shape.setColor("orange");
            expect(shape.render()).toEqual('');

        }
    })
});


const square = new Square('../shapes');
describe('Square', () => {
    describe('Shape Color', () => {
        it('should return a'), () => {
            shape.setColor("purple");
            expect(shape.render()).toEqual('');

        }
    })
});

const shape = new Circle('../shapes');
describe('Circle', () => {
    describe('Shape Color', () => {
        it('should return a'), () => {
            shape.setColor("teal");
            expect(shape.render()).toEqual('');
        }
    })
});