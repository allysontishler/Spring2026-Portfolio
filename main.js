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

document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".phone-media__video");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(async (entry) => {
        const v = entry.target;
        if (entry.isIntersecting) {
          try { await v.play(); } catch (e) {}
        } else {
          v.pause();
        }
      });
    },
    { threshold: 0.35 } // play when ~35% visible
  );

  videos.forEach((v) => {
    v.muted = true;
    v.playsInline = true;
    io.observe(v);
  });
});

