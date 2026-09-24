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

  // ---- Desplegable de Servicios en el menú ----
  const SERVICES = [
    ["recoleccion", "Recolección de residuos", '<path d="M9 2h6a1 1 0 0 1 1 1v1h3a1 1 0 1 1 0 2h-.6l-1.1 13.2A2 2 0 0 1 15.3 21H8.7a2 2 0 0 1-2-1.8L5.6 6H5a1 1 0 1 1 0-2h3V3a1 1 0 0 1 1-1Z"/><path d="M9 9v9M12 9v9M15 9v9" stroke="rgba(8,19,10,.35)" stroke-width="1.4" stroke-linecap="round"/>'],
    ["compactadores", "Equipos compactadores", '<path d="M2 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h1.2l2.3-3.3A1 1 0 0 1 17.3 10H20a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a2.5 2.5 0 1 1-4.9.5H9.9a2.5 2.5 0 1 1-4.95-.5H3a1 1 0 0 1-1-1Z"/><circle cx="7.5" cy="17.5" r="1.7" fill="rgba(8,19,10,.5)"/><circle cx="17" cy="17.5" r="1.7" fill="rgba(8,19,10,.5)"/>'],
    ["roll-off", "Contenedores Roll Off", '<path d="M3 8h18l-1.4 11.2A2 2 0 0 1 17.6 21H6.4a2 2 0 0 1-2-1.8L3 8Z"/><path d="M2 8h20" stroke="rgba(8,19,10,.4)" stroke-width="1.6"/><path d="M6 6l1-2h10l1 2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'],
    ["volquetes", "Volquetes", '<path d="M3 9h18l-1.5 9.4A2 2 0 0 1 17.5 20h-11a2 2 0 0 1-2-1.6L3 9Z"/><path d="M2 9h20" stroke="rgba(8,19,10,.4)" stroke-width="1.6"/><path d="M18 4l3 2.2-1.6 2.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 4v4.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'],
    ["poda", "Poda y espacios verdes", '<path d="M20 4C10 4 4 10 4 20c10 0 16-6 16-16Z"/><path d="M7 17 17 7" stroke="rgba(8,19,10,.35)" stroke-width="1.4" stroke-linecap="round" fill="none"/>'],
    ["depositos", "Depósitos para la calle", '<rect x="10" y="2" width="4" height="4" rx="1"/><rect x="10" y="5" width="4" height="12" rx="1" fill="rgba(8,19,10,.25)"/><path d="M6 9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"/><path d="M9 12v6M12 12v6M15 12v6" stroke="rgba(8,19,10,.35)" stroke-width="1.3" stroke-linecap="round"/>'],
  ];
  const servLink = document.querySelector('.main-nav a[href="servicios.html"]');
  if (servLink) {
    const dd = document.createElement("div");
    dd.className = "nav-dropdown";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav-dropdown-toggle" + (servLink.classList.contains("active") ? " active" : "");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-haspopup", "true");
    btn.innerHTML =
      'Servicios<svg class="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
    const panel = document.createElement("div");
    panel.className = "nav-dropdown-panel";
    panel.innerHTML =
      '<div class="nav-dropdown-inner">' +
      '<div class="nav-dropdown-label">Nuestros servicios</div>' +
      SERVICES.map(
        ([id, title, icon], i) =>
          '<a href="servicios.html#' + id + '" style="--d:' + i + '">' +
          '<span class="dd-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">' + icon + "</svg></span>" +
          '<span class="dd-title">' + title + "</span>" +
          '<span class="dd-num">' + String(i + 1).padStart(2, "0") + "</span>" +
          '<svg class="dd-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>' +
          "</a>"
      ).join("") +
      '<a href="servicios.html" class="dd-all" style="--d:' + SERVICES.length + '">Ver todos los servicios</a>' +
      "</div>";
    dd.append(btn, panel);
    servLink.replaceWith(dd);

    const setOpen = (open) => {
      dd.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
    };
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      setOpen(!dd.classList.contains("open"));
    });
    document.addEventListener("click", (e) => {
      if (!dd.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && dd.classList.contains("open")) {
        setOpen(false);
        btn.focus();
      }
    });
    panel.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  }

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

  // ---- Contadores animados (hero) ----
  const counters = document.querySelectorAll("[data-count-to]");
  counters.forEach((el, i) => {
    const target = parseInt(el.dataset.countTo, 10);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    if (prefersReduced) {
      el.textContent = prefix + target + suffix;
      return;
    }
    const duration = 1600;
    const startDelay = 350 + i * 150;
    setTimeout(() => {
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = prefix + Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, startDelay);
  });

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
