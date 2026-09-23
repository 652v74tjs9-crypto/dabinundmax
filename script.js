:root {
  --pink: #ff4fc3;
  --pink-hot: #ff1e9c;
  --pink-pale: #ffd6f3;
  --cyan: #29e6ff;
  --blue: #5b8bff;
  --purple: #a75bff;
  --lime: #d4ff3d;
  --silver: #f4f4fb;
  --ink: #2a0a3d;
  --white: #ffffff;

  --font-display: "Chewy", cursive;
  --font-body: "Space Grotesk", sans-serif;
}

* { box-sizing: border-box; }

html { scroll-padding-top: env(safe-area-inset-top, 0px); }

body {
  margin: 0;
  min-height: 100%;
  background:
    radial-gradient(circle at 12% 15%, rgba(255,255,255,0.5), transparent 30%),
    radial-gradient(circle at 88% 80%, rgba(255,255,255,0.35), transparent 35%),
    linear-gradient(150deg, var(--cyan) 0%, var(--blue) 30%, var(--purple) 60%, var(--pink) 100%);
  background-attachment: fixed;
  color: var(--ink);
  font-family: var(--font-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  padding-bottom: env(safe-area-inset-bottom, 0px);
}

/* ---------- Marquee ticker ---------- */

.marquee {
  overflow: hidden;
  white-space: nowrap;
  background: var(--ink);
  color: var(--lime);
  padding: 0.5rem 0;
  padding-top: calc(0.5rem + env(safe-area-inset-top, 0px));
  font-family: var(--font-display);
  letter-spacing: 0.05em;
  border-bottom: 3px solid var(--pink-hot);
}

.marquee-track {
  display: inline-block;
  padding-left: 100%;
  animation: scroll-left 18s linear infinite;
}

@keyframes scroll-left {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}

.page {
  max-width: 680px;
  margin: 0 auto;
  padding: 3.5rem 1.25rem 6rem;
  position: relative;
}

/* ---------- Sparkles ---------- */

.sparkle-field {
  position: absolute;
  inset: 0;
  height: 420px;
  pointer-events: none;
  overflow: hidden;
}

.sparkle {
  position: absolute;
  color: var(--white);
  font-size: 1.6rem;
  text-shadow: 0 0 10px var(--cyan);
  animation: twinkle 2.4s ease-in-out infinite;
}

.s1 { top: 4%; left: 8%; animation-delay: 0s; }
.s2 { top: 12%; left: 85%; animation-delay: 0.6s; font-size: 1.1rem; }
.s3 { top: 32%; left: 4%; animation-delay: 1.1s; font-size: 1.3rem; }
.s4 { top: 2%; left: 55%; animation-delay: 1.6s; font-size: 2rem; }
.s5 { top: 22%; left: 92%; animation-delay: 0.3s; font-size: 1rem; }

@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.15) rotate(15deg); }
}

/* ---------- Hero ---------- */

.hero {
  text-align: center;
  margin-bottom: 2.75rem;
  position: relative;
}

.badge {
  display: inline-block;
  margin: 0 0 0.75rem;
  padding: 0.3rem 1rem;
  background: var(--white);
  border: 2px solid var(--ink);
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  box-shadow: 3px 3px 0 var(--ink);
}

.hero h1 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(3rem, 13vw, 4.5rem);
  margin: 0 0 0.6rem;
  background: linear-gradient(180deg, #ffffff 0%, var(--silver) 35%, var(--pink) 65%, var(--purple) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-stroke: 2px var(--ink);
  text-shadow: 3px 4px 0 var(--ink), 6px 8px 14px rgba(42,10,61,0.35);
  line-height: 1;
}

.hero.small h1 {
  font-size: clamp(2.4rem, 11vw, 3.4rem);
}

.hero .intro {
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--ink);
  max-width: 28rem;
  margin: 0 auto;
  background: rgba(255,255,255,0.55);
  display: inline-block;
  padding: 0.4rem 0.9rem;
  border-radius: 14px;
}

/* ---------- Counters ---------- */

.counters {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 3rem;
}

.counter-card {
  background: var(--white);
  border: 3px solid var(--ink);
  border-radius: 20px;
  padding: 1.4rem 0.9rem;
  text-align: center;
  box-shadow: 5px 5px 0 var(--purple);
}

.counter-label {
  display: block;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--ink);
  opacity: 0.75;
  margin-bottom: 0.5rem;
}

.counter-value {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 6vw, 2rem);
  color: var(--pink-hot);
  line-height: 1.1;
}

.counter-sub {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--purple);
}

/* ---------- Letter ---------- */

.letter {
  background: rgba(255,255,255,0.85);
  border: 3px solid var(--ink);
  border-radius: 22px;
  padding: 1.6rem 1.5rem;
  font-size: 1.05rem;
  margin-bottom: 3rem;
  box-shadow: 6px 6px 0 var(--cyan);
}

