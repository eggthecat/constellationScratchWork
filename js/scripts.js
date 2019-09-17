// HTML 5Ver.
// context = document.getElementById('canvasInAPerfectWorld').getContext("2d");

// potentially const
// HTML 5Ver.
// context = document.getElementById('canvasInAPerfectWorld').getContext("2d");

// potentially const
// canvasDiv = document.getElementById('canvas')
// var canvas = document.createElement('canvas');
// canvas.setAttribute('width', '1000');
// canvas.setAttribute('height', '500');
// canvas.setAttribute('id', 'canvas');
// canvas.style.backgroundColor = "#ddd";
// // what does this mean
// canvasDiv.appendChild(canvas);
// if(typeof G_vmlCanvasManger != 'undefined') {
//   canvas = G_vmlCanvasManager.initElement (canvas);
// }
// context = canvas.getContext("2d");
//
// // mouse events and functions
// $('#canvas').mousedown(function(e){
//   var mouseX = e.pageX - this.offsetLeft;
//   var mouseY = e.pageY - this.offsetTop;
//
//   paint = true;
//   addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
//   redraw();
// });
//
// $('#canvas').mousemove(function(e){
//   if(paint){
//     addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
//     redraw();
//   }
// });
//
// //   Mouse up/leave Event: marker is off the paper
//  $('#canvas').mouseup(function(e){
//   paint = false;
// });
//
// $('#canvas').mouseleave(function(e){
//   paint = false;
// });
//
// //ADDCLICK FUNCTION THAT WILL SAVE CLICK POSITION
// var clickX = new Array();
// var clickY = new Array();
// var clickDrag = new Array();
// var paint;
//
// function addClick(x, y, dragging){
//   clickX.push(x);
//   clickY.push(y);
//   clickDrag.push(dragging);
//   if(curTool == "eraser"){
//     clickColor.push("white");
//   }else{
//     clickColor.push(curColor);
//   }
//   clickColor.push(curColor);
//   clickSize.push(curSize);
// }
//
// // redraw: canvas will be cleared
//
// function redraw(){
//   context.clearRect(0, 0, context.canvas.width, context.canvas.height);
//   context.strokeStyle = "#df4b26";
//   context.lineJoin = "round";
//   context.lineWidth = 5;
//
//   context.save();
//   context.beginPath();
//   context.rect(drawingAreaX, drawingAreaY, drawingAreaWidth, drawingAreaHeight);
//   context.clip();
//
//   let radius;
//   // let i = 0;
//   for(var i=0; i < clickX.length; i++) {
//     context.beginPath();
//     if(clickDrag[i] && i){
//       context.moveTo(clickX[i-1], clickY[i-1]);
//     }
//     else{
//       context.moveTo(clickX[i]-1, clickY[i]);
//     }
//     context.lineTo(clickX[i], clickY[i]);
//     context.closePath();
//     // context.strokeStyle = clickColor[i];
//     // context.lineWidth = radius;
//     context.stroke();
//   }
//   //   else if(curTool == "crayon") {
//   //   context.globalAlpha = 0.4;
//   //   context.drawImage(crayonTextureImage, 0, 0, canvasWidth, canvasHeight);
//   // }
//   // context.globalAlpha = 1;
//
//
// // // UNSURE WHERE VARIABLES GO; FIRST SIX ARE GLOBAL
// // // PICK ADDITIONAL COLORS
// var colorPurple = "#cb3594";
// var colorGreen = "#659b41";
// var colorYellow = "#ffcf33";
// var colorBrown = "#986928";
//
// var curColor = colorPurple;
// var clickColor = new Array
// var clickSize = new Array();
// var curSize = "normal";
//
// }
$(function(){


const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const modesSwitcher = document.querySelector('#blendModes');
const clearButton = document.querySelector('#clear');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'orange';
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 170;
let lineWidth = 1;
ctx.globalCompositeOperation = 'normal';

function draw(e) {
  if (!isDrawing) {
    return;
  }

  ctx.strokeStyle = getColor();
  ctx.lineWidth = getlineWidth();

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function getColor() {
  return 'hsl(' + hue +', 100%, 50%)';
}

function getlineWidth() {
  return lineWidth;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false );
canvas.addEventListener('mouseout', () => isDrawing = false );

function changeMode() {
  ctx.globalCompositeOperation = this.value;
}

modesSwitcher.addEventListener('change', changeMode);

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

clearButton.addEventListener('click', clear);
})
