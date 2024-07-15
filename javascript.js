// create a square div grid
console.log('linked');
gridContainer = document.querySelector('.container')
function createGrid (width) {
    for (let i = 0; i < width; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');
        for (let i = 0; i < width; i++) {
            const pixel = document.createElement('pixel');
            pixel.classList.add('pixel')
            rowContainer.appendChild(pixel);
        }
        gridContainer.appendChild(rowContainer);
    }
}