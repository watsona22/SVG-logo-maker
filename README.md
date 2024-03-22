# SVG-logo-maker
## Description

This program was designed to allow users to create a logo 300 x 200px logo that is saved as a svg file. The application prompts the user to select a color and shape, provide text for the logo. There will also be a test file supported by jest to insure that the application functions as expected. The project demonstrated the use of node to create a program written in Javascript. 

The acceptance criteria were as follows: 

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

All criteria were met and the program functions as expected. 

I know how to utilize the node environment to create a program using dynamic Javascript. There were helpful error messages in the terminal to direct progress. The inquirer and jest documentation were utilized to created the desired outcome. There were many questions about the render aspect of the application. Initially the shape classes contained extraneous properties, color was the only one needed. Furthermore setting points along the x and y axis for each shape type was complicated and then applying those attributes for each class took some time to figure out. Configuring the tests to work took some trial and error, but ultimately the application was completed as expected. The recurring issue of needing to organize code so that it can be read and debugged is vitally important. Previous eureka moments were just as valuable here - reformatting code, implementing clear naming convention, and notating often.  I am still working to make this a natural part of the build process. 

## Usage

The js file can be used to understand the dynamic code that supports the application. A link to the deployed program is included below, for your convenience. 
https://drive.google.com/file/d/1NbK17EybQA4E1m2bWwJpXZdhQsKrB1E-/view

## License

MIT License
Copyright (c) [2023] [Amber Watson]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
