const waitTime = 25; // seconds
const timerText = document.getElementById("timer");
const btn = document.getElementById("finishBtn");

let timeLeft = waitTime;

const interval = setInterval(() => {
  timerText.innerText = `Wait ${timeLeft}s`;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(interval);
    timerText.innerText = "Ready to download";
    btn.disabled = false;
  }
}, 1000);

btn.onclick = () => {
  const a = document.createElement("a");
  a.href = "download/video.mp4";
  a.setAttribute("download", "video.mp4");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
