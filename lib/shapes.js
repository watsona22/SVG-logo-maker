// Exports `Triangle`, `Circle`, and `Square` classes

const inquirer = require('inquirer');
const fs = require('fs');
const { join } = require('path');



// const letterLength = letterLength();
const pie = 3.14;






//referenced the following resource from w3resource to render shapes: https://www.w3resource.com/javascript-exercises/javascript-drawing-exercise-1.php
function draw() {
    const container = data.shape;


    var canvas = document.getElementById('container');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        context.fillRect(20, 20, 100, 100);
        context.clearRect(40, 40, 60, 60);
        context.strokeRect(45, 45, 50, 50);
    }
}


class Shape {
    constructor(color, text, width, length) {
        this.color = color;
        this.text = text;
        this.width = width;
        this.length = length;

        // const getArea = () => {
        //     return '';
        // }

    }
}
class Circle extends Shape {
    constructor(color, text, width, context) {
        super(color, text, width);
        // width = 2;
        this.context = context
        // context.fillCir(20, 20, 100, 100);
        // context.clearCir(40, 40, 60, 60);
        // context.strokeCir(45, 45, 50, 50);

        //what are unique properties of circle. area is pie*r^2
    }
}
class Triangle extends Shape {
    constructor(color, text, width, length, context) {
        super(color, text, width, length);
        // width = 2;
        // length = 6;
        this.context = context

        // context.fillTri(20, 20, 100, 100);
        // context.clearTri(40, 40, 60, 60);
        // context.strokeTri(45, 45, 50, 50);
        //what are unique properties of triangle. area is 1/2 bh
    }
}
class Square extends Shape {
    constructor(color, text, width, length, context) {
        super(color, text, width, length);
        this.context = context

        // context.fillRec(20, 20, 100, 100);
        // context.clearRec(40, 40, 60, 60);
        // context.strokeRec(45, 45, 50, 50);
        // width = 2;
        // length = 2;
        //what are unique properties of square. area is l*h
    }
}
const shape = new Shape();
const square = new Square();
const circle = new Circle();
const triangle = new Triangle();

function letterLength(letters) {
    if (letters <= 3) {
        return '';
    } else {
        return console.log('Please enter three letters')
    }
};
letterLength();

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
        const letters = data.text
        const color1 = data.color1;
        const color2 = data.color2;
        const style = function shapeColor() {
            if (color2 === 'orange') {
                style.backgroundColor = 'orange'

            } else if (color2 === 'purple') {

                style.backgroundColor = 'purple'
            } else {
                style.backgroundColor = 'teal'
            }
        }
        const hue = function letterColor() {
            if (color1 === 'white') {
                style.color = 'white'

            } else if (color2 === 'black') {

                style.color = 'black'
            } else {
                style.color = 'green'
            }
        }
        const filename = `${data.name.toLowerCase().split(' ').join('')}.svg`;
        const content = `
        <svg version="1.1"
        width="300" height="200"
        xmlns="${letters}">
        <shape width="100%" height="100%" fill="white" />
        <${draw} cx="150" cy="100" r="80" fill="${style}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${hue}">SVG</text>
        </svg>
        {`

        fs.writeFile(filename, content, (err) =>
            err ? console.log(err) : console.log('Success')
        );

    } catch (err) {
        console.log(err)
    }
}
askLogo();


//referenced MDN for svg file logo sample (lines 78-84): https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started