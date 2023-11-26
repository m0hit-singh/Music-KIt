window.addEventListener("DOMContentLoaded", function () {
  function playSound(e) {
    const keypress = e.charCode;
    const audio = document.querySelector(`.audio-key${keypress}`);
    const key = document.querySelector(`.key${keypress}`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }

  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }

  const keys = document.querySelectorAll(".keys");
  console.log("KKK", keys);
  keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

  window.addEventListener("keypress", playSound);
});
