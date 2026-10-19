//Variables--------------------------------------------------------------------------------------------
const container = document.getElementById('container');


//Code------------------------------------------------------------------------------------------------

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement('div');
    //Adding an event listener to hover over the squares
    div.addEventListener('mouseover', ()=> {
        div.style.background = 'black';
    });
    div.style.flex = '0 0 calc(100% / 16)';
    div.style.height = 'calc(100% / 16)'
    div.classList.add('grid');
    container.appendChild(div);
}


//Functions--------------------------------------------------------------------------------------------

