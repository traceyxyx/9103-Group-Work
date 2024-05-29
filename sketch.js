// Define a class named BigRectangle for creating and displaying large rectangles
class BigRectangle {
  constructor(x, y, width, height, color) {
    this.x = x;      // The x-coordinate of the rectangle
    this.y = y;      // The y-coordinate of the rectangle
    this.width = width;  // The width of the rectangle
    this.height = height; // The height of the rectangle
    this.color = color;  // The color of the rectangle
  }

  // Method to display the rectangle
  display() {
    fill(this.color);  // Set the fill color for the rectangle
    noStroke();        // Remove the stroke (outline) of the shape
    rect(this.x, this.y, this.width, this.height);  // Draw the rectangle
  }
}

let bigRectangles = [];  // Initialize an empty array to store big rectangle objects

// Define color variables in hexadecimal format
let yellow = '#EBCF14';
let red = '#A53A32';
let blue = '#39468C';
let grey = '#D8D6C7';

// The setup function to initialize the canvas and create rectangle objects
function setup() {
  let canvasSize = min(windowWidth, windowHeight);  // Set the canvas size to the smaller dimension of the window
  createCanvas(canvasSize, canvasSize);            // Create a square canvas

  // Set big rectangle, Layer them on the canvas from largest to smallest.

  let bigRectangle1 = new BigRectangle(canvasSize * 0.868, canvasSize * 0.22, canvasSize * 0.066, canvasSize * 0.066, [red]);
  let bigRectangle2 = new BigRectangle(canvasSize * 0.648, canvasSize * 0.198, canvasSize * 0.088, canvasSize * 0.165, [blue]);
  let bigRectangle3 = new BigRectangle(canvasSize * 0.087, canvasSize * 0.66, canvasSize * 0.066, canvasSize * 0.066, [blue]);
  let bigRectangle4 = new BigRectangle(canvasSize * 0.154, canvasSize * 0.770, canvasSize * 0.088, canvasSize * 0.088, [yellow]);
  let bigRectangle5 = new BigRectangle(canvasSize * 0.185, canvasSize * 0.793, canvasSize * 0.022, canvasSize * 0.022, [grey]);
  let bigRectangle6 = new BigRectangle(canvasSize * 0.846, canvasSize * 0.666, canvasSize * 0.066, canvasSize * 0.066, [blue]);
  let bigRectangle7 = new BigRectangle(canvasSize * 0.846, canvasSize * 0.732, canvasSize * 0.066, canvasSize * 0.033, [yellow]);
  let bigRectangle8 = new BigRectangle(canvasSize * 0.846, canvasSize * 0.765, canvasSize * 0.066, canvasSize * 0.035, [red]);
  let bigRectangle9 = new BigRectangle(canvasSize * 0.154, canvasSize * 0.088, canvasSize * 0.088, canvasSize * 0.022, [yellow]);
  let bigRectangle10 = new BigRectangle(canvasSize * 0.868, canvasSize * 0.21, canvasSize * 0.066, canvasSize * 0.066, [red]);
  let bigRectangle11 = new BigRectangle(canvasSize * 0.648, canvasSize * 0.198, canvasSize * 0.088, canvasSize * 0.165, [blue]);
  let bigRectangle12 = new BigRectangle(canvasSize * 0.352, canvasSize * 0.374, canvasSize * 0.065, canvasSize * 0.187, [yellow]);
  let bigRectangle13 = new BigRectangle(canvasSize * 0.692, canvasSize * 0.462, canvasSize * 0.088, canvasSize * 0.1, [red]);
  let bigRectangle14 = new BigRectangle(canvasSize * 0.176, canvasSize * 0.358, canvasSize * 0.044, canvasSize * 0.088, [yellow]);
  let bigRectangle15 = new BigRectangle(canvasSize * 0.286, canvasSize * 0.07, canvasSize * 0.066, canvasSize * 0.11, [red]);
  let bigRectangle16 = new BigRectangle(canvasSize * 0.176, canvasSize * 0.066, canvasSize * 0.044, canvasSize * 0.11, [red]);
  let bigRectangle17 = new BigRectangle(canvasSize * 0.286, canvasSize * 0.154, canvasSize * 0.066, canvasSize * 0.028, [grey]);
  let bigRectangle18 = new BigRectangle(canvasSize * 0.3, canvasSize * 0.099, canvasSize * 0.033, canvasSize * 0.033, [grey]);
  let bigRectangle19 = new BigRectangle(canvasSize * 0.352, canvasSize * 0.44, canvasSize * 0.066, canvasSize * 0.022, [grey]);
  let bigRectangle20 = new BigRectangle(canvasSize * 0.352, canvasSize * 0.487, canvasSize * 0.066, canvasSize * 0.044, [grey]);
  let bigRectangle21 = new BigRectangle(canvasSize * 0.176, canvasSize * 0.11, canvasSize * 0.044, canvasSize * 0.022, [grey]);
  let bigRectangle22 = new BigRectangle(canvasSize * 0.187, canvasSize * 0.396, canvasSize * 0.022, canvasSize * 0.022, [grey]);
  let bigRectangle23 = new BigRectangle(canvasSize * 0.286, canvasSize * 0.456, canvasSize * 0.044, canvasSize * 0.11, [blue]);
  let bigRectangle24 = new BigRectangle(canvasSize * 0.286, canvasSize * 0.456, canvasSize * 0.044, canvasSize * 0.022, [yellow]);
  let bigRectangle25 = new BigRectangle(canvasSize * 0.297, canvasSize * 0.5, canvasSize * 0.022, canvasSize * 0.022, [yellow]);
  let bigRectangle26 = new BigRectangle(canvasSize * 0.648, canvasSize * 0.264, canvasSize * 0.088, canvasSize * 0.066, [red]);
  let bigRectangle27 = new BigRectangle(canvasSize * 0.67, canvasSize * 0.275, canvasSize * 0.044, canvasSize * 0.033, [yellow]);
  let bigRectangle28 = new BigRectangle(canvasSize * 0.714, canvasSize * 0.502, canvasSize * 0.044, canvasSize * 0.033, [grey]);
  let bigRectangle29 = new BigRectangle(canvasSize * 0.692, canvasSize * 0.58, canvasSize * 0.088, canvasSize * 0.04, [grey]);
  let bigRectangle30 = new BigRectangle(canvasSize * 0.846, canvasSize * 0.502, canvasSize * 0.105, canvasSize * 0.04, [yellow]);
  let bigRectangle31 = new BigRectangle(canvasSize * 0.888, canvasSize * 0.502, canvasSize * 0.022, canvasSize * 0.04, [red]);
  let bigRectangle32 = new BigRectangle(canvasSize * 0.088, canvasSize * 0.22, canvasSize * 0.045, canvasSize * 0.045, [blue]);
  let bigRectangle33 = new BigRectangle(canvasSize * 0.89, canvasSize * 0.11, canvasSize * 0.06, canvasSize * 0.047, [blue]);
  let bigRectangle34 = new BigRectangle(canvasSize * 0.154, canvasSize * 0.265, canvasSize * 0.088, canvasSize * 0.075, [yellow]);
  let bigRectangle35 = new BigRectangle(canvasSize * 0.181, canvasSize * 0.287, canvasSize * 0.035, canvasSize * 0.035, [grey]);


  // add all big rectangles to the array
  bigRectangles.push(bigRectangle1);
  bigRectangles.push(bigRectangle2);
  bigRectangles.push(bigRectangle3);
  bigRectangles.push(bigRectangle4);
  bigRectangles.push(bigRectangle5);
  bigRectangles.push(bigRectangle6);
  bigRectangles.push(bigRectangle7);
  bigRectangles.push(bigRectangle8);
  bigRectangles.push(bigRectangle9);
  bigRectangles.push(bigRectangle10);
  bigRectangles.push(bigRectangle11);
  bigRectangles.push(bigRectangle12);
  bigRectangles.push(bigRectangle13);
  bigRectangles.push(bigRectangle14);
  bigRectangles.push(bigRectangle15);
  bigRectangles.push(bigRectangle16);
  bigRectangles.push(bigRectangle17);
  bigRectangles.push(bigRectangle18);
  bigRectangles.push(bigRectangle19);
  bigRectangles.push(bigRectangle20);
  bigRectangles.push(bigRectangle21);
  bigRectangles.push(bigRectangle22);
  bigRectangles.push(bigRectangle23);
  bigRectangles.push(bigRectangle24);
  bigRectangles.push(bigRectangle25);
  bigRectangles.push(bigRectangle26);
  bigRectangles.push(bigRectangle27);
  bigRectangles.push(bigRectangle28);
  bigRectangles.push(bigRectangle29);
  bigRectangles.push(bigRectangle30);
  bigRectangles.push(bigRectangle31);
  bigRectangles.push(bigRectangle32);
  bigRectangles.push(bigRectangle33);
  bigRectangles.push(bigRectangle34);
  bigRectangles.push(bigRectangle35);
 

}

