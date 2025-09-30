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

button.addEventListener("click" , function(){
    let gridSize = prompt("Pick a grid size");    
})

for(let row = 0 ; row < 16 ; row++){
    for(let column = 0 ; column < 16 ; column++ ){
        const squareGrid = document.createElement("div");
        squareGrid.classList.add("square-grid");
        container.appendChild(squareGrid);
        squareGrid.addEventListener("mouseenter", function(){
            squareGrid.style.backgroundColor = generateRandomColor();
        })

    }
}
    

    
