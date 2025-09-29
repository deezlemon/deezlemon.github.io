const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');

let isGameStarted = false;

function drawGarfield() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.arc(400, 300, 50, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(380, 280, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(420, 280, 10, 0, Math.PI * 2, true);
    ctx.fill();
}

function gameLoop() {
    if (isGameStarted) {
        drawGarfield();
        requestAnimationFrame(gameLoop);
    }
}

startButton.addEventListener('click', () => {
    isGameStarted = true;
    gameLoop();
});
