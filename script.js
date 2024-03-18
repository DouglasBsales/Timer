let hours = 0;
let minutes = parseInt(document.getElementById("contadorTempo").value);
let seconds = 60;
let interval;
const backdropModal = document.getElementById("modalBackdrop");

document.getElementById("counter").innerText = `${twoDigits(hours)}:${twoDigits(
  minutes
)}:00`;

function start() {
  interval = setInterval(counting, 1000);
  minutes = parseInt(document.getElementById("contadorTempo").value);
}

function pause() {
  clearInterval(interval);
}

function stop() {
  clearInterval(interval);

  hours = 0;
  minutes = parseInt(document.getElementById("contadorTempo").value);
  seconds = 0;

  document.getElementById("counter").innerText = `${twoDigits(
    hours
  )}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
}

function counting() {
  if (hours === 0 && minutes === 0 && seconds === 0) {
    stop();
  } else {
    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;

      if (minutes < 0) {
        minutes = 0;
        hours--;
      }
    }

    document.getElementById("counter").innerText = `${twoDigits(
      hours
    )}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
  }
}

function twoDigits(digit) {
  if (digit < 10) {
    return "0" + digit;
  } else {
    return digit;
  }
}

let divModal = document.getElementById("divModal");

function openModal() {
  divModal.style.visibility = "visible";
  backdropModal.style.display = "block";
}

function closeModal() {
  divModal.style.visibility = "hidden";
  backdropModal.style.display = "none"
  minutes = parseInt(document.getElementById("contadorTempo").value);
  document.getElementById("counter").innerText = `${twoDigits(
    hours
  )}:${twoDigits(minutes)}:00`;
}
