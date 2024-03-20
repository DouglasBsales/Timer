let hours = 0;
let minutes = parseInt(document.getElementById("contadorTempo").value);
let seconds = 0;
let interval;
const backdropModal = document.getElementById("modalBackdrop");
const numbersCount = document.getElementById("counter")
const buttonStart = document.getElementById('start')
const divInputMinutes = document.getElementById('contadorTempo')
const iconCloseModal = document.getElementById('closeModal')

numbersCount.innerText = `${twoDigits(hours)}:${twoDigits(minutes)}:00`;

function start() {
  interval = setInterval(counting, 1000);
  buttonStart.setAttribute('disabled', '')
}

function pause() {
  clearInterval(interval);
  buttonStart.removeAttribute('disabled', '')
}

function stop() {
  clearInterval(interval);

  if( hours > 0){
    hours += Math.floor (minutes / 60);
    minutes = minutes % 60
    seconds = 60;
  } else{
    minutes =  parseInt(document.getElementById("contadorTempo").value);
    seconds = 0;
  }

  numbersCount.innerText = `${twoDigits(hours)}:${twoDigits(minutes)}:00`;
  buttonStart.removeAttribute('disabled', '')
}

function counting() {
  if (hours === 0 && minutes === 0 && seconds === 0) {
      stop();
  } else {
    seconds--;
  

    if(seconds < 0) {
        seconds = 59;
        minutes--;
    }
    
    if(minutes >= 60) {
        hours += Math.floor(minutes / 60);
        minutes = minutes % 60; 
    };
    
    if(minutes < 0) {
        minutes = 59;
        hours--;
      };

    numbersCount.innerText = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
  }
}

function twoDigits(digit) {
  if(digit < 10) {
    return "0" + digit;
  } else {
    return digit;
  }
};


let divModal = document.getElementById("divModal");

function openModal() {
  divModal.style.visibility = "visible";
  backdropModal.style.display = "block";

  verificarCampo()
}

function closeModal() {
  divModal.style.visibility = "hidden";
  backdropModal.style.display = "none";

  clearInterval(interval);

  hours = 0;
  minutes = parseInt(document.getElementById("contadorTempo").value);
  seconds = 0;

  numbersCount.innerText = `${twoDigits(hours)}:${twoDigits(minutes)}:00`;
};


function verificarCampo(){

  let minutes = parseInt(document.getElementById("contadorTempo").value);

  if (isNaN(minutes) || minutes === 0 || minutes === null || minutes === undefined) {
    iconCloseModal.disabled = true;
  } else {
    iconCloseModal.disabled = false;
  }

  console.log(minutes)
}

divInputMinutes.addEventListener('keyup', verificarCampo)


