//Variables--------------------------------------------------------------------------------------------
const container = document.getElementById('container');
const newButton = document.getElementById('new-canvas');
var gridSize = 16;


//Code------------------------------------------------------------------------------------------------

createGrid(gridSize);


//Functions--------------------------------------------------------------------------------------------

function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement('div');
    //Adding an event listener to hover over the squares
    div.addEventListener('mouseover', ()=> {
        div.style.background = 'black';
    });
    div.style.flex = '0 0 calc(100% / ' + gridSize + ')';
    div.style.height = 'calc(100% / ' + gridSize + ')'
    div.classList.add('grid');
    container.appendChild(div);
}
}