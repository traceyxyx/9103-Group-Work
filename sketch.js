function setup() {
  createCanvas(windowWidth, windowHeight);
  // Draw only once
  noLoop();
}

function draw() {
  let canvasSize = min(windowWidth, windowHeight);
  resizeCanvas(canvasSize, canvasSize);

  background(255);

  let rectWidth = canvasSize * 0.022; // Size ratio of small squares to canvas
  let rectHeight = canvasSize * 0.02;

  // Set color
  let yellow = '#EBCF14';
  let red = '#A53A32';
  let blue = '#39468C';
  let grey = '#D8D6C7';

  //Translate the origin point to the bottom
  translate(0, canvasSize * 0.56);

  noStroke();

  drawRow(0, 0, rectWidth, rectHeight,
    [yellow, yellow, grey, blue, yellow, yellow, blue, yellow, yellow, yellow, blue, yellow, grey, yellow, red, yellow, yellow, red,
      grey, grey, red, yellow, yellow, grey, yellow, grey, yellow, yellow, yellow, red, yellow, blue, grey, grey, blue, yellow, yellow, red,
      yellow, yellow, yellow, blue, grey, red, yellow, yellow]);

  drawRow(0, canvasSize * 0.06, rectWidth, rectHeight,
    [yellow,yellow, grey, red, yellow, yellow, blue, yellow, yellow, grey, yellow, red, yellow, yellow, grey,yellow, yellow, blue, yellow,
      yellow, red, yellow, yellow, blue, yellow, yellow, grey, yellow, grey, yellow, yellow,grey, yellow, blue, yellow, blue, yellow,
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
      red, yellow, blue, yellow, red, yellow, blue, yellow, red,yellow, blue, yellow, red, yellow, blue, yellow, yellow, grey, yellow,
      yellow, red, yellow, yellow,blue, yellow, yellow, red, yellow]);

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
}

function drawRow(x, y, w, h, colors) {
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(x + i * w, y, w, h);
  }
}

// Adjust canvas size when window is resized
function windowResized() {
  let canvasSize = min(windowWidth, windowHeight);
  resizeCanvas(canvasSize, canvasSize);
  redraw(); // Redraw the canvas after resizing
}
