// ---------- Counters (index.html) ----------

function pad(n) { return String(n).padStart(2, "0"); }

function formatDuration(ms) {
  const totalMinutes = Math.floor(ms / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;
  return `${days} Tage, ${pad(hours)}:${pad(minutes)} Std.`;
}

function updateCounters() {
  const schreibenEl = document.getElementById("counter-schreiben");
  const beziehungEl = document.getElementById("counter-beziehung");
  if (!schreibenEl && !beziehungEl) return;

  if (schreibenEl) {
    const start = new Date("2024-05-30T00:00:00");
    const now = new Date();
    schreibenEl.textContent = formatDuration(now - start);
  }

  if (beziehungEl) {
    const start = new Date("2024-07-17T00:00:00");
    const end = new Date("2024-09-13T00:00:00");
    const days = Math.round((end - start) / 86400000);
    beziehungEl.textContent = `${days} Tage`;
  }
}

if (document.getElementById("counter-schreiben") || document.getElementById("counter-beziehung")) {
  updateCounters();
  setInterval(updateCounters, 60000);
}

// ---------- Dodging "Nein" button ----------

const neinBtn = document.getElementById("btn-nein");
const btnWrap = document.getElementById("button-wrap");
const responseText = document.getElementById("response-text");

if (neinBtn && btnWrap) {
  let dodgeCount = 0;
  const dodgeMessages = [
    "Schön versucht.",
    "Nein, wirklich nicht.",
    "Diese Option gibt es nicht.",
    "Du kommst nicht ran.",
    "Ich glaube, das wird nichts.",
  ];

  function moveNeinButton() {
    const wrapRect = btnWrap.getBoundingClientRect();
    const btnRect = neinBtn.getBoundingClientRect();
    const maxX = Math.max(wrapRect.width - btnRect.width, 0);
    const maxY = Math.max(wrapRect.height - btnRect.height, 0);
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    neinBtn.style.position = "absolute";
    neinBtn.style.left = x + "px";
    neinBtn.style.top = y + "px";
  }

  function dodge(e) {
    e.preventDefault();
    moveNeinButton();
    if (responseText) {
      responseText.textContent = dodgeMessages[Math.min(dodgeCount, dodgeMessages.length - 1)];
    }
    dodgeCount++;
  }

  neinBtn.addEventListener("mouseenter", dodge);
  neinBtn.addEventListener("touchstart", dodge, { passive: false });
  neinBtn.addEventListener("click", dodge);
}

const jaBtn = document.getElementById("btn-ja");
if (jaBtn && responseText) {
  jaBtn.addEventListener("click", () => {
    responseText.textContent = "Ich liebe dich. Lass uns reden. 🤍";
  });
}

// ---------- Gallery lightbox (galerie.html) ----------

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

if (lightbox && lightboxImg) {
  document.querySelectorAll(".gallery-item img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("active");
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}
