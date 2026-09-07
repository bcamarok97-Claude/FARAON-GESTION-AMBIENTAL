function WHATSAPP_ICON_SVG(size) {
  return (
    '<svg width="' +
    size +
    '" height="' +
    size +
    '" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .102 5.36.1 11.943c0 2.105.549 4.16 1.595 5.976L0 24l6.335-1.652c1.746.943 3.706 1.444 5.71 1.444h.005c6.585 0 11.946-5.36 11.949-11.944 0-3.19-1.24-6.19-3.502-8.4"/></svg>'
  );
}

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

  // ---- Botón flotante de WhatsApp ----
  const waFloat = document.createElement("a");
  waFloat.href = "https://wa.me/5491135878597?text=" + encodeURIComponent("Hola! Quiero comunicarme con Faraón Gestión Ambiental");
  waFloat.target = "_blank";
  waFloat.rel = "noopener";
  waFloat.className = "whatsapp-float";
  waFloat.setAttribute("aria-label", "Escribir por WhatsApp");
  waFloat.innerHTML =
    '<span class="wa-pulse"></span><span class="wa-pulse wa-pulse-2"></span><span class="wa-ring"></span>' +
    '<span class="wa-core">' + WHATSAPP_ICON_SVG(26) + "</span>";
  document.body.appendChild(waFloat);

  // ---- Brillo que sigue el cursor en las cards de servicio ----
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
      card.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });
  });
});
