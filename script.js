window.onload=function(){

 const container = document.querySelector('.container');

 const resizeButton = document.querySelector('#resize');
 const rainbowButton = document.querySelector('#rainbow');
 const blackButton = document.querySelector('#black');
 const shadeButton = document.querySelector('#shade');
 const eraserButton = document.querySelector('#eraser');

 
// setColor will be called anytime a box on the grid is hovered over

var color = 'rainbow';

function setColor(box){
  if (color == 'black'){
    
    box.style.backgroundColor = "rgb(0,0,0)";

  }else if (color == 'rainbow'){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
          
    box.style.backgroundColor = "rgb(" + red + "," + green + "," + blue +")";
  }else if (color == 'eraser'){
   box.style.backgroundColor = "rgb(255,255,255)"; 

  }else if (color == 'shade'){
  // Shading feature depending on each boxes current color
   var currentColor = box.style.backgroundColor
   // Get rgb value as a string
   currentColor = currentColor.replace(/[^\d,]/g, '').split(',');
   var newColors = currentColor.map((color) => {
     color = parseInt(color)
     if ((color - 26) < 0){
       return color = 0
     }else{
       return color = color - 26
     }
   })
   box.style.backgroundColor = "rgb(" + newColors[0] + "," + newColors[1] + "," + newColors[2] +")";
  }
}

// Each button followed by event listener and callback function 
blackButton.addEventListener("click",setBlack);

function setBlack(){
  color = 'black'
}

rainbowButton.addEventListener("click",setRainbow); 

function setRainbow(){
  color = 'rainbow'
}


shadeButton.addEventListener("click",shade); 

function shade(){
  color = 'shade'
}

eraserButton.addEventListener('click',eraserWhite);

function eraserWhite(){
  color = 'eraser'
}

resizeButton.addEventListener('click',resizeGrid);

function resizeGrid(){
  
  var boxes = document.querySelectorAll('.box');
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].remove()
    }
   
    let squares = prompt("Please enter grid size");
    while (squares <= 0 || squares >= 101){
      squares = prompt("Please enter a number between 1 and 100");
   }
    runLoop = (squares * squares)
    
    for (var i = 0; i < runLoop; i++) {
        const content = document.createElement('div');
        content.classList.add('box');
        content.style.backgroundColor = "rgb(255,255,255)"; 
        content.addEventListener('mouseover', event => {
          setColor(content)
        })
        container.style.gridTemplateColumns = "repeat("+squares+",1fr)";
        container.appendChild(content)
      }
  }

// Initial grid creation when page first opens
createGrid()
function createGrid(){
  var boxes = document.querySelectorAll('.box');
  for (var i = 0; i < 25; i++) {
    (function (i) {
      var currBox = boxes[i]
      currBox.style.backgroundColor = "rgb(255,255,255)"; 
      currBox.addEventListener('mouseover', event => {
        setColor(currBox)
                      
        })
    }(i));
    
   }
  }
}




