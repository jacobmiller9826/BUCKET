const canvas = document.getElementById("templeCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gameStarted = false;
let timeSurvived = 0;
let keys = {};
const audio = document.getElementById("sithAudio");

const player = {
  x: 100,
  y: canvas.height / 2,
  vx: 0,
  vy: 0,
  size: 10
};

// Draw 8-bit Sith sprite with colored squares on canvas
function drawPixelSith(x, y) {
  const pixel = (dx, dy, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x + dx * 4, y + dy * 4, 4, 4);
  };

  pixel(0, 0, "black");
  pixel(1, 0, "red");
  pixel(2, 0, "black");

  pixel(0, 1, "red");
  pixel(1, 1, "black");
  pixel(2, 1, "red");

  pixel(0, 2, "red");
  pixel(1, 2, "red");
  pixel(2, 2, "red");

  pixel(1, 3, "red");
  pixel(1, 4, "red");

  pixel(0, 4, "black");
  pixel(2, 4, "black");

  // Lightsaber blade effect
  for (let i = -5; i < 0; i++) {
    ctx.fillStyle = "rgba(255,0,0,0.7)";
    ctx.fillRect(x + 6, y + i * 4, 2, 4);
  }
}

function updatePlayer() {
  if (keys["ArrowUp"]) player.vy -= 0.5;
  if (keys["ArrowDown"]) player.vy += 0.5;
  if (keys["ArrowLeft"]) player.vx -= 0.5;
  if (keys["ArrowRight"]) player.vx += 0.5;
  player.x += player.vx;
  player.y += player.vy;
  player.vx *= 0.9;
  player.vy *= 0.9;
}

function drawObstacles() {
  ctx.fillStyle = "rgba(255,0,0,0.1)";
  for (let i = 0; i < 40; i++) {
    let x = Math.sin((Date.now() + i * 2000) / 1000) * canvas.width / 3 + canvas.width / 2;
    let y = (i * 150 + Date.now() / 2) % canvas.height;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    if (Math.hypot(player.x - x, player.y - y) < 30) {
      gameOver();
    }
  }
}

function gameOver() {
  audio.pause();
  alert("You were consumed by the Light.");
  location.reload();
}

function win() {
  localStorage.setItem("bucketTemplePassed", "yes");
  audio.pause();
  window.location.href = "main.html";
}

function loop() {
  if (!gameStarted) return;
  ctx.fillStyle = "rgba(0,0,0,0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  updatePlayer();
  drawObstacles();
  drawPixelSith(player.x, player.y);

  timeSurvived += 16;
  if (timeSurvived > 20000) win();

  requestAnimationFrame(loop);
}

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("intro").style.display = "none";
  gameStarted = true;
  audio.play();
  loop();
});

document.getElementById("skipBtn").addEventListener("click", () => {
  localStorage.setItem("bucketTemplePassed", "yes");
  window.location.href = "main.html";
});

window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);
