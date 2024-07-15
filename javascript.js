// create a square div grid
gridContainer = document.querySelector('.gridContainer')

body = document.querySelector('body');

function createGrid (width) {
    for (let i = 0; i < width; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('rowContainer');
        for (let i = 0; i < width; i++) {
            const pixel = document.createElement('pixel');
            pixel.classList.add('pixel')
            rowContainer.appendChild(pixel);
        }
        gridContainer.appendChild(rowContainer);
    }
}


let rowContainer = document.querySelectorAll('.rowContainer');
let pixel = document.querySelectorAll('.pixel');

//create a even listener fired when the mouse enters the pixel
gridContainer.addEventListener('mouseover', (event) => {
    console.log('log');
    let target = event.target;

    if (target.classList.contains('rowContainer')) {
        event.stopPropagation()
    } else if (target.classList.contains('pixel')) {
        const newUpdate = Number(target.style.opacity) + 0.1;
        target.style.opacity = newUpdate;
    }
}); 

createGrid(64);

//logic for cleaning button

const cleaningButton = document.querySelector('#new-button');

cleaningButton.addEventListener('click', () => {
    do {
        let width = Number(prompt("please select the width of the square canvas lower than 250"));

        if (width <= 250) {
            console.log('run');
            while (gridContainer.lastChild) {
                gridContainer.removeChild(gridContainer.lastChild);
            }
            createGrid(width);
            break;
        } else  {
            alert('please enter a valid number under 250');
        }
    } while(true);

})


