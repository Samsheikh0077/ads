const waitTime = 15; // seconds (change if needed)
const timerText = document.getElementById("timer");
const btn = document.getElementById("finishBtn");

let timeLeft = waitTime;

const interval = setInterval(() => {
  timerText.innerText = `Wait ${timeLeft}s`;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(interval);
    timerText.innerText = "You can download now";
    btn.disabled = false;
  }
}, 1000);

btn.onclick = () => {
  const link = document.createElement("a");
  link.href = "download/file.zip";   // 👈 download file path
  link.download = "";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