// The draw function that gets called repeatedly to draw the content on the canvas
function draw() {
  // Set canvas size and clear the background
  let canvasSize = min(windowWidth, windowHeight);
  resizeCanvas(canvasSize, canvasSize);
  background(255);

  // Define the size ratio of small squares to the canvas
  let rectWidth = canvasSize * 0.022;
  let rectHeight = canvasSize * 0.02;


//Draw rows and columns
  translate(0, canvasSize * 0.56);
  noStroke();
  drawRow(0, 0, rectWidth, rectHeight,
    [yellow, yellow, grey, blue, yellow, yellow, blue, yellow, yellow, yellow, blue, yellow, grey, yellow, red, yellow, yellow, red,
      grey, grey, red, yellow, yellow, grey, yellow, grey, yellow, yellow, yellow, red, yellow, blue, grey, grey, blue, yellow, yellow, red,
      yellow, yellow, yellow, blue, grey, red, yellow, yellow]);
  drawRow(0, canvasSize * 0.06, rectWidth, rectHeight,
    [yellow, yellow, grey, red, yellow, yellow, blue, yellow, yellow, grey, yellow, red, yellow, yellow, grey, yellow, yellow, blue, yellow,
      yellow, red, yellow, yellow, blue, yellow, yellow, grey, yellow, grey, yellow, yellow, grey, yellow, blue, yellow, blue, yellow,
      yellow, blue, yellow, yellow, yellow, red, grey, yellow, red]);
  drawRow(canvasSize * 0.081, canvasSize * 0.11, rectWidth * 3, rectHeight * 3,
    [blue]);
  drawRow(canvasSize * 0.058, canvasSize * 0.165, rectWidth, rectHeight,
    [red, yellow, red, yellow, yellow, grey, yellow, blue, yellow, yellow, grey, yellow, yellow, blue, yellow, red, yellow, blue, yellow,
      grey, red, grey]);
  drawRow(0, canvasSize * 0.125, rectWidth, rectHeight,
    [yellow, blue, yellow]);
  drawRow(0, canvasSize * 0.216, rectWidth, rectHeight,
    [yellow, blue, yellow]);
  drawRow(0, canvasSize * 0.295, rectWidth, rectHeight,
    [yellow, grey, yellow, blue, yellow, blue, yellow, yellow, red, grey, blue, yellow, yellow, yellow, grey, yellow, yellow, blue, yellow,
      red, yellow, blue, yellow, red, yellow, blue, yellow, red, yellow, blue, yellow, red, yellow, blue, yellow, yellow, grey, yellow,
      yellow, red, yellow, yellow, blue, yellow, yellow, red, yellow]);
  drawRow(0, canvasSize * 0.386, rectWidth, rectHeight,
    [yellow, yellow, grey, red, yellow, yellow, blue, yellow, yellow, red, yellow, blue, yellow, yellow, yellow, grey, yellow, grey, yellow,
      blue, yellow, blue, yellow, yellow, grey, yellow, grey, yellow, red, yellow, blue, yellow, blue, yellow, yellow, grey, yellow, yellow,
      yellow, blue, yellow, yellow, red, yellow, yellow, red, yellow]);
  drawRow(0, canvasSize * 0.325, rectWidth, rectHeight,
    [yellow, red, yellow]);
  drawRow(canvasSize * 0.838, canvasSize * 0.24, rectWidth, rectHeight,
    [blue, yellow, yellow, grey, yellow, red]);
  drawRow(canvasSize * 0.136, canvasSize * 0.216, rectWidth * 4, rectHeight * 4,
    [yellow]);
  drawRow(canvasSize * 0.17, canvasSize * 0.233, rectWidth, rectHeight,
    [grey]);
  drawRow(canvasSize * 0.448, canvasSize * 0.386, rectWidth * 4, rectHeight * 3,
    [red]);


  // the first row
  drawRow(0, canvasSize * -0.51, rectWidth, rectHeight*1.02,
    [yellow, blue, yellow, yellow, yellow, yellow, yellow, blue, yellow, grey, yellow, yellow, yellow, yellow, yellow, grey, yellow,
      yellow, yellow, yellow, yellow, yellow, yellow, yellow, grey, yellow, grey, yellow, grey, yellow, yellow, yellow, yellow, yellow,
      grey, grey, yellow, yellow, yellow, grey, blue, yellow, grey, yellow, blue, grey, yellow, grey]);

  // the second row 
  drawRow(0, canvasSize * -0.38, rectWidth, rectHeight,
    [yellow, red, yellow, yellow, yellow, blue, yellow, grey, grey, red, yellow, grey, yellow, blue, yellow, grey, yellow, yellow,
      yellow, yellow, yellow, grey, grey, blue, yellow, red, grey, grey, yellow, yellow, yellow, yellow, grey, grey, yellow,
      yellow, yellow, grey, grey, grey, red, yellow, yellow, grey, blue, yellow]);

  // the third row   
  drawRow(0, canvasSize * -0.2, rectWidth, rectHeight,
    [yellow, red, yellow, blue, yellow, grey, red, yellow, yellow, grey, blue, yellow, yellow, grey, yellow, blue, yellow, yellow, yellow,
      red, yellow, yellow, blue, yellow, yellow, red, yellow, blue, yellow, yellow, red, yellow, yellow, yellow, red, yellow, yellow, yellow,
      yellow, blue, yellow, blue, yellow, red, yellow, grey, blue, grey, yellow]);

  // the fourth row        
  drawRow(0, canvasSize * -0.12, rectWidth, rectHeight,
    [yellow, red, grey, blue, yellow, yellow, red, grey, yellow, yellow, grey, blue, yellow, yellow, red, grey, grey, yellow, yellow, red,
      grey, grey, grey, grey, blue, yellow, yellow, grey, yellow, grey, yellow, yellow, red, grey, yellow, grey, yellow, yellow, blue, yellow,
      yellow, yellow, red, yellow, yellow, grey, red, yellow, red, grey]);


  //column
  translate(0, (-canvasSize * 0.56));

  let rectNewHeight = canvasSize * 0.022;
  //first column from the left
  drawColumn(canvasSize * 0.022, 0, rectWidth, rectNewHeight,
    [yellow, blue, grey, yellow, yellow, blue, yellow, yellow, red, yellow, yellow, blue, yellow, red, yellow, grey, red]);
  //second column from the left
  drawColumn(canvasSize * 0.066, 0, rectWidth, rectNewHeight,
    [red, yellow, grey, yellow, yellow, red, yellow, grey, yellow, grey, yellow, yellow, grey, yellow, yellow, yellow, yellow, blue, yellow, yellow, blue, red, yellow, yellow, grey, blue, yellow, yellow, red, yellow, grey, red, grey, red, yellow, red, grey, yellow, yellow, blue, grey, yellow, grey, red, yellow, yellow]);
  //third column from the left
  drawColumn(canvasSize * 0.132, 0, rectWidth, rectNewHeight,
    [yellow, yellow, yellow, grey, grey, blue, yellow, yellow, blue, yellow, blue, blue, yellow, red, grey, grey, blue, grey, blue, grey, red, yellow, blue, yellow, yellow, blue, yellow, yellow, blue, yellow, yellow, blue, blue, red, yellow, blue, grey, red, yellow, blue, grey, blue, grey, blue]);
  //forth column from the left
  drawColumn(canvasSize * 0.242, 0, rectWidth, rectNewHeight,
    [red, yellow, grey, yellow, yellow, blue, yellow, blue, yellow, grey, yellow, blue, yellow, red, yellow, grey, yellow, blue, grey, yellow, blue, grey, yellow, grey, yellow, yellow, blue, yellow, red, yellow, grey, yellow, yellow, blue, yellow, red, grey, yellow, grey, blue, grey, red, yellow, blue, yellow, yellow]);

  //first column from the right
  drawColumn(canvasSize * 0.95, 0, rectWidth, rectNewHeight,
    [red, yellow, red, grey, yellow, red, yellow, grey, blue, grey, yellow, blue, grey, yellow, red, yellow, grey, yellow, yellow, grey, red, yellow, blue, grey, yellow, red, yellow, grey, yellow, grey, yellow, yellow, red, grey, blue, yellow, yellow, red, yellow, red, yellow, grey, yellow, yellow, red, yellow, yellow]);
  //second column from the right
  drawColumn(canvasSize * 0.912, 0, rectWidth, rectNewHeight,
    [yellow, blue, grey, yellow, grey, blue, blue]);
  drawColumn(canvasSize * 0.912, canvasSize * 0.179, rectWidth, rectNewHeight*0.98,
    [yellow, grey, red, red, red, grey, yellow, grey, yellow, grey, yellow, yellow, red]);
  drawColumn(canvasSize * 0.912, canvasSize * 0.64, rectWidth, rectNewHeight,
    [red, grey, yellow, yellow, grey, grey, blue, yellow, yellow, grey]);
  //third column
  drawColumn(canvasSize * 0.868, 0, rectWidth, rectNewHeight*0.96,
    [red, grey, blue, grey, yellow, red, yellow, grey, yellow, grey, red, red, red, grey, yellow, blue, yellow, red]);

  //fourth column
  drawColumn(canvasSize * 0.824, 0, rectWidth, rectNewHeight,
    [yellow, blue, grey, yellow, yellow, yellow, blue, yellow, blue, yellow, yellow, red, yellow, yellow, grey, blue, yellow, blue, yellow, grey, red, yellow, yellow, blue, yellow, red, yellow, grey, blue, grey, yellow, yellow, red, grey, blue, yellow, yellow, red, grey, blue, yellow, yellow, blue, yellow, red, yellow, grey, yellow, yellow, blue, grey, yellow]);

  // fifth column
  drawColumn(canvasSize * 0.52, 0, rectWidth, rectNewHeight,
    [yellow, grey, red, yellow, grey, yellow, grey, red, grey, yellow, red, yellow, grey, yellow, grey, yellow, blue])
  drawColumn(canvasSize * 0.52, canvasSize * 0.465, rectWidth, rectNewHeight,
    [grey, yellow, yellow, blue, yellow, yellow, red, grey, yellow, yellow, grey, blue, yellow, grey, yellow, grey, yellow, yellow, red, grey, yellow, red, grey, yellow, yellow, blue, grey, yellow, yellow])

  //sixth column
  drawColumn(canvasSize * 0.472, 0, rectWidth, rectNewHeight,
    [red, yellow, grey, yellow, blue, red, yellow, blue, yellow, red, grey, yellow, yellow, blue, yellow, red, grey, blue, yellow, grey, yellow, red, yellow, yellow, grey, yellow, red, grey, red, grey, yellow, grey, yellow, blue, yellow, yellow, red, blue, grey, yellow, red, grey, yellow]);

  //inner column    
  drawColumn(canvasSize * 0.592, canvasSize * 0.465, rectWidth, rectNewHeight,
    [yellow, yellow, grey, yellow, red, yellow, red]);



  // Function calls to draw rows and columns of colored squares
  // (omitted for brevity, as there are many)

  // Display all the big rectangles by iterating over the array
  for (let rectangle of bigRectangles) {
    rectangle.display();
  }
}

// Function to draw a row of colored squares
function drawRow(x, y, w, h, colors) {
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);  // Set the fill color for the square
    rect(x + i * w, y, w, h);  // Draw the square
  }
}

// Function to draw a column of colored squares
function drawColumn(x, y, w, h, colors) {
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);  // Set the fill color for the square
    rect(x, y + i * h, w, h);  // Draw the square
  }
}

// Adjust canvas size when window is resized
function windowResized() {
  let canvasSize = min(windowWidth, windowHeight);
  resizeCanvas(canvasSize, canvasSize);
  draw(); // redraw the canvas after resizing
}