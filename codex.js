const canvas = document.getElementById("sithCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const entries = {
  bucketToken_art1: "✴️ 'In the sand lies memory. In memory, war.'",
  bucketToken_cloth1: "🩸 'The hood hides the face. The face hides the fire.'"
};

const messages = [
  "⚡ Only the worthy may draw from the shadows.",
  "🔥 The Temple speaks in silence. Can you hear it?",
  "💀 The Light blinds. The Dark reveals.",
  "🩸 A price must be paid in flesh and fire.",
  "🌑 Secrets buried in ash shall rise again."
];

function getDailyMessage() {
  const index = new Date().getDate() % messages.length;
  document.getElementById("dailyMessage").textContent = messages[index];
}

function drawRunes() {
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    ctx.fillStyle = `rgba(200,0,0,${Math.random()})`;
    ctx.font = "20px monospace";
    ctx.fillText("†", x, y);
  }
}

function showEntries() {
  const container = document.getElementById("codexEntries");
  let unlockedCount = 0;

  for (const token in entries) {
    if (localStorage.getItem(token)) {
      const div = document.createElement("div");
      div.textContent = entries[token];
      div.className = "entry-unlocked";
      container.appendChild(div);
      unlockedCount++;
    }
  }

  updateRank(unlockedCount);
}

function updateRank(count) {
  const rankDisplay = document.getElementById("rankDisplay");
  let rank = "Initiate";

  if (count === 1) rank = "Acolyte";
  else if (count === 2) rank = "Apprentice";
  else if (count >= Object.keys(entries).length) rank = "Dark Lord";

  rankDisplay.textContent = `☠ Rank: ${rank}`;
}

function ritualComplete() {
  alert("You have embraced the Codex.");
  window.location.href = "index.html";
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRunes();
  requestAnimationFrame(loop);
}

getDailyMessage();
showEntries();
loop();
