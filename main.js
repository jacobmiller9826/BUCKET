function startRitual(button) {
  document.getElementById('ritualModal').style.display = 'block';
  document.getElementById('chantResult').textContent = '';
  document.getElementById('chantInput').value = '';
  document.getElementById('timerText').textContent = '';
  document.getElementById('finalBuy').style.display = 'none';
}

function checkChant() {
  const input = document.getElementById('chantInput').value.trim().toLowerCase();
  if (input === "consume the light") {
    document.getElementById('chantResult').textContent = "✅ The Force accepts your words.";
    startCountdown();
  } else {
    document.getElementById('chantResult').textContent = "❌ The Force rejects you. Try again.";
  }
}

function startCountdown() {
  let timeLeft = 5;
  const timerText = document.getElementById('timerText');
  timerText.textContent = `Ritual in progress... ${timeLeft}s`;

  const interval = setInterval(() => {
    timeLeft--;
    timerText.textContent = `Ritual in progress... ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(interval);
      timerText.textContent = "✅ Ritual complete. Proceed to checkout.";
      document.getElementById('finalBuy').style.display = 'inline-block';
      document.getElementById('finalBuy').onclick = () => {
        window.location.href = 'https://your-checkout-link-here.com';
      };
    }
  }, 1000);
}
