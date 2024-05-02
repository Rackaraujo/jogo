const alucard = document.querySelector('.alucard');
const caveira = document.querySelector('.caveira');
const background = document.querySelector('.background');
const gameOverText = document.querySelector('.game-over-text');
const scoreDisplay = document.querySelector('.score-display');
const body = document.querySelector('body');

let gameRunning = true;
let score = 0; 

const jump = (event) => {
    if (event && event.keyCode === 38 && gameRunning) { 
        alucard.classList.add('jump');

        setTimeout(() => {
            alucard.classList.remove('jump');
        }, 500);
    }
};

const checkCollision = () => {
    const alucardRect = alucard.getBoundingClientRect();
    const caveiraRect = caveira.getBoundingClientRect();

    const collision = (
        alucardRect.right > caveiraRect.left &&
        alucardRect.left < caveiraRect.right &&
        alucardRect.bottom > caveiraRect.top &&
        alucardRect.top < caveiraRect.bottom
    );

    return collision;
};

const updateScore = () => {
    score++;
    scoreDisplay.textContent = score; 
};

const hideGameElements = () => {
    alucard.style.display = 'none'; 
    caveira.style.display = 'none'; 
    background.style.display = 'none';
    body.style.backgroundColor = 'black'; 
};

const showGameOver = () => {
    gameOverText.style.display = 'block';
    hideGameElements(); 
};

const loop = setInterval(() => {
    if (!gameRunning) return; 

    if (checkCollision()) { 
        gameRunning = false;
        clearInterval(loop);
        showGameOver(); 
    } else {
        updateScore();
    }
}, 10);

document.addEventListener('keydown', jump);
