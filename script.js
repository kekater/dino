// const dino = document.getElementById("dino");
// const cactus = document.getElementById("cactus");
// const startButton = document.getElementById("startButton");

// let gameInterval; 
// let isGameRunning = false; 

// cactus.style.display = "none";
// startButton.addEventListener("click", startGame);

// function startGame() {
//     startButton.style.display = "none"; 
//     cactus.style.display = "block";

//     isGameRunning = true; 
//     gameInterval = setInterval(moveCactus, 30);
//     document.addEventListener("keydown", jump);
// }

// function jump(event) {
//     if (isGameRunning && event.code === "Space" && dino.classList != "jump") {
//         dino.classList.add("jump");
//         setTimeout(() => {
//             dino.classList.remove("jump");
//         }, 300);
//     }
// }

// function moveCactus() {
//     if (isGameRunning) { 
//         let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
//         let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

//         if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
//             gameOver();
//         }
//     } 
// }

// function gameOver() {
//     clearInterval(gameInterval);
//     alert("GAME OVER");
//     isGameRunning = false; 
//     startButton.style.display = "block"; 
//     cactus.style.display = "none";

// }

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const startButton = document.getElementById("startButton");
const finishButton = document.getElementById("finishButton");


let gameInterval; // Переменная для хранения интервала игры
let isGameRunning = false; // Флаг для отслеживания состояния игры

finishButton.style.display = "none";
cactus.style.display = "none";

startButton.addEventListener("click", startGame);
document.addEventListener("keydown", jump); // Слушатель для события "keydown"

function startGame() {
    startButton.style.display = "none"; // Скрыть кнопку после клика
    cactus.style.display = "block";

    isGameRunning = true; // Установить флаг в true при начале игры
    gameInterval = setInterval(moveCactus, 40);

    // Добавляем слушатель для сенсорного ввода
    document.addEventListener("touchstart", jump);
}

function jump(event) {
    if ((event.type === "keydown" && event.code === "Space") || (event.type === "touchstart" && isGameRunning && dino.classList != "jump")) {
        dino.classList.add("jump");
        setTimeout(() => {
            dino.classList.remove("jump");
        }, 400);
    }
}

function moveCactus() {
    if (isGameRunning) { // Проверить, идет ли игра
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
            gameOver();
        }
    }
}

function gameOver() {
    clearInterval(gameInterval);
    finishButton.style.display = "block";
    finishButton.addEventListener("click", function() {
        finishButton.style.display = "none";
    });
    // alert("GAME OVER");
    isGameRunning = false; // Установить флаг в false после завершения игры

    startButton.style.display = "block"; // Показать кнопку снова после завершения игры
    cactus.style.display = "none";
}
