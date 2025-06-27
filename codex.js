// Define your prophecies
const prophecies = {
  acolyte: "🩸 The path begins in blood. The light is a lie.",
  knight: "⚔️ Balance is weakness. The darkness must rise.",
  lord: "👁️ From the ashes of betrayal, a true power will awaken.",
  master: "☠️ You are the harbinger of extinction. All shall kneel."
};

// Check unlocks
document.addEventListener('DOMContentLoaded', () => {
  for (let rank in prophecies) {
    if (localStorage.getItem(`bucketUnlocked_${rank}`) === 'yes') {
      document.getElementById(`${rank}-prophecy`).textContent = prophecies[rank];
    }
  }
});

// Reveal function
function showProphecy(rank) {
  if (localStorage.getItem(`bucketUnlocked_${rank}`) === 'yes') {
    document.getElementById(`${rank}-prophecy`).textContent = prophecies[rank];
  } else {
    document.getElementById(`${rank}-prophecy`).textContent = "🔒 Locked. Purchase to unlock.";
  }
}

// To simulate unlock from ritual or buy, you can call:
function unlockRank(rank) {
  localStorage.setItem(`bucketUnlocked_${rank}`, 'yes');
  alert(`${rank} unlocked!`);
}

// For testing in console:
// unlockRank('acolyte');
// unlockRank('knight');
// unlockRank('lord');
// unlockRank('master');
