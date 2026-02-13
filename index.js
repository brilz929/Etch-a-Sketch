const etchGridContainer = document.getElementById('etch-grid');
const gridBtn = document.querySelector('.grid-btn');
const resetBtn = document.querySelector('.reset-btn')

function createGrid(squaresPerSide) {
    // etchGridContainer.innerText = '';
    const totalSquares = squaresPerSide * squaresPerSide;
    const squareSize = (100 / squaresPerSide) + '%';

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.style.width = squareSize;
        square.style.height = squareSize;
        square.classList.add('etch-square');
        etchGridContainer.appendChild(square);
        
        square.addEventListener('mouseover', () => {
        
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        square.style.backgroundColor = randomColor;  
        });
    }
}

resetBtn.addEventListener('click', () => {
    etchGridContainer.innerText = '';
    createGrid(16);
})

gridBtn.addEventListener('click', () => {
    etchGridContainer.innerText = '';
    
    const userNumber = prompt("Enter a number between 1 and 100");
    createGrid(userNumber);
    if (isNaN(userNumber) || userNumber === null || userNumber.trim() === '') {
        alert("Please enter a valid number");
        return;
    }
    if (userNumber < 1 || userNumber > 100) {
        alert("Please enter number in range")
    }
})



createGrid(16);




