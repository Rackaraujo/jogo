const alucard = document.querySelector('.alucard');
const caveira = document.querySelector('.caveira');
const gameOverText = document.querySelector('.game-over-text');

let gameRunning = true;

const jump = (event) => {
    if (event && event.keyCode === 38 && gameRunning) { 
        alucard.classList.add('jump');

        setTimeout(() => {
            alucard.classList.remove('jump');
        }, 500);
    }
};

const loop = setInterval(() => {
    if (!gameRunning) return; 

    const alucardRect = alucard.getBoundingClientRect();
    const caveiraRect = caveira.getBoundingClientRect();

    const collision = (
        alucardRect.right > caveiraRect.left
    );

    if (collision) {
        gameRunning = false;
        gameOverText.style.display = 'block';
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
