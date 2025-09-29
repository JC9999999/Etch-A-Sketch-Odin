const container = document.querySelector("#container");

for(let row = 0 ; row < 16 ; row++){
    for(let column = 0 ; column < 16 ; column++ ){
        const squareGrid = document.createElement("div");
        squareGrid.classList.add("square-grid");
        container.appendChild(squareGrid);
    }
}
    
