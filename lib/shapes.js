// Exports `Triangle`, `Circle`, and `Square` classes

const inquirer = require('inquirer');
const shape = new Shape();
const square = new Square();
const circle = new Circle();
const triangle = new Triangle();
const letters = data.text
const letterLength = letterLength();

class Shape {
    constructor(color, text) {
        this.color = color;
        this.text = text;
    }
}
class Circle extends Shape {
    constructor() {
        super(color, text);
    }
}
class Triangle extends Shape {
    constructor() {
        super(color, text);
    }
}
class Square extends Shape {
    constructor() {
        super(color, text);
    }
}

function letterLength(letters) {
    if (letters.length <= 3) {
        return '';
    } else {
        return console.log('Please enter three letters')
    }
};

async function askLogo() {
    try {
        const data = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your file?',
            },
            {
                type: 'input',
                name: 'text',
                message: 'Enter no more than three characters for your logo',
            },
            {
                type: 'list',
                name: 'color1',
                message: 'Which color would you prefer for the text?',
                choices: ['white', 'black', 'green'],
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Would you like to choose a circle, triangle, or square?',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'list',
                name: 'color2',
                message: 'Which color would you prefer for the shape?',
                choices: ['orange', 'purple', 'teal'],
            },
        ]);
        //append values from prompt to create a logo
        const color1 = data.color1;
        const color2 = data.color2;
        const container = data.shape;
        const filename = `${data.name.toLowerCase().split(' ').join('')}.svg`;
        const content = `
        <svg version="1.1"
        width="300" height="200"
        xmlns="${filename}">
        <rect width="100%" height="100%" fill="white" />
        <${container} cx="150" cy="100" r="80" fill="${color2}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${style}">SVG</text>
        </svg>
        {`
        return image()

        fs.writeFile(filename, content, (err) =>
            err ? console.log(err) : console.log('Success')
        )

    } catch (err) {
        console.log(err)
    }
};
askLogo();
const style = function shapeColor() {
    if (color2 === 'orange') {
        style.backgroundColor = 'orange'

    } else if (color2 === 'purple') {

        style.backgroundColor = 'purple'
    } else {
        style.backgroundColor = 'teal'
    }
}

//referenced MDN for svg file logo sample (lines 78-84): https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started