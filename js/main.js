document.addEventListener("DOMContentLoaded", () => {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Menú móvil ----
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  // ---- Aparición escalonada al hacer scroll ----
  const revealables = document.querySelectorAll(".reveal, .reveal-scale");
  if (revealables.length) {
    const groups = new Map();
    revealables.forEach((el) => {
      const parent = el.parentElement;
      const idx = groups.get(parent) || 0;
      el.style.setProperty("--i", idx);
      groups.set(parent, idx + 1);
    });

    if (prefersReduced) {
      revealables.forEach((el) => el.classList.add("visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      revealables.forEach((el) => io.observe(el));
    }
  }

  // ---- Hojas cayendo (hero) ----
  const leavesLayer = document.getElementById("leavesLayer");
  if (leavesLayer && !prefersReduced) {
    const LEAF_SHAPE =
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4C10 4 4 10 4 20c10 0 16-6 16-16Z" opacity=".9"/><path d="M6 18 18 6" stroke="rgba(10,15,12,.35)" stroke-width="1.4" fill="none"/></svg>';
    const colors = ["#93d657", "#3fa446", "#c7e8a0"];
    const count = window.innerWidth < 700 ? 9 : 16;
    for (let i = 0; i < count; i++) {
      const leaf = document.createElement("div");
      leaf.className = "leaf";
      leaf.innerHTML = LEAF_SHAPE;
      const size = 10 + Math.random() * 14;
      const duration = 11 + Math.random() * 9;
      const delay = Math.random() * -20;
      const swayDuration = 2.6 + Math.random() * 2.4;
      const drift = (Math.random() - 0.5) * 220;
      const spin = 220 + Math.random() * 300;
      leaf.style.setProperty("--x", `${Math.random() * 100}%`);
      leaf.style.setProperty("--size", `${size}px`);
      leaf.style.setProperty("--duration", `${duration}s`);
      leaf.style.setProperty("--delay", `${delay}s`);
      leaf.style.setProperty("--sway-duration", `${swayDuration}s`);
      leaf.style.setProperty("--drift", `${drift}px`);
      leaf.style.setProperty("--spin", `${spin}deg`);
      leaf.style.setProperty("--leaf-color", colors[i % colors.length]);
      leavesLayer.appendChild(leaf);
    }
  }

  // ---- Parallax 3D al mover el mouse en el hero ----
  const heroEl = document.querySelector(".hero");
  const sceneWorld = document.querySelector(".hero-scene-world");
  if (heroEl && sceneWorld && !prefersReduced && window.matchMedia("(min-width: 861px)").matches) {
    heroEl.addEventListener("mousemove", (e) => {
      const rect = heroEl.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      sceneWorld.style.setProperty("--ry", `${px * 10}deg`);
      sceneWorld.style.setProperty("--rx", `${-py * 7}deg`);
    });
    heroEl.addEventListener("mouseleave", () => {
      sceneWorld.style.setProperty("--ry", "0deg");
      sceneWorld.style.setProperty("--rx", "0deg");
    });
  }

  // ---- Brillo que sigue el cursor en las cards de servicio ----
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
      card.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });
  });
});
