// Buy button simulation
function buyNow(item) {
  alert(`BUY NOW: ${item}\nRedirecting to secure payment.`);
  // Replace with real link or integration later
}

// Custom cursor
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// PWA install
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
