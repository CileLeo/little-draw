let colorPicker;
let weightInput, sizeInputX, sizeInputY;
let clearButton, saveButton;
let strWeight = 1;

function setup() {
  createCanvas(600, 300);
  background(0);  
  
  colorPicker = createColorPicker('#fff');
  
  clearButton = createButton('clear');
  clearButton.mousePressed(clearCanvas);
  
  saveButton = createButton('save');
  saveButton.mousePressed(saveArt);
  
  weightInput = createInput('1');
  weightInput.input(changeWeight);
  
  sizeInputX = createInput('600');
  sizeInputY = createInput('300');
  sizeInputX.input(resize);
  sizeInputY.input(resize);
}

function resize() {
  resizeCanvas(sizeInputX.value(), sizeInputY.value());
  background(0);  
}

function changeWeight() {
  strWeight = this.value();
}

function saveArt() {
  saveCanvas();
}

function clearCanvas() {
  clear()
  background(0); 
}

function draw() {
  stroke(colorPicker.color())
  strokeWeight(strWeight);
  if(mouseIsPressed) {
    line(mouseX,mouseY,pmouseX+=random(-1,1),pmouseY+=random(-1,1));
  }
}