// create a square div grid
gridContainer = document.querySelector('.gridContainer')
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
        target.style.backgroundColor = 'red';
    }
}); 

createGrid(64);


