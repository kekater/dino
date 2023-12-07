// const dino = document.getElementById("dino");
// const cactus = document.getElementById("cactus");
// const startButton = document.getElementById("startButton");


// document.addEventListener("keydown", function(event) {
//           jump();
//     });

// function jump () {
//     if (dino.classList != "jump") {
//         dino.classList.add("jump");
//     }
//     setTimeout( function() {
//         dino.classList.remove("jump")
//     }, 300)
// }

// let isAlive = setInterval (function () {
//     let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
//     let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
//     if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
//         alert("GAME OVER");
//     }
// }, 30)

// const dino = document.getElementById("dino");
// const cactus = document.getElementById("cactus");
// const startButton = document.getElementById("startButton");

// let gameInterval; // Переменная для хранения интервала игры

// startButton.addEventListener("click", startGame);

// function startGame() {
//     startButton.style.display = "none"; // Скрыть кнопку после клика
//     gameInterval = setInterval(moveCactus, 30);
//     document.addEventListener("keydown", jump);
// }

// function jump(event) {
//     if (event.code === "Space" && dino.classList != "jump") {
//         dino.classList.add("jump");
//         setTimeout(() => {
//             dino.classList.remove("jump");
//         }, 300);
//     }
// }

// function moveCactus() {
//     let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
//     let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

//     if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
//         gameOver();
//     }
// }

// function gameOver() {
//     clearInterval(gameInterval);
//     alert("GAME OVER");
//     startButton.style.display = "block"; // Показать кнопку снова после завершения игры
// }


const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const startButton = document.getElementById("startButton");

let gameInterval; // Переменная для хранения интервала игры
let isGameRunning = false; // Флаг для отслеживания состояния игры

cactus.style.display = "none";
startButton.addEventListener("click", startGame);

function startGame() {
    startButton.style.display = "none"; // Скрыть кнопку после клика
    cactus.style.display = "block";

    isGameRunning = true; // Установить флаг в true при начале игры
    gameInterval = setInterval(moveCactus, 30);
    document.addEventListener("keydown", jump);
}

function jump(event) {
    if (isGameRunning && event.code === "Space" && dino.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(() => {
            dino.classList.remove("jump");
        }, 300);
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
    alert("GAME OVER");
    isGameRunning = false; // Установить флаг в false после завершения игры

    startButton.style.display = "block"; // Показать кнопку снова после завершения игры
    cactus.style.display = "none";

}