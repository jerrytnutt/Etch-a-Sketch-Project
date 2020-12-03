window.onload=function(){

 const container = document.querySelector('.container');

 
 const resizeButton = document.querySelector('#resize');
 const rainbowButton = document.querySelector('#rainbow');
 const blackButton = document.querySelector('#black');
 const shadeButton = document.querySelector('#shade');
 const eraserButton = document.querySelector('#eraser');

 
// runColor will be called anytime a box on the grid is hovered or clicked

var color = 'rainbow';
function runColor(box){
  if (color == 'black'){
    
    box.style.backgroundColor = "rgb(0,0,0)";

  }else if (color == 'rainbow'){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
          
    box.style.backgroundColor = "rgb(" + red + "," + green + "," + blue +")";
  }else if (color == 'eraser'){

    box.style.backgroundColor = "rgb(255,255,255)"; 
  }
  

}

// Each button followed by event listener and function that is called

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
  alert('Shade feature will be added later')
   
    
  }


eraserButton.addEventListener('click',eraserWhite);
function eraserWhite(){
  color = 'eraser'
  
  }

var eventMode = 'mouseover'
//click
resizeButton.addEventListener('click',resize);
// Resize function called to set up grid
resize()
function resize(){
  
  let boxes = document.querySelectorAll('.box');
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].remove()
    }
   
    let squares = prompt("Please enter squares");
    while (squares <= 0 || squares >= 101){
      squares = prompt("Please enter squares");

    }
    runLoop = (squares * squares)
    
    for (var i = 0; i < runLoop; i++) {
        const content = document.createElement('div');
        content.classList.add('box');
        content.addEventListener(eventMode, event => {
          runColor(content)
                  
        })
        container.style.gridTemplateColumns = "repeat("+squares+",1fr)";
        container.appendChild(content)
      }
      

  }

}




