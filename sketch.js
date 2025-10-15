const container = document.querySelector("#container");
const button = document.createElement("button");
button.textContent = "Replace Grid";
button.style.position = "absolute";
button.style.top = "50px";
container.appendChild(button);


function generateRandomColor(){
    const randomHexColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return randomHexColor;
}

function resetGrid(input){
    document.querySelectorAll(".square-grid").forEach(square => square.remove());
    let newSize = 640/input;
    for(let row = 0; row < input; row++){
        for(let column = 0; column < input ; column++){
            const squareGrid = document.createElement("div");
            squareGrid.classList.add("square-grid");
            squareGrid.style.width = newSize + "px";
            squareGrid.style.height = newSize + "px";
            container.insertAdjacentElement("beforeend" , squareGrid);
            squareGrid.addEventListener("mouseenter", function(){
            squareGrid.style.backgroundColor = generateRandomColor();
            })
        }
        
    }
    
}
button.addEventListener("click" , function(){
    let gridSize = prompt("Pick a grid size");
    changeSize(gridSize);
})
function changeSize(input){
    if(input >= 2 && input <= 100){
        resetGrid(input);
    }
    else{
        alert("Too many squares");
    }
}

resetGrid(16);

    
