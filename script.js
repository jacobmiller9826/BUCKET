// Buy button simulation
function buyNow(item) {
  const sound = new Audio("saber.mp3");
  sound.play();
  alert(`BUY NOW: ${item}\nRedirecting to secure payment...`);
}

// Custom cursor
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// Drop countdown timer
const countdown = document.getElementById("countdown");
const nextDrop = new Date();
nextDrop.setDate(nextDrop.getDate() + 3);
nextDrop.setHours(0, 0, 0, 0);

setInterval(() => {
  const now = new Date().getTime();
  const dist = nextDrop - now;
  const days = Math.floor(dist / (1000 * 60 * 60 * 24));
  const hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((dist % (1000 * 60)) / 1000);
  countdown.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
}, 1000);

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
