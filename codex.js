const canvas = document.getElementById("sithCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const entries = {
  bucketToken_art1: "✴️ 'In the sand lies memory. In memory, war.'",
  bucketToken_cloth1: "🩸 'The hood hides the face. The face hides the fire.'"
};

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
  for (const token in entries) {
    if (localStorage.getItem(token)) {
      const div = document.createElement("div");
      div.textContent = entries[token];
      container.appendChild(div);
    }
  }
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRunes();
  requestAnimationFrame(loop);
}

function ritualComplete() {
  alert("You have embraced the Codex.");
  window.location.href = "index.html";
}

showEntries();
loop();
