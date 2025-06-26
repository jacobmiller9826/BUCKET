const quotes = [
  "“The Dark Side is patient. The ritual begins...”",
  "“Through pain, I gain strength.”",
  "“You were born for this shadow.”",
  "“Let your hatred shape your fate.”"
];

let index = 0;
setInterval(() => {
  const quoteEl = document.getElementById("quote");
  index = (index + 1) % quotes.length;
  quoteEl.textContent = quotes[index];
}, 3000);

let glitchOverlay = document.createElement("div");
glitchOverlay.style.position = "fixed";
glitchOverlay.style.top = "0";
glitchOverlay.style.left = "0";
glitchOverlay.style.width = "100%";
glitchOverlay.style.height = "100%";
glitchOverlay.style.background = "black";
glitchOverlay.style.zIndex = "9999";
glitchOverlay.style.display = "none";
glitchOverlay.style.justifyContent = "center";
glitchOverlay.style.alignItems = "center";
glitchOverlay.style.color = "#e00000";
glitchOverlay.style.fontSize = "2rem";
glitchOverlay.style.fontFamily = "'Orbitron', sans-serif";
glitchOverlay.innerHTML = "<p class='glitch-end'>⚠ Ritual Complete</p>";
document.body.appendChild(glitchOverlay);

function flashGlitch() {
  glitchOverlay.style.display = "flex";
  glitchOverlay.style.animation = "glitchFlash 1s ease-in-out forwards";
  setTimeout(() => {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  }, 800);
}

setTimeout(() => {
  flashGlitch();
}, 6000);
