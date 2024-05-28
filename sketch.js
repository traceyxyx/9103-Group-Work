class Rectangle {
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

let rectangles = [];
let colorSequence; // 颜色序列变量

// 需要更改大小的长方形的索引
let resizeIndexes = [8,13];

function setup() {
  let r = color(165,58,50);
  let y = color(235,207,20);
  let lb = color(56,85,151);
  let db = color(57,70,140);
  let g = color(216,214,199);

  let canvasSize = min(windowWidth, windowHeight); // 确定画布大小为窗口宽高中较小的值
  createCanvas(canvasSize, canvasSize);
  let rectangleWidth = width / 47; // 长方形的宽度
  let rectangleHeight = height / 47; // 长方形的高度
  // 以下：初始化颜色序列
  colorSequence = [r,y,r,g,y,r,y,g,db,g,y,db,g,y,r,y,g,y,y,g,r,y,y,db,g,y,r,y,g,y,g,y,y,r,g,db,y,y,r,y,r,y,g,y,y,y,r,y,y]; 
   // 设置长方形的固定 x 坐标，维持在一列上
   let fixedX = width - rectangleWidth;

   let currentY = 0; // 初始化当前 y 坐标
 
   for (let i = 0; i < colorSequence.length; i++) {
    // 根据索引调整高度
     let rectHeight = resizeIndexes.includes(i) ? (rectangleHeight * 1.5) : rectangleHeight; 
     let rectangle = new Rectangle(fixedX, currentY, rectangleWidth, rectHeight, colorSequence[i]);
     rectangles.push(rectangle);
     
     // 更新当前 y 坐标，为下一个长方形做准备
     currentY += rectHeight;
   }
 

}

function draw() {
  background(242,242,240);
  
  // 显示所有长方形
  for (let rectangle of rectangles) {
    rectangle.display();
  }
}


function windowResized() {
  let canvasSize = min(windowWidth, windowHeight); // 确定新的画布大小为窗口宽高中较小的值
  resizeCanvas(canvasSize, canvasSize);
  
  let rectangleWidth = width / 47; // 新的长方形宽度
  let rectangleHeight = height / 47; // 新的长方形高度
  
  // 重新计算长方形的位置和大小
  let fixedX = width - rectangleWidth;
  let currentY = 0;
  for (let i = 0; i < rectangles.length; i++) {
    let rectHeight = resizeIndexes.includes(i) ? (rectangleHeight * 1.5) : rectangleHeight;
    rectangles[i].x = fixedX;
    rectangles[i].y = currentY;
    rectangles[i].width = rectangleWidth;
    rectangles[i].height = rectHeight;
    currentY += rectHeight;
  }
}