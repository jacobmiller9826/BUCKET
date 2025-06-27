// ---- Ritual Buy ----
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
        localStorage.setItem('bucketUnlocked_knight', 'yes');
        window.location.href = 'https://your-checkout-link-here.com';
      };
    }
  }, 1000);
}

// ---- Wallet Connect ----
async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const wallet = accounts[0];
      localStorage.setItem('bucketWallet', wallet);
      displayWallet(wallet);
    } catch (err) {
      console.error('User rejected request');
    }
  } else {
    alert('No Ethereum wallet detected. Please install MetaMask.');
  }
}

function displayWallet(wallet) {
  document.getElementById('walletAddress').textContent = `🪙 ${wallet.slice(0,6)}...${wallet.slice(-4)}`;
}

document.getElementById('connectWalletBtn').addEventListener('click', connectWallet);

window.addEventListener('DOMContentLoaded', () => {
  const savedWallet = localStorage.getItem('bucketWallet');
  if (savedWallet) {
    displayWallet(savedWallet);
  }
});
