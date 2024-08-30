document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("myVideo");
  const button = document.getElementById("toggleButton");

  button.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      button.textContent = "Stop Video";
    } else {
      video.pause();
      button.textContent = "Play Video";
    }
  });
});
