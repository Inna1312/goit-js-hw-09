
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', changeBg);
btnStop.addEventListener('click', stopChange);
let idBg;

function changeBg() {
    idBg = setInterval(() => {
        body.style.background = getRandomHexColor();
    }, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
};

function stopChange() {
    clearInterval(idBg);
    btnStop.disabled = true;
    btnStart.disabled = false;
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}