.letter p { margin: 0 0 1.2rem; }
.letter p:last-child {
  margin-bottom: 0;
  font-weight: 700;
  color: var(--pink-hot);
}

/* ---------- Question ---------- */

.question {
  text-align: center;
  padding-top: 1rem;
}

.question h2 {
  font-family: var(--font-display);
  font-size: clamp(1.7rem, 6vw, 2.3rem);
  margin: 0 0 0.3rem;
  color: var(--white);
  text-shadow: 2px 3px 0 var(--ink);
}

.question-sub {
  margin: 0 0 2rem;
  font-weight: 500;
  color: var(--ink);
  background: var(--lime);
  display: inline-block;
  padding: 0.25rem 0.8rem;
  border-radius: 999px;
  border: 2px solid var(--ink);
  font-size: 0.95rem;
}

.buttons {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2rem;
  min-height: 240px;
}

.btn {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 1.05rem;
  padding: 0.9rem 2.4rem;
  border-radius: 999px;
  border: 3px solid var(--ink);
  cursor: pointer;
  height: fit-content;
  position: relative;
  overflow: hidden;
}

.btn::after {
  content: "";
  position: absolute;
  top: 8%;
  left: 10%;
  width: 55%;
  height: 35%;
  background: rgba(255,255,255,0.55);
  border-radius: 50%;
  filter: blur(1px);
  pointer-events: none;
}

.btn-yes {
  background: linear-gradient(180deg, var(--pink) 0%, var(--pink-hot) 100%);
  color: var(--white);
  box-shadow: 4px 4px 0 var(--ink);
  transition: transform 0.15s ease;
}

.btn-yes:hover { transform: translateY(-2px); }
.btn-yes:active { transform: translateY(1px); box-shadow: 2px 2px 0 var(--ink); }

.btn-no {
  background: var(--white);
  color: var(--ink);
  box-shadow: 4px 4px 0 var(--purple);
  transition: left 0.15s ease, top 0.15s ease;
}

.response-text {
  margin-top: 1.75rem;
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: var(--white);
  text-shadow: 2px 2px 0 var(--ink);
  min-height: 1.8rem;
}

/* ---------- Nav ---------- */

.page-nav {
  text-align: center;
  margin-top: 3rem;
}

.gallery-page .page-nav {
  margin-top: 2rem;
  margin-bottom: 2.5rem;
}

.page-nav a {
  color: var(--ink);
  text-decoration: none;
  font-weight: 700;
  background: var(--white);
  border: 2px solid var(--ink);
  border-radius: 999px;
  padding: 0.5rem 1.2rem;
  box-shadow: 3px 3px 0 var(--pink-hot);
  display: inline-block;
}

/* ---------- Gallery ---------- */

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.4rem 1rem;
}

.gallery-item { margin: 0; }

.polaroid {
  background: var(--white);
  padding: 0.6rem 0.6rem 1rem;
  border: 3px solid var(--ink);
  border-radius: 4px;
  box-shadow: 5px 5px 0 var(--purple);
  transform: rotate(var(--tilt, -2deg));
  transition: transform 0.2s ease;
}

.gallery-item:nth-child(even) .polaroid { --tilt: 2deg; }
.gallery-item:nth-child(3n) .polaroid { --tilt: -3deg; }
.gallery-item:nth-child(4n) .polaroid { --tilt: 1deg; }

.polaroid:hover { transform: rotate(0deg) scale(1.03); }

.polaroid img {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  cursor: pointer;
}

.polaroid figcaption {
  font-family: var(--font-display);
  text-align: center;
  font-size: 0.95rem;
  color: var(--ink);
  padding-top: 0.5rem;
}

/* ---------- Lightbox ---------- */

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(42,10,61,0.92);
  display: none;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 20;
}

.lightbox.active { display: flex; }

.lightbox img {
  max-width: 100%;
  max-height: 85vh;
  border: 4px solid var(--white);
  border-radius: 4px;
}

.lightbox-close {
  position: absolute;
  top: calc(env(safe-area-inset-top, 0px) + 1.2rem);
  right: 1.2rem;
  background: var(--lime);
  border: 2px solid var(--ink);
  border-radius: 50%;
  width: 2.4rem;
  height: 2.4rem;
  color: var(--ink);
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
}

/* ---------- Falling strawberries ---------- */

.strawberry {
  position: fixed;
  top: -10vh;
  pointer-events: none;
  z-index: 50;
  animation-name: fall;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  user-select: none;
}

@keyframes fall {
  to { transform: translateY(115vh) rotate(360deg); }
}

/* ---------- Responsive ---------- */

@media (min-width: 640px) {
  .gallery-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 420px) {
  .counters { grid-template-columns: 1fr; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (prefers-reduced-motion: reduce) {
  .sparkle, .marquee-track, .btn-yes, .polaroid { animation: none !important; transition: none !important; }
}
