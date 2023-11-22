// Exports `Triangle`, `Circle`, and `Square` classes

const inquirer = require('inquirer');
const square = new Square();
const circle = new Circle();
const triangle = new Triangle();
const letters = data.text
const letterLength = letterLength();

function letterLength(letters) {
    if (letters.length <= 3) {
        return '';
    } else {
        return console.log('Please enter three letters')
    }
}

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
                message: 'Which color would you prefer?',
                choices: ['white', 'black', 'green', 'blue'],
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
                message: 'Which color would you prefer?',
                choices: ['orange', 'purple', 'teal', 'brown'],
            },
        ]);
        const image = `${data.name.toLowerCase().split(' ').join('')}.svg`;
        const content = `${data.value}
        {
            return image();`

        fs.writeFile(filename, content, (err) =>
            err ? console.log(err) : console.log('Success')
        );

    } catch (err) {
        console.log(err)
    }
};
