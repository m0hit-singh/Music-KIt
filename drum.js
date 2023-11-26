window.addEventListener("keypress", function (e) {
  const keypress = e.charCode;
  const element = document.querySelector(`.key${keypress}`);
  if (element) element.classList.add("playing");

  const audio = document.querySelector(`.audio-key${keypress}`);
  audio.play();

  this.setTimeout(() => {
    element.classList.remove("playing");
  }, 100);
});
