const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const sun = document.querySelector('.sun');
const clouds = document.querySelector('.cloud');
const score = document.querySelector('.score');
const end = document.querySelector('.game-over');
const gameBoard = document.querySelector('.game-board');
var count = 0;



const theme = new Audio('../music/theme-song.mp3');
const gameOver = new Audio('../music/game-over.mp3');

theme.play();
theme.loop = true;


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const time = setInterval(() => {
    count++;

    document.getElementById('count').innerHTML = count;
}, 1);

const loop = setInterval(() => {

    const pipePostion = pipe.offsetLeft;
    const marioPostion = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPostion);

    // Game over
    if (pipePostion <= 85 && pipePostion > 0 && marioPostion < 89) {

        // Configura posição e animação do pipe
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePostion}px`;

        // Configura posição, animação, src e tamanho do mario
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPostion}px`;
        mario.style.width = `70px`;
        mario.style.marginLeft = `25px`;
        mario.src = '../img/game-over.png';
        mario.style.animation = 'dead-animation 5000ms ease-out';
        mario.style.bottom = `-500px`;

        // Música
        theme.pause();
        gameOver.play();

        setInterval(() => {
            pipe.style.display = 'none';
            mario.style.display = 'none';
            sun.style.display = 'none';
            clouds.style.display = 'none';
            score.style.display = 'none';
            gameBoard.style.background = 'black';
            gameBoard.style.borderColor = 'black';
        }, 3000)

        const loop2 = setInterval(() => {
            end.style.display = 'block';
            document.getElementById('countEnd').innerHTML = count;
        }, 4000)



        clearInterval(loop);
        clearInterval(time);
    }

}, 10)


function reloadPage() {
    document.location.reload(true);
}

document.addEventListener('keydown', jump);