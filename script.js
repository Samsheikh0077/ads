const ads = [
  { src: "ads/ad1.mp4", time: 20, skip: true },
  { src: "ads/ad2.mp4", time: 20, skip: true },
  { src: "ads/ad3.mp4", time: 20, skip: false }
];

let current = 0;
let interval;

const adBox = document.getElementById("adBox");
const timer = document.getElementById("timer");
const btn = document.getElementById("actionBtn");

function loadAd() {
  clearInterval(interval);
  adBox.innerHTML = "";

  const ad = ads[current];

  const video = document.createElement("video");
  video.src = ad.src;
  video.autoplay = true;
  video.muted = true;      // autoplay ke liye zaroori
  video.playsInline = true;
  video.controls = false;

  adBox.appendChild(video);

  let timeLeft = ad.time;
  btn.disabled = true;
  btn.innerText = ad.skip ? "Skip" : "Finish";

  interval = setInterval(() => {
    timer.innerText = `Wait ${timeLeft}s`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(interval);
      btn.disabled = false;
    }
  }, 1000);
}

btn.onclick = () => {
  current++;
  if (current < ads.length) {
    loadAd();
  } else {
    window.location.href = "https://your-final-link.com";
  }
};

loadAd();
