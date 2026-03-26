import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { servicesData } from "../Data/servicesData";

function ServicesDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [visible, setVisible] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [heroReady, setHeroReady] = useState(false);
  const cardRefs = useRef([]);

  const service = servicesData.find((item) => item.id === id);

  // Hero entrance
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Parallax scroll
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll animation
  useEffect(() => {
    if (!service) return;
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible((prev) => [...new Set([...prev, index])]);
            }, index * 90);
          }
        },
        { threshold: 0.07 },
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, [service]);

  if (!service) {
    return (
      <div className="sd-not-found">
        <style>{notFoundStyles}</style>
        <div className="nf-inner">
          <div className="nf-icon">🔍</div>
          <h1 className="nf-title">Service Not Found</h1>
          <p className="nf-sub">
            The service you're looking for doesn't exist or has moved.
          </p>
          <button onClick={() => navigate("/services")} className="sd-back-btn">
            <ArrowIcon /> Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="sd-root">
      <style>{globalStyles}</style>

      {/* ══ HERO ══ */}
      <section className="sd-hero">
        <div className="sd-hero-noise" />
        <div
          className="sd-hero-orb sd-orb-1"
          style={{ transform: `translateY(${scrollY * 0.14}px)` }}
        />
        <div
          className="sd-hero-orb sd-orb-2"
          style={{ transform: `translateY(${-scrollY * 0.09}px)` }}
        />
        <div
          className="sd-hero-orb sd-orb-3"
          style={{ transform: `translateY(${scrollY * 0.06}px)` }}
        />

        <div className={`sd-hero-inner ${heroReady ? "hero-visible" : ""}`}>
          {/* Eyebrow */}
          <div className="sd-eyebrow">
            <span className="sd-eyebrow-dot" />
            Our Services
          </div>

          {/* Icon + Headline row */}
          <div className="sd-hero-row">
            <div className="sd-icon-shell">
              <div className="sd-icon-glow" />
              <span className="sd-icon-emoji">{service.icon}</span>
            </div>

            <div className="sd-hero-text">
              <h1 className="sd-hero-title">
                {service?.id?.charAt(0).toUpperCase() +
                  service?.id?.slice(1).toLowerCase()}
              </h1>
              <p className="sd-hero-sub">{service.title}</p>
            </div>
          </div>

          {/* Pills */}
          <div className="sd-pills-row">
            {service.miniBullets.map((item, i) => (
              <span
                key={i}
                className="sd-pill"
                style={{ animationDelay: `${0.3 + i * 0.07}s` }}
              >
                <span className="sd-pill-dot" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="sd-hero-divider" />
      </section>

      {/* ══ STATS ══ */}
      {service.stats && service.stats.length > 0 && (
        <div className="sd-stats-band">
          {service.stats.map((s, i) => (
            <div key={i} className="sd-stat-item">
              <div className="sd-stat-num">{s.value}</div>
              <div className="sd-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* ══ MAIN CONTENT ══ */}
      <main className="sd-content">
        <div className="sd-section-header">
          <p className="sd-section-label">What we cover</p>
          <h2 className="sd-section-title">Explore the Details</h2>
          <div className="sd-title-line" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {service.sections.map((section, index) => (
            <article
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`sd-card${visible.includes(index) ? " visible" : ""}${
                section.wide ? " sd-card-wide" : ""
              }`}
              style={{ transitionDelay: `${(index % 4) * 55}ms` }}
            >
              {/* Card top accent bar */}
              <div className="sd-card-bar" />

              {/* Badge */}
              <div className="sd-card-badge">
                <PentagonIcon />
                Section {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="sd-card-title">{section.title}</h3>

              {section.description && (
                <p className="sd-card-desc">{section.description}</p>
              )}

              {section.highlight && (
                <div className="sd-highlight">
                  <span className="sd-highlight-icon">💡</span>
                  {section.highlight}
                </div>
              )}

              {section.points && (
                <ul className="sd-points-list">
                  {section.points.map((point, i) => (
                    <li key={i} className="sd-point">
                      <div className="sd-point-dot">
                        <CheckIcon />
                      </div>
                      <span className="sd-point-text">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.images && section.images.length > 0 && (
                <div
                  className="sd-images-grid"
                  style={{
                    gridTemplateColumns: `repeat(${Math.min(section.images.length, 3)}, 1fr)`,
                  }}
                >
                  {section.images.map((img, i) => (
                    <div key={i} className="sd-img-wrap">
                      <img src={img} alt="" loading="lazy" />
                    </div>
                  ))}
                </div>
              )}

              <div className="sd-card-corner" />
            </article>
          ))}
        </div>
      </main>

      {/* ══ FOOTER CTA ══ */}
      <footer className="sd-footer">
        <div
          className="sd-footer-orb"
          style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
        />
        <p className="sd-footer-tag">Ready to start?</p>
        <p className="sd-footer-cta">Explore all our services</p>
        <button className="sd-back-btn" onClick={() => navigate("/services")}>
          <ArrowIcon /> Back to Services
        </button>
      </footer>
    </div>
  );
}

/* ══════════ SVG HELPERS ══════════ */
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M10 12L6 8l4-4"
      stroke="#fff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PentagonIcon = () => (
  <svg viewBox="0 0 10 10" width="8" height="8" fill="#F15A2B">
    <polygon points="5,1 9,4 7,9 3,9 1,4" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 12 12" width="11" height="11">
    <path
      d="M2 6l3 3 5-5"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ══════════ STYLES ══════════ */
const notFoundStyles = `
  .sd-not-found {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0D0F1A;
    padding: 24px;
  }
  .nf-inner { text-align: center; }
  .nf-icon { font-size: 4.5rem; margin-bottom: 20px; }
  .nf-title {
    font-family: 'Fraunces', serif;
    color: #fff;
    font-size: clamp(1.8rem, 5vw, 2.8rem);
    margin-bottom: 12px;
  }
  .nf-sub { color: rgba(255,255,255,0.5); margin-bottom: 32px; font-family: 'Figtree', sans-serif; }
`;

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,700;0,800;0,900;1,700;1,800&family=Figtree:wght@300;400;500;600;700&family=Syne:wght@500;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── ROOT ── */
  .sd-root {
    background: #F2F4F9;
    min-height: 100vh;
    font-family: 'Figtree', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  /* ══ HERO ══ */
  .sd-hero {
    position: relative;
    overflow: hidden;
    background: linear-gradient(140deg, #080C18 0%, #0F1D35 45%, #091628 100%);
    padding: 110px clamp(16px, 5vw, 64px) 80px;
  }

  .sd-hero-noise {
    position: absolute;
    inset: 0;
    opacity: 0.035;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  .sd-hero-orb {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(80px);
  }
  .sd-orb-1 {
    width: clamp(280px, 45vw, 580px);
    height: clamp(280px, 45vw, 580px);
    background: radial-gradient(circle, rgba(241,90,43,0.55), transparent 70%);
    top: -120px; right: -100px;
    opacity: 0.55;
  }
  .sd-orb-2 {
    width: clamp(200px, 35vw, 420px);
    height: clamp(200px, 35vw, 420px);
    background: radial-gradient(circle, rgba(59,127,255,0.45), transparent 70%);
    bottom: -80px; left: -80px;
    opacity: 0.45;
  }
  .sd-orb-3 {
    width: clamp(120px, 20vw, 260px);
    height: clamp(120px, 20vw, 260px);
    background: radial-gradient(circle, rgba(130,80,255,0.3), transparent 70%);
    top: 40%; left: 40%;
    opacity: 0.3;
  }

  /* Hero entrance animation */
  .sd-hero-inner {
    position: relative;
    z-index: 1;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .sd-hero-inner.hero-visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Eyebrow */
  .sd-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Syne', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #F15A2B;
    margin-bottom: 20px;
  }
  .sd-eyebrow-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #F15A2B;
    box-shadow: 0 0 10px rgba(241,90,43,0.8);
    animation: pulse-dot 2s ease-in-out infinite;
  }
  @keyframes pulse-dot {
    0%, 100% { box-shadow: 0 0 6px rgba(241,90,43,0.8); transform: scale(1); }
    50% { box-shadow: 0 0 14px rgba(241,90,43,1); transform: scale(1.25); }
  }

  /* Hero row */
  .sd-hero-row {
    display: flex;
    align-items: flex-start;
    gap: clamp(18px, 3vw, 40px);
    margin-bottom: 28px;
    flex-wrap: wrap;
  }

  /* Icon */
  .sd-icon-shell {
    position: relative;
    width: clamp(72px, 10vw, 108px);
    height: clamp(72px, 10vw, 108px);
    border-radius: clamp(18px, 2.5vw, 26px);
    background: rgba(255,255,255,0.055);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.14);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    animation: float-icon 4s ease-in-out infinite;
  }
  .sd-icon-glow {
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    background: linear-gradient(135deg, rgba(241,90,43,0.35), rgba(59,127,255,0.2));
    filter: blur(12px);
    z-index: -1;
  }
  .sd-icon-emoji {
    font-size: clamp(2rem, 4vw, 3.2rem);
    line-height: 1;
  }
  @keyframes float-icon {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-7px); }
  }

  .sd-hero-text { flex: 1; min-width: min(100%, 260px); }

  .sd-hero-title {
    font-family: 'Fraunces', serif;
    font-size: clamp(1.85rem, 4.5vw, 4rem);
    font-weight: 800;
    color: #fff;
    line-height: 1.12;
    letter-spacing: -0.025em;
    margin-bottom: 14px;
  }
  .sd-title-accent {
    font-style: italic;
    background: linear-gradient(100deg, #FF9060, #F15A2B, #FF5500);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .sd-hero-sub {
    font-family: 'Figtree', sans-serif;
    color: rgba(255,255,255,0.6);
    font-size: clamp(0.92rem, 1.6vw, 1.12rem);
    line-height: 1.75;
    font-weight: 300;
    max-width: 520px;
  }

  /* Pills */
  .sd-pills-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 24px;
  }
  .sd-pill {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: rgba(255,255,255,0.065);
    border: 1px solid rgba(255,255,255,0.13);
    color: rgba(255,255,255,0.82);
    font-size: clamp(0.7rem, 1.2vw, 0.8rem);
    font-weight: 500;
    padding: 7px 15px;
    border-radius: 100px;
    backdrop-filter: blur(8px);
    letter-spacing: 0.02em;
    opacity: 0;
    animation: pill-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    transition: background 0.22s, border-color 0.22s, transform 0.22s;
  }
  .sd-pill:hover {
    background: rgba(241,90,43,0.18);
    border-color: rgba(241,90,43,0.38);
    transform: translateY(-2px);
  }
  .sd-pill-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: #F15A2B;
    flex-shrink: 0;
  }
  @keyframes pill-in {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .sd-hero-divider {
    margin-top: 52px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    position: relative;
    z-index: 1;
  }

  /* ══ STATS BAND ══ */
  .sd-stats-band {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    background: #fff;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(0,0,0,0.05);
  }
  .sd-stat-item {
    padding: clamp(18px, 3vw, 28px) clamp(12px, 2vw, 24px);
    text-align: center;
    border-right: 1px solid rgba(0,0,0,0.06);
    transition: background 0.25s;
  }
  .sd-stat-item:last-child { border-right: none; }
  .sd-stat-item:hover { background: #FFF6F2; }
  .sd-stat-num {
    font-family: 'Fraunces', serif;
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 800;
    color: #F15A2B;
    line-height: 1;
  }
  .sd-stat-label {
    font-size: clamp(0.68rem, 1vw, 0.78rem);
    color: #94A3B8;
    margin-top: 5px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  /* ══ CONTENT ══ */
  .sd-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: clamp(32px, 5vw, 64px) clamp(16px, 5vw, 48px) clamp(24px, 4vw, 48px);
  }

  .sd-section-header {
    margin-bottom: clamp(28px, 4vw, 48px);
  }
  .sd-section-label {
    font-family: 'Syne', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #F15A2B;
    margin-bottom: 8px;
  }
  .sd-section-title {
    font-family: 'Fraunces', serif;
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    font-weight: 700;
    color: #0D1227;
    letter-spacing: -0.025em;
    margin-bottom: 14px;
  }
  .sd-title-line {
    width: 48px; height: 3px;
    background: linear-gradient(90deg, #F15A2B, #FF9060);
    border-radius: 100px;
  }

  /* ══ GRID ══ */
  .sd-grid {
    display: grid;
    gap: clamp(14px, 2vw, 22px);
    /* sm: 1 col, md: 2 col, lg: 3 col, xl: 4 col */
    grid-template-columns: 1fr;
  }
  @media (min-width: 600px) {
    .sd-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 900px) {
    .sd-grid { grid-template-columns: repeat(3, 1fr); }
  }
  @media (min-width: 1280px) {
    .sd-grid { grid-template-columns: repeat(4, 1fr); }
  }

  /* ══ CARD ══ */
  .sd-card {
    background: #fff;
    border-radius: clamp(14px, 2vw, 22px);
    padding: clamp(20px, 2.5vw, 30px);
    border: 1px solid rgba(0,0,0,0.055);
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    opacity: 0;
    transform: translateY(32px) scale(0.98);
    transition:
      opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.3s ease,
      border-color 0.3s ease;
    position: relative;
    overflow: hidden;
    will-change: transform, opacity;
  }
  .sd-card.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  .sd-card:hover {
    box-shadow: 0 20px 56px rgba(0,0,0,0.11), 0 4px 16px rgba(241,90,43,0.08);
    border-color: rgba(241,90,43,0.22);
    transform: translateY(-6px) scale(1) !important;
  }
  .sd-card-wide { grid-column: 1 / -1; }

  /* Card top bar */
  .sd-card-bar {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #F15A2B, #FF9060, #FFB28A);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    border-radius: 22px 22px 0 0;
  }
  .sd-card:hover .sd-card-bar { transform: scaleX(1); }

  /* Badge */
  .sd-card-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #FFF3EE;
    border: 1px solid #FFD8C5;
    color: #C03A0E;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 4px 11px;
    border-radius: 100px;
    margin-bottom: 14px;
    font-family: 'Syne', sans-serif;
  }

  .sd-card-title {
    font-family: 'Fraunces', serif;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    font-weight: 700;
    color: #0D1227;
    letter-spacing: -0.015em;
    margin-bottom: 10px;
    line-height: 1.35;
  }
  .sd-card-desc {
    color: #64748B;
    font-size: clamp(0.85rem, 1.2vw, 0.93rem);
    line-height: 1.78;
    font-weight: 400;
    margin-bottom: 16px;
  }

  /* Highlight box */
  .sd-highlight {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    background: linear-gradient(135deg, #FFF6F2, #FFF0E6);
    border-left: 3px solid #F15A2B;
    border-radius: 10px;
    padding: 12px 14px;
    font-size: clamp(0.82rem, 1.1vw, 0.9rem);
    color: #9A3010;
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 16px;
  }
  .sd-highlight-icon { font-size: 1rem; flex-shrink: 0; line-height: 1.6; }

  /* Points */
  .sd-points-list { list-style: none; margin-bottom: 12px; }
  .sd-point {
    display: flex;
    gap: 11px;
    align-items: flex-start;
    padding: 9px 0;
    border-bottom: 1px solid #F1F5F9;
  }
  .sd-point:last-child { border-bottom: none; }
  .sd-point-dot {
    width: 22px; height: 22px;
    border-radius: 50%;
    background: linear-gradient(135deg, #F15A2B, #FF9060);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
    box-shadow: 0 3px 10px rgba(241,90,43,0.3);
    transition: transform 0.2s;
  }
  .sd-point:hover .sd-point-dot { transform: scale(1.15); }
  .sd-point-text {
    font-size: clamp(0.83rem, 1.15vw, 0.91rem);
    color: #334155;
    line-height: 1.68;
  }

  /* Images */
  .sd-images-grid {
    display: grid;
    gap: 10px;
    margin-top: 10px;
  }
  .sd-img-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0,0.07);
  }
  .sd-img-wrap img {
    width: 100%;
    height: clamp(80px, 12vw, 130px);
    object-fit: cover;
    display: block;
    transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .sd-img-wrap:hover img { transform: scale(1.07); }

  /* Corner accent */
  .sd-card-corner {
    position: absolute;
    bottom: 14px; right: 14px;
    width: 28px; height: 28px;
    border-right: 2px solid rgba(241,90,43,0.14);
    border-bottom: 2px solid rgba(241,90,43,0.14);
    border-radius: 0 0 7px 0;
    pointer-events: none;
    transition: border-color 0.3s;
  }
  .sd-card:hover .sd-card-corner {
    border-color: rgba(241,90,43,0.35);
  }

  /* ══ BACK BUTTON ══ */
  .sd-back-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #F15A2B, #FF7A4D);
    color: #fff;
    border: none;
    padding: clamp(13px, 2vw, 16px) clamp(24px, 3.5vw, 44px);
    border-radius: 100px;
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: clamp(0.85rem, 1.3vw, 0.96rem);
    cursor: pointer;
    box-shadow: 0 8px 28px rgba(241,90,43,0.38);
    transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.22s;
    letter-spacing: 0.02em;
    position: relative;
    overflow: hidden;
  }
  .sd-back-btn::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0);
    transition: background 0.2s;
    border-radius: 100px;
  }
  .sd-back-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 36px rgba(241,90,43,0.5);
  }
  .sd-back-btn:hover::after { background: rgba(255,255,255,0.08); }
  .sd-back-btn:active { transform: translateY(0); }

  /* ══ FOOTER ══ */
  .sd-footer {
    position: relative;
    overflow: hidden;
    background: linear-gradient(140deg, #080C18 0%, #0F1D35 60%, #091628 100%);
    padding: clamp(48px, 8vw, 96px) clamp(16px, 5vw, 64px);
    text-align: center;
    margin-top: 0;
  }
  .sd-footer-orb {
    position: absolute;
    width: clamp(240px, 40vw, 480px);
    height: clamp(240px, 40vw, 480px);
    background: radial-gradient(circle, rgba(241,90,43,0.3), transparent 70%);
    border-radius: 50%;
    top: -120px;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    filter: blur(70px);
  }
  .sd-footer-tag {
    font-family: 'Syne', sans-serif;
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.38);
    font-weight: 700;
    margin-bottom: 16px;
    position: relative;
  }
  .sd-footer-cta {
    font-family: 'Fraunces', serif;
    font-size: clamp(1.5rem, 4vw, 2.8rem);
    font-weight: 800;
    color: #fff;
    margin-bottom: 32px;
    letter-spacing: -0.025em;
    position: relative;
  }

  /* ══ EXTRA LARGE SCREENS ══ */
  @media (min-width: 1600px) {
    .sd-content { max-width: 1600px; }
    .sd-hero { padding: 130px 80px 100px; }
    .sd-grid { grid-template-columns: repeat(4, 1fr); gap: 26px; }
  }
  @media (min-width: 1920px) {
    .sd-grid { grid-template-columns: repeat(5, 1fr); }
  }

  /* ══ TABLET (md) ══ */
  @media (min-width: 768px) and (max-width: 1023px) {
    .sd-hero-row { flex-wrap: nowrap; }
    .sd-stats-band { grid-template-columns: repeat(4, 1fr); }
  }

  /* ══ MOBILE (sm) ══ */
  @media (max-width: 599px) {
    .sd-hero-row { gap: 16px; }
    .sd-icon-shell { width: 68px; height: 68px; border-radius: 18px; }
    .sd-icon-emoji { font-size: 2rem; }
    .sd-stats-band { grid-template-columns: repeat(2, 1fr); }
    .sd-stat-item { border-right: 1px solid rgba(0,0,0,0.06); }
    .sd-stat-item:nth-child(2n) { border-right: none; }
    .sd-stat-item:nth-child(n+3) { border-top: 1px solid rgba(0,0,0,0.06); }
    .sd-pills-row { gap: 6px; }
    .sd-card { padding: 18px; }
    .sd-footer { padding: 48px 16px 52px; }
  }

  /* Reduce motion */
  @media (prefers-reduced-motion: reduce) {
    .sd-hero-inner, .sd-card, .sd-pill {
      animation: none !important;
      transition: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
    .sd-card.visible { opacity: 1; transform: none; }
    @keyframes float-icon { from { transform: none; } }
    @keyframes pulse-dot { from { box-shadow: 0 0 6px rgba(241,90,43,0.8); } }
  }
`;

export default ServicesDetails;
