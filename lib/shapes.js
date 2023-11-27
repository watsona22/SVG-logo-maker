// Exports `Triangle`, `Circle`, and `Square` classes

const inquirer = require('inquirer');
const fs = require('fs');


class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<polygon points="150,25 250,175 50,175" fill="${this.color}" />`
    }
}
class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`
    }
}

function letterLength(letters) {
    if (letters && letters.length <= 3) {
        return true;
    } else {
        return 'Please enter three letters'
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
                validate: letterLength
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
        const letters = data.text
        const color1 = data.color1;
        const shapeColor = data.color2;
        const name = data.name;
        let shape;
        switch (data.shape) {
            case "circle":
                shape = new Circle(shapeColor)
                break;
            case "triangle":
                shape = new Triangle(shapeColor)
                break;
            case "square":
                shape = new Square(shapeColor)
                break;
        }

        const filename = `${data.name.toLowerCase().split(' ').join('')}.svg`;
        const content = `
        
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color1}">${letters}</text>
        </svg>`

        fs.writeFile(filename, content, (err) =>
            err ? console.log(err) : console.log(`Generated ${name}.svg`)
        );

    } catch (err) {
        console.log(err)
    }
}

askLogo();

//referenced MDN for svg file logo sample (lines 78-84): https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started