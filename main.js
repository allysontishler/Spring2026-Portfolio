const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}


// Ensure autoplay videos start reliably
window.addEventListener("load", () => {
  document.querySelectorAll("video[autoplay]").forEach(video => {
    video.play().catch(() => {
      // Autoplay may be blocked — this is fine
    });
  });
});

