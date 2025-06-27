const canvas = document.getElementById('artCanvas');
const ctx = canvas.getContext('2d');
const statusEl = document.getElementById('ritualStatus');
const saveBtn = document.getElementById('saveBtn');

function performRitual() {
  const prompt = document.getElementById('promptInput').value.trim();
  if (!prompt) {
    statusEl.textContent = "❌ The Force demands a prompt.";
    return;
  }

  statusEl.textContent = "🔮 Chanting the Dark Words...";
  saveBtn.style.display = 'none';

  setTimeout(() => {
    generateArt(prompt);
    statusEl.textContent = "✅ Vision Summoned. Download if you dare.";
    saveBtn.style.display = 'inline-block';
  }, 2000);
}

function generateArt(prompt) {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add base color from prompt
  const baseColor = prompt.includes('blood') ? 'crimson'
                  : prompt.includes('sand') ? '#b8860b'
                  : prompt.includes('desert') ? '#c2b280'
                  : 'red';

  ctx.fillStyle = baseColor;
  ctx.globalAlpha = 0.2;
  for (let i = 0; i < 50; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      Math.random() * 100,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // Add glitch lines
  for (let i = 0; i < 20; i++) {
    ctx.strokeStyle = `rgba(255,0,0,${Math.random()})`;
    ctx.lineWidth = Math.random() * 5 + 1;
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.stroke();
  }

  // Sith Symbol Style Circle
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 150, 0, 2*Math.PI);
  ctx.stroke();

  ctx.font = "bold 20px monospace";
  ctx.fillStyle = 'red';
  ctx.fillText(prompt.toUpperCase(), 50, canvas.height - 30);
}

function saveImage() {
  const link = document.createElement('a');
  link.download = 'bucket_vision.png';
  link.href = canvas.toDataURL();
  link.click();
}
