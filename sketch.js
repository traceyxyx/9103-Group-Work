class BigRectangle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  display() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }
}

let bigRectangles = [];


// Set color
let yellow = '#EBCF14';
let red = '#A53A32';
let blue = '#39468C';
let grey = '#D8D6C7';

function setup() {
  let canvasSize = min(windowWidth, windowHeight); // 确定画布大小为窗口宽高中较小的值
  createCanvas(canvasSize, canvasSize);

  // Set big rectangle
  let bigRectangle1 = new BigRectangle(canvasSize * 0.868, canvasSize * 0.21, canvasSize * 0.066, canvasSize * 0.066, color(165, 58, 50));
  let bigRectangle2 = new BigRectangle(canvasSize * 0.648, canvasSize * 0.198, canvasSize * 0.088, canvasSize * 0.165, color(56, 85, 151));
  let bigRectangle3 = new BigRectangle(canvasSize * 0.087, canvasSize * 0.66, canvasSize * 0.066, canvasSize * 0.066, [blue]);
  let bigRectangle4 = new BigRectangle(canvasSize * 0.154, canvasSize * 0.770, canvasSize * 0.088, canvasSize * 0.088, [yellow]);
  let bigRectangle5 = new BigRectangle(canvasSize * 0.355, canvasSize * 0.946, canvasSize * 0.088, canvasSize * 0.066, [red]);
  let bigRectangle6 = new BigRectangle(canvasSize * 0.185, canvasSize * 0.793, canvasSize * 0.022, canvasSize * 0.022, [grey]);
  let bigRectangle7 = new BigRectangle(canvasSize * 0.846, canvasSize * 0.666, canvasSize * 0.066, canvasSize * 0.066, [blue]);
  let bigRectangle8 = new BigRectangle(canvasSize * 0.846, canvasSize * 0.732, canvasSize * 0.066, canvasSize * 0.033, [yellow]);
  let bigRectangle9 = new BigRectangle(canvasSize * 0.846, canvasSize * 0.765, canvasSize * 0.066, canvasSize * 0.035, [red]);



  // add to the array
  bigRectangles.push(bigRectangle1);
  bigRectangles.push(bigRectangle2);
  bigRectangles.push(bigRectangle3);
  bigRectangles.push(bigRectangle4);
  bigRectangles.push(bigRectangle5);
  bigRectangles.push(bigRectangle6);
  bigRectangles.push(bigRectangle7);
  bigRectangles.push(bigRectangle8);
  bigRectangles.push(bigRectangle9);
}
function draw() {
  let canvasSize = min(windowWidth, windowHeight);
  resizeCanvas(canvasSize, canvasSize);

  background(255);

  let rectWidth = canvasSize * 0.022; // Size ratio of small squares to canvas
  let rectHeight = canvasSize * 0.02;

  //Translate point to bottom part
  translate(0, canvasSize * 0.56);

  noStroke();

  //The bottom half of the row
  drawRow(0, 0, rectWidth, rectHeight,
    [yellow, yellow, grey, blue, yellow, yellow, blue, yellow, yellow, yellow, blue, yellow, grey, yellow, red, yellow, yellow, red,
      grey, grey, red, yellow, yellow, grey, yellow, grey, yellow, yellow, yellow, red, yellow, blue, grey, grey, blue, yellow, yellow, red,
      yellow, yellow, yellow, blue, grey, red, yellow, yellow]);

  drawRow(0, canvasSize * 0.06, rectWidth, rectHeight,
    [yellow, yellow, grey, red, yellow, yellow, blue, yellow, yellow, grey, yellow, red, yellow, yellow, grey, yellow, yellow, blue, yellow,
      yellow, red, yellow, yellow, blue, yellow, yellow, grey, yellow, grey, yellow, yellow, grey, yellow, blue, yellow, blue, yellow,
      yellow, blue, yellow, yellow, red, grey, yellow, red, red]);

  drawRow(canvasSize * 0.068, canvasSize * 0.165, rectWidth, rectHeight,
    [red, yellow, red, yellow, yellow, grey, yellow, blue, yellow, yellow, grey, yellow, yellow, blue, yellow, red, yellow, blue, yellow,
      grey, red]);

  drawRow(0, canvasSize * 0.125, rectWidth, rectHeight,
    [yellow, blue, yellow]);

  drawRow(0, canvasSize * 0.216, rectWidth, rectHeight,
    [yellow, blue, yellow]);

  drawRow(0, canvasSize * 0.295, rectWidth, rectHeight,
    [yellow, grey, yellow, blue, yellow, blue, yellow, yellow, red, grey, blue, yellow, yellow, yellow, grey, yellow, yellow, blue, yellow,
      red, yellow, blue, yellow, red, yellow, blue, yellow, red, yellow, blue, yellow, red, yellow, blue, yellow, yellow, grey, yellow,
      yellow, red, yellow, yellow, yellow, yellow, yellow, yellow, red, yellow]);

  drawRow(0, canvasSize * 0.386, rectWidth, rectHeight,
    [yellow, yellow, grey, red, yellow, yellow, blue, yellow, yellow, yellow, red, yellow, blue, yellow, yellow, yellow, grey, yellow, grey, yellow,
      blue, yellow, blue, yellow, yellow, grey, yellow, grey, yellow, red, yellow, blue, yellow, blue, yellow, yellow, grey, yellow, yellow,
      yellow, blue, yellow, yellow, red, yellow, yellow, red, yellow]);

  drawRow(0, canvasSize * 0.325, rectWidth, rectHeight,
    [yellow, red, yellow]);

  drawRow(canvasSize * 0.838, canvasSize * 0.24, rectWidth, rectHeight,
    [blue, yellow, yellow, grey, yellow, red]);

  // Upper half of the rows

  // the first row
  drawRow(0, canvasSize * -0.537, rectWidth, rectHeight, 
    [yellow, blue, yellow, yellow, yellow, yellow, yellow, yellow, blue, yellow, grey, yellow, yellow, yellow, yellow, grey, yellow, yellow, yellow, 
      yellow, yellow, grey, yellow, grey, grey, yellow, yellow, yellow, yellow, yellow, grey,
      grey, yellow, yellow, yellow, yellow, grey, yellow, yellow, grey, yellow, yellow, grey, yellow, grey]);

// the second row 
  drawRow(0, canvasSize * -0.384, rectWidth, rectHeight, 
    [yellow, red, yellow, yellow, yellow, yellow, blue, yellow, grey, grey, red, yellow, grey, yellow, blue, yellow, grey, yellow, yellow, 
     yellow, grey, grey, yellow, yellow, yellow, grey, yellow, yellow, yellow, yellow, yellow, grey, grey, yellow, yellow, 
     yellow, yellow, grey, grey, grey, red, red, grey, yellow, yellow]);

// the third row   
  drawRow(0, canvasSize * -0.185, rectWidth, rectHeight, 
   [yellow, red, yellow, blue, yellow, yellow, grey, red, yellow, yellow, grey, blue, grey, yellow, blue, yellow, red, yellow,
     yellow, yellow, blue, yellow, yellow, yellow, blue, yellow, yellow, yellow, yellow, red, yellow, yellow, yellow, red, yellow, yellow, yellow, 
     yellow, yellow, yellow,  yellow, yellow, blue, grey, yellow]);

// the fourth row        
  drawRow(0, canvasSize * -0.119, rectWidth, rectHeight, 
   [yellow, red, grey, blue, yellow, yellow, red, grey, yellow, yellow, grey, blue, yellow, red, grey, yellow, red, 
     grey, grey, grey, blue, yellow, yellow, yellow, grey, yellow, yellow, yellow, red, grey, yellow, grey, yellow, yellow, blue, yellow, 
     yellow, yellow, yellow, yellow, grey, yellow, yellow, yellow, grey]);


  //column
  translate(0, (-canvasSize * 0.56));

  let rectNewHeight = canvasSize * 0.022;
  //first column from the left
  drawColumn(canvasSize * 0.022, 0, rectWidth, rectNewHeight,
    [yellow, blue, grey, yellow, yellow, blue, yellow, yellow, red, yellow, yellow, blue, yellow, red, yellow, yellow, grey, red]);
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
  drawColumn(canvasSize * 0.912, canvasSize * 0.176, rectWidth, rectNewHeight,
    [yellow, grey, red, red, red, grey, yellow, grey, yellow, grey, yellow, yellow, red]);
  drawColumn(canvasSize * 0.912, canvasSize * 0.64, rectWidth, rectNewHeight,
    [red, grey, yellow, yellow, grey, grey, blue, yellow, yellow, grey]);
  //third column
  drawColumn(canvasSize * 0.868, 0, rectWidth, rectNewHeight,
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



  //displaying all the big rects
  for (let rectangle of bigRectangles) {
    rectangle.display();
  }
}

function drawRow(x, y, w, h, colors) {
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(x + i * w, y, w, h);
  }
}


function drawColumn(x, y, w, h, colors) {
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(x, y + i * w, w, h);
  }
}

// Adjust canvas size when window is resized
function windowResized() {
  let canvasSize = min(windowWidth, windowHeight);
  resizeCanvas(canvasSize, canvasSize);
  draw(); // rraw the canvas after resizing
}
