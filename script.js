    const ads = [
  { type: "image", src: "ads/ad1.jpg", time: 10, skip: true },
  { type: "video", src: "ads/ad2.mp4", time: 10, skip: true },
  { type: "image", src: "ads/ad3.jpg", time: 15, skip: false }
];

let current = 0;
let timerInterval;

const adBox = document.getElementById("adBox");
const timer = document.getElementById("timer");
const btn = document.getElementById("actionBtn");

function loadAd() {
  clearInterval(timerInterval);
  adBox.innerHTML = "";

  const ad = ads[current];
  let element;

  if (ad.type === "image") {
    element = document.createElement("img");
    element.src = ad.src;
  } else {
    element = document.createElement("video");
    element.src = ad.src;
    element.autoplay = true;
    element.muted = true;
  }

  adBox.appendChild(element);

  let timeLeft = ad.time;
  btn.disabled = true;
  btn.innerText = ad.skip ? "Skip" : "Finish";

  timerInterval = setInterval(() => {
    timer.innerText = `Wait ${timeLeft}s`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      btn.disabled = false;
    }
  }, 1000);
}

btn.onclick = () => {
  current++;
  if (current < ads.length) {
    loadAd();
  } else {
    window.location.href = "https://dribbble.com/shots/25878898-SafeFund-S-F-Lettermark-Crypto-Logo-Design";
  }
};

loadAd();
