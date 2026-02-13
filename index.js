const etchGridContainer = document.getElementById('etch-grid');
const gridBtn = document.querySelector('.grid-btn');
const resetBtn = document.querySelector('.reset-btn')

function createGrid(squaresPerSide) {
    etchGridContainer.innerHTML = '';
    const totalSquares = squaresPerSide * squaresPerSide;
    const squareSize = (100 / squaresPerSide) + '%';

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.style.width = squareSize;
        square.style.height = squareSize;
        square.classList.add('etch-square');
        etchGridContainer.appendChild(square);
        
        square.addEventListener('mouseover', () => {
        if (square.style.backgroundColor !== "" && square.style.backgroundColor !== "white") {
            return;
        }
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        square.style.backgroundColor = randomColor;  
        });
    }
}

resetBtn.addEventListener('click', () => {
    const allSquares = document.querySelectorAll('.etch-square');
    allSquares.forEach(square => square.style.backgroundColor = 'white');
})

gridBtn.addEventListener('click', () => {
    const userNumber = prompt("Enter a number between 1 and 100");
    if (userNumber === null) return;
    
    const num = parseInt(userNumber);
    if (isNaN(num) || num < 1 || num > 100) {
        alert("Please enter a valid number");
    } else {
        etchGridContainer.innerHTML = '';
        createGrid(num);
    }
    
})

createGrid(16);




