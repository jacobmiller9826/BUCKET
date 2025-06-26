// Example countdown to next drop (change date as needed)
const countdownEl = document.getElementById("countdown");
const dropDate = new Date("2025-07-01T00:00:00Z");

function updateCountdown() {
  const now = new Date();
  const diff = dropDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "Drop is live!";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}d ${hrs}h ${mins}m ${secs}s`;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
