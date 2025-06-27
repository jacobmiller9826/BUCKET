// Toggle decrypt encrypted sections by clicking
function toggleDecrypt(elem) {
  const decrypted = elem.nextElementSibling;
  if (decrypted.style.display === 'none') {
    decrypted.style.display = 'block';
    elem.classList.add('unlocked');
  } else {
    decrypted.style.display = 'none';
    elem.classList.remove('unlocked');
  }
}

// Fake NFT owners for demo
const bucketNFTOwners = [
  '0xAbCdEf1234567890abcdef1234567890aBCDef12',
  '0x1111222233334444555566667777888899990000'
];

// Simulated connected wallet address - in real, get from your wallet connect logic
const wallet = localStorage.getItem('bucketWallet');

// Check NFT ownership and unlock secret lore
function checkLoreNFT() {
  const statusEl = document.getElementById('blockchainStatus');
  const loreEl = document.getElementById('blockchainLore');

  if (!wallet) {
    statusEl.textContent = "❌ No wallet connected. Connect your wallet first.";
    return;
  }

  if (bucketNFTOwners.some(addr => addr.toLowerCase() === wallet.toLowerCase())) {
    statusEl.textContent = "✅ NFT ownership verified. Decrypting secret lore...";
    loreEl.style.display = 'block';
  } else {
    statusEl.textContent = "❌ You do not own the required Bucket NFT.";
    loreEl.style.display = 'none';
  }
}
