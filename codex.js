// Define your prophecies
const prophecies = {
  acolyte: "🩸 The path begins in blood. The light is a lie.",
  knight: "⚔️ Balance is weakness. The darkness must rise.",
  lord: "👁️ From the ashes of betrayal, a true power will awaken.",
  master: "☠️ You are the harbinger of extinction. All shall kneel."
};

// Load existing unlocks
document.addEventListener('DOMContentLoaded', () => {
  for (let rank in prophecies) {
    if (localStorage.getItem(`bucketUnlocked_${rank}`) === 'yes') {
      document.getElementById(`${rank}-prophecy`).textContent = prophecies[rank];
    }
  }
});

// Show prophecy or locked message
function showProphecy(rank) {
  if (localStorage.getItem(`bucketUnlocked_${rank}`) === 'yes') {
    document.getElementById(`${rank}-prophecy`).textContent = prophecies[rank];
  } else {
    document.getElementById(`${rank}-prophecy`).textContent = "🔒 Locked. Purchase or own the Bucket NFT to unlock.";
  }
}

// Fake blockchain "owner list" for demo
const bucketNFTOwners = [
  '0xAbCdEf1234567890abcdef1234567890aBCDef12',
  '0x1111222233334444555566667777888899990000'
];

// Check for wallet + NFT ownership
function checkForNFT() {
  const wallet = localStorage.getItem('bucketWallet');
  if (!wallet) {
    document.getElementById('nftResult').textContent = "❌ No wallet connected.";
    return;
  }

  // Fake check against local list
  const found = bucketNFTOwners.some(addr => addr.toLowerCase() === wallet.toLowerCase());
  if (found) {
    unlockAllRanks();
    document.getElementById('nftResult').textContent = "✅ NFT verified! All ranks unlocked.";
  } else {
    document.getElementById('nftResult').textContent = "❌ No Bucket NFT found for this address.";
  }
}

function unlockAllRanks() {
  for (let rank in prophecies) {
    localStorage.setItem(`bucketUnlocked_${rank}`, 'yes');
    document.getElementById(`${rank}-prophecy`).textContent = prophecies[rank];
  }
}
