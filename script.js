const ball = document.querySelector('.ball');
const leftPaddle = document.getElementById('leftPaddle');
const rightPaddle = document.getElementById('rightPaddle');

let ballX = 300;
let ballY = 200;
let ballSpeedX = 5;
let ballSpeedY = 5;

function updateGame() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Ball collisions with top and bottom walls
    if (ballY < 0 || ballY > 380) {
        ballSpeedY *= -1;
    }

    // Ball collisions with paddles
    if (
        (ballX < 20 && ballY > parseInt(leftPaddle.style.top, 10) && ballY < parseInt(leftPaddle.style.top, 10) + 80) ||
        (ballX > 570 && ballY > parseInt(rightPaddle.style.top, 10) && ballY < parseInt(rightPaddle.style.top, 10) + 80)
    ) {
        ballSpeedX *= -1;
    }

    // Ball out of bounds
    if (ballX < 0 || ballX > 600) {
        resetBall();
    }

    // Update ball position
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';

    requestAnimationFrame(updateGame);
}

function resetBall() {
    ballX = 300;
    ballY = 200;
}

document.addEventListener('keydown', (e) => {
    const key = e.key;

    // Move left paddle up
    if (key === 'w' && parseInt(leftPaddle.style.top, 10) > 0) {
        leftPaddle.style.top = parseInt(leftPaddle.style.top, 10) - 10 + 'px';
    }

    // Move left paddle down
    if (key === 's' && parseInt(leftPaddle.style.top, 10) < 320) {
        leftPaddle.style.top = parseInt(leftPaddle.style.top, 10) + 10 + 'px';
    }

    // Move right paddle up
    if (key === 'ArrowUp' && parseInt(rightPaddle.style.top, 10) > 0) {
        rightPaddle.style.top = parseInt(rightPaddle.style.top, 10) - 10 + 'px';
    }

    // Move right paddle down
    if (key === 'ArrowDown' && parseInt(rightPaddle.style.top, 10) < 320) {
        rightPaddle.style.top = parseInt(rightPaddle.style.top, 10) + 10 + 'px';
    }
});

// Initial game setup
requestAnimationFrame(updateGame);
