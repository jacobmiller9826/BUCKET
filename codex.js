const canvas = document.getElementById("sithCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const entries = [
  {
    text: "✴️ 'In the sand lies memory. In memory, war.'",
    unlockDay: 0
  },
  {
    text: "🩸 'The hood hides the face. The face hides the fire.'",
    unlockDay: 3
  },
  {
    text: "🔥 'Darkness feeds those who dare speak its name.'",
    unlockDay: 7
  },
  {
    text: "💀 'The ancient Temple is alive. It listens.'",
    unlockDay: 10
  }
];

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
  const firstVisitDate = getOrSetFirstVisit();
  const daysSince = daysSinceFirstVisit(firstVisitDate);
  let unlockedCount = 0;

  entries.forEach(entry => {
    if (daysSince >= entry.unlockDay) {
      const div = document.createElement("div");
      div.textContent = entry.text;
      div.className = "entry-unlocked";
      container.appendChild(div);
      unlockedCount++;
    }
  });

  updateRank(unlockedCount);
}

function getOrSetFirstVisit() {
  let stored = localStorage.getItem("bucketFirstVisit");
  if (!stored) {
    const today = new Date().toISOString();
    localStorage.setItem("bucketFirstVisit", today);
    return today;
  }
  return stored;
}

function daysSinceFirstVisit(firstDate) {
  const first = new Date(firstDate);
  const now = new Date();
  return Math.floor((now - first) / (1000 * 60 * 60 * 24));
}

function updateRank(count) {
  const rankDisplay = document.getElementById("rankDisplay");
  let rank = "Initiate";

  if (count >= 2) rank = "Acolyte";
  if (count >= 3) rank = "Apprentice";
  if (count >= entries.length) rank = "Dark Lord";

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
