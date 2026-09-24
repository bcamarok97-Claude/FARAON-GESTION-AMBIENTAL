function WHATSAPP_ICON_SVG(size) {
  return (
    '<svg width="' +
    size +
    '" height="' +
    size +
    '" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .102 5.36.1 11.943c0 2.105.549 4.16 1.595 5.976L0 24l6.335-1.652c1.746.943 3.706 1.444 5.71 1.444h.005c6.585 0 11.946-5.36 11.949-11.944 0-3.19-1.24-6.19-3.502-8.4"/></svg>'
  );
}

// Hoja detallada (degradé, nervaduras y reflejo) para los emblemas circulares
function LEAF_EMBLEM_SVG(id, size) {
  return (
    '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" aria-hidden="true"><defs>' +
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#1f6b34"/><stop offset="1" stop-color="#0a2a1c"/></linearGradient></defs>' +
    '<g transform="rotate(38 12 12)">' +
    '<path d="M12 1.8C17.6 5.6 18.7 12.6 12 20.6 5.3 12.6 6.4 5.6 12 1.8Z" fill="url(#' + id + ')"/>' +
    '<path d="M12 4.6V21.6" stroke="#b8ee7c" stroke-opacity=".75" stroke-width=".9" stroke-linecap="round" fill="none"/>' +
    '<path d="M12 9.2l2.9-2.3M12 12.6l3.5-2.6M12 16l3-2.1M12 9.2 9.1 6.9M12 12.6 8.5 10M12 16l-3-2.1" stroke="#b8ee7c" stroke-opacity=".5" stroke-width=".7" stroke-linecap="round" fill="none"/>' +
    '<path d="M10.2 5.2C8.6 7.4 8.1 10 8.6 12.6" stroke="#fff" stroke-opacity=".28" stroke-width=".8" stroke-linecap="round" fill="none"/>' +
    "</g></svg>"
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Desplegable de Servicios en el menú ----
  const SERVICES = [
    ["recoleccion-rsu.html", "Recolección de RSU", '<path d="M9 2h6a1 1 0 0 1 1 1v1h3a1 1 0 1 1 0 2h-.6l-1.1 13.2A2 2 0 0 1 15.3 21H8.7a2 2 0 0 1-2-1.8L5.6 6H5a1 1 0 1 1 0-2h3V3a1 1 0 0 1 1-1Z"/><path d="M9 9v9M12 9v9M15 9v9" stroke="rgba(8,19,10,.35)" stroke-width="1.4" stroke-linecap="round"/>'],
    ["compactadoras-fijas.html", "Compactadoras fijas", '<path d="M4 9.5h16a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5a1 1 0 0 1 1-1Z"/><rect x="5.5" y="11.5" width="13" height="2.4" rx=".7" fill="rgba(8,19,10,.45)"/><path d="M7 17.2h10M7 19h10" stroke="rgba(8,19,10,.3)" stroke-width="1.2" stroke-linecap="round"/><path d="M12 2v5.2M9.4 4.8 12 7.4l2.6-2.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'],
    ["contenedores-roll-off.html", "Contenedores roll-off", '<path d="M3 8h18l-1.4 11.2A2 2 0 0 1 17.6 21H6.4a2 2 0 0 1-2-1.8L3 8Z"/><path d="M2 8h20" stroke="rgba(8,19,10,.4)" stroke-width="1.6"/><path d="M6 6l1-2h10l1 2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'],
    ["alquiler-volquetes.html", "Alquiler de volquetes", '<path d="M3 9h18l-1.5 9.4A2 2 0 0 1 17.5 20h-11a2 2 0 0 1-2-1.6L3 9Z"/><path d="M2 9h20" stroke="rgba(8,19,10,.4)" stroke-width="1.6"/><path d="M18 4l3 2.2-1.6 2.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 4v4.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'],
    ["poda-espacios-verdes.html", "Poda y espacios verdes", '<path d="M20 4C10 4 4 10 4 20c10 0 16-6 16-16Z"/><path d="M7 17 17 7" stroke="rgba(8,19,10,.35)" stroke-width="1.4" stroke-linecap="round" fill="none"/>'],
    ["contenedores-urbanos.html", "Contenedores urbanos", '<rect x="10" y="2" width="4" height="4" rx="1"/><rect x="10" y="5" width="4" height="12" rx="1" fill="rgba(8,19,10,.25)"/><path d="M6 9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"/><path d="M9 12v6M12 12v6M15 12v6" stroke="rgba(8,19,10,.35)" stroke-width="1.3" stroke-linecap="round"/>'],
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
        ([page, title, icon], i) =>
          '<a href="' + page + '"' + (location.pathname.endsWith("/" + page) ? ' aria-current="page"' : "") + ' style="--d:' + i + '">' +
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

  // ---- Transición entre secciones (solo en Inicio) ----
  // Entre cada sección: línea que se dibuja desde el centro, emblema con hoja,
  // ráfaga de hojas y la sección siguiente que se "abre" como una hoja.
  if (document.body.classList.contains("home")) {
    const LEAF_PATH = "M0 -9 C5.2 -5.6 5.6 3.6 0 9 C-5.6 3.6 -5.2 -5.6 0 -9 Z";
    const sections = [...document.querySelectorAll("body > section")].slice(1);
    let pending = [];
    // hojas de la ráfaga: salen hacia los costados (spread = alcance en px)
    const makeLeaves = (n, count, spread, extraClass) =>
      Array.from({ length: count }, (_, i) => {
        const side = i % 2 === 0 ? 1 : -1;
        const tx = side * (40 + Math.random() * spread);
        const ty = -80 + Math.random() * 200;
        const r = side * (120 + Math.random() * 260);
        const s = 0.7 + Math.random() * 0.7;
        const delay = (Math.random() * 0.2).toFixed(2);
        const g = i % 3 === 0 ? "B" : "A";
        return (
          '<svg class="ld-leaf' + extraClass + '" viewBox="-10 -10 20 20" style="--tx:' + tx.toFixed(0) + "px;--ty:" + ty.toFixed(0) +
          "px;--r:" + r.toFixed(0) + "deg;--s:" + s.toFixed(2) + ";--delay:" + delay + 's">' +
          '<path d="' + LEAF_PATH + '" fill="url(#ldLeaf' + g + n + ')"/>' +
          '<path d="M0 -7.5 Q0.6 0 0 8" class="vein"/></svg>'
        );
      }).join("");
    sections.forEach((sec, n) => {
      const burst = makeLeaves(n, 18, 380, "");

      const divider = document.createElement("div");
      divider.className = "leaf-divider";
      divider.setAttribute("aria-hidden", "true");
      divider.innerHTML =
        '<svg width="0" height="0" style="position:absolute"><defs>' +
        '<linearGradient id="ldLeafA' + n + '" x1="0" y1="-9" x2="0" y2="9" gradientUnits="userSpaceOnUse">' +
        '<stop offset="0" stop-color="#c8f28a"/><stop offset=".45" stop-color="#6cc24a"/><stop offset="1" stop-color="#1f6b34"/></linearGradient>' +
        '<linearGradient id="ldLeafB' + n + '" x1="0" y1="-9" x2="0" y2="9" gradientUnits="userSpaceOnUse">' +
        '<stop offset="0" stop-color="#93d657"/><stop offset=".5" stop-color="#3fa446"/><stop offset="1" stop-color="#0e3b2e"/></linearGradient>' +
        "</defs></svg>" +
        '<span class="ld-line ld-line-l"></span><span class="ld-line ld-line-r"></span>' +
        '<button type="button" class="ld-emblem" tabindex="-1">' +
        '<span class="core-wave"></span><span class="core-wave w2"></span><span class="core-ring"></span>' +
        '<span class="core-orb">' + LEAF_EMBLEM_SVG("ldIcon" + n, 28) + "</span></button>" +
        '<span class="ld-burst">' + burst + "</span>";
      sec.before(divider);
      sec.classList.add("page-open");

      // al tocar el emblema se desprende una nueva ráfaga de hojas
      const emblem = divider.querySelector(".ld-emblem");
      const burstEl = divider.querySelector(".ld-burst");
      emblem.addEventListener("click", () => {
        emblem.classList.remove("pressed");
        void emblem.offsetWidth; // reinicia la animación del destello
        emblem.classList.add("pressed");
        if (prefersReduced) return;
        burstEl.insertAdjacentHTML("beforeend", makeLeaves(n, 16, 300, " pop"));
        burstEl.querySelectorAll(".ld-leaf.pop:not([data-live])").forEach((leaf) => {
          leaf.dataset.live = "1";
          leaf.addEventListener("animationend", () => leaf.remove(), { once: true });
        });
      });

      pending.push([divider, sec]);
    });

    // Se abre cuando la línea llega al 78% de la pantalla, o si ya quedó
    // arriba (salto directo, recarga a mitad de página, scroll muy rápido)
    const check = () => {
      pending = pending.filter(([divider, sec]) => {
        if (prefersReduced || divider.getBoundingClientRect().top < window.innerHeight * 0.78) {
          divider.classList.add("on");
          sec.classList.add("opened");
          return false;
        }
        return true;
      });
      if (!pending.length) window.removeEventListener("scroll", onScroll);
    };
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        check();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    check();
  }

  // ---- "Para quién es": etiquetas girando en órbita (páginas de servicio) ----
  // Carrusel en elipse alrededor de un emblema: adelante grandes y nítidas,
  // atrás chicas y tenues. Un cometa de luz recorre la órbita y hace destellar
  // cada etiqueta al pasar. Al pasar el mouse todo frena suave.
  if (!prefersReduced) {
    document.querySelectorAll(".svc-tags").forEach((box, bi) => {
      const tags = [...box.children];
      const n = tags.length;
      box.classList.add("is-orbit");

      // Estela del cometa: segmentos superpuestos que se afinan y apagan hacia atrás
      const TAIL = 14;
      const TAIL_LEN = 22; // largo total de la estela (% de la órbita)
      const track = document.createElement("span");
      track.className = "orbit-track";
      const gid = "orbitGrad" + bi;
      let tail = "";
      for (let k = 0; k < TAIL; k++) {
        const f = 1 - k / TAIL; // 1 = pegado a la cabeza
        tail +=
          '<ellipse class="orbit-tail" pathLength="100" data-len="' + (TAIL_LEN * (k + 1) / TAIL).toFixed(2) +
          '" style="stroke-opacity:' + (0.06 + 0.5 * f * f).toFixed(3) + ";stroke-width:" + (0.8 + 2 * f).toFixed(2) + '"/>';
      }
      track.innerHTML =
        '<svg class="orbit-svg"><defs>' +
        '<linearGradient id="' + gid + '" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#93d657" stop-opacity=".08"/>' +
        '<stop offset=".55" stop-color="#93d657" stop-opacity=".22"/>' +
        '<stop offset="1" stop-color="#c8f28a" stop-opacity=".55"/></linearGradient></defs>' +
        '<ellipse class="orbit-inner" pathLength="100"/>' +
        '<ellipse class="orbit-base" pathLength="100" stroke="url(#' + gid + ')"/>' +
        tail +
        "</svg>";
      const svg = track.querySelector("svg");
      const inner = svg.querySelector(".orbit-inner");
      const base = svg.querySelector(".orbit-base");
      const tails = [...svg.querySelectorAll(".orbit-tail")].map((el) => {
        const len = parseFloat(el.dataset.len);
        el.setAttribute("stroke-dasharray", len + " " + (100 - len));
        return [el, len];
      });

      // Cabeza del cometa: esfera de luz con halo (fuera del SVG para poder
      // pasar por delante o por detrás del emblema según la profundidad)
      const comet = document.createElement("span");
      comet.className = "orbit-comet";

      // Emblema central: esfera de vidrio con hoja, anillo de luz y ondas
      const core = document.createElement("span");
      core.className = "orbit-core";
      const lid = "orbitLeaf" + bi;
      core.innerHTML =
        '<span class="core-wave"></span><span class="core-wave w2"></span>' +
        '<span class="core-dash"></span><span class="core-ring"></span>' +
        '<span class="core-orb">' + LEAF_EMBLEM_SVG(lid, 34) + "</span>";
      box.append(track, comet, core);

      let rx = 0, ry = 0;
      const measure = () => {
        const maxW = Math.max(...tags.map((t) => t.offsetWidth));
        rx = Math.max(70, box.clientWidth / 2 - maxW * 0.42);
        ry = box.clientHeight / 2 - 34;
        track.style.width = rx * 2 + "px";
        track.style.height = ry * 2 + "px";
        svg.setAttribute("viewBox", "0 0 " + rx * 2 + " " + ry * 2);
        svg.querySelectorAll("ellipse").forEach((el) => {
          const pad = el === inner ? 16 : 1;
          el.setAttribute("cx", rx);
          el.setAttribute("cy", ry);
          el.setAttribute("rx", rx - pad);
          el.setAttribute("ry", ry - pad);
        });
      };
      measure();
      window.addEventListener("resize", measure);

      let angle = 0, last = 0, running = false;
      const TURN_MS = 26000; // las etiquetas dan una vuelta cada 26s
      const AUTO_VEL = (-Math.PI * 2) / TURN_MS; // velocidad propia (rad/ms)
      const MAX_VEL = 0.025; // tope al impulsarla con el mouse
      let vel = 0; // velocidad actual (rad/ms)
      let hovering = false, dragging = false;
      const COMET_RATIO = 2.6; // el cometa va 2,6 veces más rápido
      const hitUntil = new Array(n).fill(0);
      const draw = (now) => {
        // posición del cometa sobre la elipse (parámetro t en radianes)
        const t = Math.PI / 2 - angle * COMET_RATIO;
        const head = (((t / (Math.PI * 2)) * 100) % 100 + 100) % 100;
        tails.forEach(([el, len]) => el.setAttribute("stroke-dashoffset", (len - head).toFixed(2)));
        const cx = Math.cos(t) * (rx - 1);
        const cy = Math.sin(t) * (ry - 1);
        const cDepth = (Math.sin(t) + 1) / 2; // abajo = adelante
        comet.style.transform = `translate(-50%, -50%) translate(${cx.toFixed(1)}px, ${cy.toFixed(1)}px) scale(${(0.65 + 0.45 * cDepth).toFixed(3)})`;
        comet.style.opacity = (0.45 + 0.55 * cDepth).toFixed(3);
        comet.style.zIndex = cDepth > 0.5 ? 26 : 8;

        tags.forEach((tg, i) => {
          const a = angle + (i / n) * Math.PI * 2;
          const depth = (Math.cos(a) + 1) / 2; // 1 = adelante, 0 = atrás
          const x = Math.sin(a) * rx;
          const y = Math.cos(a) * ry;
          tg.style.transform = `translate(-50%, -50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) scale(${(0.7 + 0.3 * depth).toFixed(3)})`;
          tg.style.opacity = (0.28 + 0.72 * depth).toFixed(3);
          tg.style.zIndex = depth > 0.5 ? 20 + Math.round(depth * 10) : Math.round(depth * 10);
          tg.classList.toggle("is-front", depth > 0.93);
          // destello cuando el cometa pasa por la etiqueta
          const tagT = Math.PI / 2 - a;
          let d = Math.abs(((t - tagT) % (Math.PI * 2) + Math.PI * 3) % (Math.PI * 2) - Math.PI);
          if (d < 0.16) hitUntil[i] = now + 420;
          tg.classList.toggle("is-hit", now < hitUntil[i]);
        });
      };
      const frame = (now) => {
        if (!running) return;
        const dt = last ? Math.min(now - last, 50) : 16;
        last = now;
        if (!dragging) {
          // tiende a su velocidad propia (o a 0 con el mouse encima);
          // si se la impulsó, frena de a poco como con fricción
          const goal = hovering ? 0 : AUTO_VEL;
          const k = 1 - Math.pow(Math.abs(vel) > Math.abs(AUTO_VEL) * 1.5 ? 0.985 : 0.94, dt / 16);
          vel += (goal - vel) * k;
          angle += vel * dt;
        }
        draw(now);
        requestAnimationFrame(frame);
      };
      draw(performance.now());
      box.addEventListener("mouseenter", () => {
        hovering = true;
        box.classList.add("is-paused");
      });
      box.addEventListener("mouseleave", () => {
        hovering = false;
        box.classList.remove("is-paused");
      });

      // Agarrar y girar a mano; al soltar con impulso sigue girando con inercia
      const pointerParam = (e) => {
        const r = box.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / (rx || 1);
        const dy = (e.clientY - (r.top + r.height / 2)) / (ry || 1);
        return Math.atan2(dx, dy); // mismo parámetro que ubica las etiquetas
      };
      const wrap = (d) => ((d + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
      let lastP = 0, lastT = 0, dragVel = 0;
      box.addEventListener("pointerdown", (e) => {
        if (e.button !== 0) return;
        dragging = true;
        box.classList.add("is-dragging");
        box.setPointerCapture(e.pointerId);
        lastP = pointerParam(e);
        lastT = performance.now();
        dragVel = 0;
        vel = 0;
      });
      box.addEventListener("pointermove", (e) => {
        if (!dragging) return;
        const p = pointerParam(e);
        const now = performance.now();
        const d = wrap(p - lastP);
        angle += d;
        const dt = Math.max(now - lastT, 1);
        dragVel = dragVel * 0.6 + (d / dt) * 0.4; // velocidad suavizada del gesto
        lastP = p;
        lastT = now;
      });
      const endDrag = () => {
        if (!dragging) return;
        dragging = false;
        box.classList.remove("is-dragging");
        // si el gesto se frenó antes de soltar, no hay impulso
        const idle = performance.now() - lastT > 90;
        vel = idle ? 0 : Math.max(-MAX_VEL, Math.min(MAX_VEL, dragVel));
      };
      box.addEventListener("pointerup", endDrag);
      box.addEventListener("pointercancel", endDrag);
      // solo anima mientras la sección está en pantalla
      new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !running) {
          running = true;
          last = 0;
          requestAnimationFrame(frame);
        } else if (!e.isIntersecting) {
          running = false;
        }
      }).observe(box);
    });
  }

  // ---- Botón flotante de WhatsApp ----
  const waFloat = document.createElement("a");
  waFloat.href = "https://wa.me/5491135878597?text=" + encodeURIComponent("Hola! Quiero comunicarme con Faraón Gestión Ambiental");
  waFloat.target = "_blank";
  waFloat.rel = "noopener";
  waFloat.className = "whatsapp-float";
  waFloat.setAttribute("aria-label", "Escribir por WhatsApp");
  // Hojas en órbita: 8 hojas en círculo, tangentes al anillo, alternando tamaño y tono
  const LEAF = "M0 -9 C5.2 -5.6 5.6 3.6 0 9 C-5.6 3.6 -5.2 -5.6 0 -9 Z";
  const leaves = Array.from({ length: 8 }, (_, i) => {
    const ang = i * 45;
    const big = i % 2 === 0;
    const s = big ? 1 : 0.78;
    const tilt = big ? 58 : 122;
    return (
      '<g transform="rotate(' + ang + ") translate(0 -38) rotate(" + tilt + ") scale(" + s + ')">' +
      '<path d="' + LEAF + '" fill="url(#waLeaf' + (big ? "A" : "B") + ')"/>' +
      '<path d="M0 -7.5 Q0.6 0 0 8" class="vein"/>' +
      '<path d="M0 -2 L2.6 -4.4 M0 2 L2.8 -0.2 M0 -2 L-2.6 -4.4 M0 2 L-2.8 -0.2" class="vein vein-side"/>' +
      '<path d="M-1.6 -6.6 C-3.6 -3.6 -3.8 0 -2.6 3" class="shine"/>' +
      "</g>"
    );
  }).join("");
  const leavesSvg =
    '<svg class="wa-leaves" viewBox="-50 -50 100 100" aria-hidden="true">' +
    "<defs>" +
    '<linearGradient id="waLeafA" x1="0" y1="-9" x2="0" y2="9" gradientUnits="userSpaceOnUse">' +
    '<stop offset="0" stop-color="#c8f28a"/><stop offset=".45" stop-color="#6cc24a"/><stop offset="1" stop-color="#1f6b34"/></linearGradient>' +
    '<linearGradient id="waLeafB" x1="0" y1="-9" x2="0" y2="9" gradientUnits="userSpaceOnUse">' +
    '<stop offset="0" stop-color="#93d657"/><stop offset=".5" stop-color="#3fa446"/><stop offset="1" stop-color="#0e3b2e"/></linearGradient>' +
    "</defs>" +
    leaves +
    "</svg>";

  waFloat.innerHTML =
    '<span class="wa-pulse"></span><span class="wa-pulse wa-pulse-2"></span>' + leavesSvg + '<span class="wa-ring"></span>' +
    '<span class="wa-core">' + WHATSAPP_ICON_SVG(17) + "</span>";
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
