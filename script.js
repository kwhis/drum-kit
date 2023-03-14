document.body.className = "fade";

document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(function () {
    document.body.className = "";
  }, 230);
});

document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(function () {
    document.body.classList.remove("fade");
  }, 230);
});

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop function from running if incorrect key is pressed
  audio.currentTime = 0; //rewinds audio to the start
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if it is not a transform, transform is longest transition
  this.classList.remove("playing"); //this is equal to the key
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
