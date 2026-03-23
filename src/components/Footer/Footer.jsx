import { motion } from "framer-motion";

const NAVY = "#1F3A63";
const CORAL = "#FF6247";

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        width={18}
        height={18}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.832L.057 23.57a.5.5 0 0 0 .614.614l5.738-1.466A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 0 1-5.025-1.376l-.36-.214-3.733.955.972-3.646-.234-.374A9.833 9.833 0 0 1 2.143 12C2.143 6.55 6.55 2.143 12 2.143S21.857 6.55 21.857 12 17.45 21.857 12 21.857z" />
      </svg>
    ),
  },
];

const footerLinks = {
  Services: [
    "Web Development",
    "Social Media Management",
    "Creative Design",
    "Video Production",
    "Digital Advertising",
    "E-commerce Solutions",
  ],
  Company: ["About Us", "Our Work", "Pricing", "Contact Us"],
  Support: ["WhatsApp Us", "Email Support", "Book a Call", "FAQ"],
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── EmailIcon SVG ── */
function EmailIcon() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

/* ── ZapIcon ── */
function ZapIcon() {
  return (
    <svg width={17} height={17} viewBox="0 0 24 24" fill="#fff" stroke="none">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

/* ── ArrowIcon ── */
function ArrowRight() {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&display=swap');
        .vx-footer * { font-family: 'DM Sans', sans-serif; box-sizing: border-box; }

        /* Newsletter input */
        .vx-input { width:100%; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); border-radius:12px; padding:11px 16px; font-size:0.85rem; color:#fff; outline:none; transition:border .25s,background .25s; font-family:'DM Sans',sans-serif; }
        .vx-input::placeholder { color:rgba(255,255,255,0.3); }
        .vx-input:focus { border-color:rgba(255,98,71,0.5); background:rgba(255,255,255,0.09); }

        /* Subscribe button */
        .vx-sub-btn { flex-shrink:0; background:linear-gradient(135deg,${CORAL},#ff7e69); color:#fff; border:none; border-radius:12px; padding:11px 18px; font-size:0.82rem; font-weight:700; cursor:pointer; transition:transform .2s,box-shadow .2s; font-family:'DM Sans',sans-serif; white-space:nowrap; }
        .vx-sub-btn:hover { transform:translateY(-1px); box-shadow:0 6px 20px rgba(255,98,71,.45); }

        /* Social icons */
        .vx-social { width:36px; height:36px; border-radius:10px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,0.5); text-decoration:none; transition:all .25s; flex-shrink:0; }
        .vx-social:hover { background:${CORAL}; border-color:${CORAL}; color:#fff; transform:translateY(-2px); box-shadow:0 6px 18px rgba(255,98,71,0.42); }

        /* Footer links */
        .vx-flink { color:rgba(255,255,255,0.42); font-size:0.875rem; text-decoration:none; display:flex; align-items:center; gap:0; transition:color .2s, gap .2s; }
        .vx-flink:hover { color:${CORAL}; gap:6px; }
        .vx-flink-arrow { opacity:0; transition:opacity .2s; width:12px; overflow:hidden; }
        .vx-flink:hover .vx-flink-arrow { opacity:1; }

        /* Bottom bar links */
        .vx-blink { color:rgba(255,255,255,0.28); font-size:0.75rem; text-decoration:none; transition:color .2s; }
        .vx-blink:hover { color:rgba(255,255,255,0.65); }

        /* Email pill */
        .vx-email { display:inline-flex; align-items:center; gap:8px; font-size:0.85rem; color:rgba(255,255,255,0.45); text-decoration:none; transition:color .25s; }
        .vx-email:hover { color:${CORAL}; }
        .vx-email-icon { width:30px; height:30px; border-radius:9px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:background .25s,border .25s; }
        .vx-email:hover .vx-email-icon { background:rgba(255,98,71,0.14); border-color:rgba(255,98,71,0.35); }

        /* Grid layout */
        .vx-grid { display:grid; grid-template-columns:1fr; gap:36px; }
        @media(min-width:640px)  { .vx-grid { grid-template-columns:repeat(2,1fr); } }
        @media(min-width:1024px) { .vx-grid { grid-template-columns:2fr 1fr 1fr 1fr; gap:48px; } }

        .vx-bottom { display:flex; flex-direction:column; align-items:center; gap:12px; text-align:center; }
        @media(min-width:640px)  { .vx-bottom { flex-direction:row; justify-content:space-between; text-align:left; } }

        .vx-newsletter-row { display:flex; gap:8px; flex-direction:column; }
        @media(min-width:400px)  { .vx-newsletter-row { flex-direction:row; } }
      `}</style>

      <footer
        className="vx-footer"
        style={{ position: "relative", background: NAVY, overflow: "hidden" }}
      >
        {/* Background orbs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: -80,
              right: -60,
              width: 380,
              height: 380,
              borderRadius: "50%",
              background: `${CORAL}18`,
              filter: "blur(70px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -60,
              left: -80,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: `${CORAL}0e`,
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.035,
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        {/* Top coral accent */}
        <div
          style={{
            height: 3,
            background: `linear-gradient(90deg, transparent, ${CORAL}, transparent)`,
            position: "relative",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(48px,8vw,72px) clamp(16px,4vw,32px) 0",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Main grid */}
          <motion.div
            className="vx-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* ── Brand column ── */}
            <motion.div
              variants={fadeUp}
              custom={0}
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              {/* Logo */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 11,
                    background: `linear-gradient(135deg,${CORAL},#e5543a)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 4px 16px rgba(255,98,71,0.38)`,
                    flexShrink: 0,
                  }}
                >
                  <ZapIcon />
                </div>
                <div>
                  <span
                    style={{
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "1.2rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Vinttrix
                  </span>
                  <span
                    style={{
                      color: CORAL,
                      fontWeight: 800,
                      fontSize: "1.2rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {" "}
                    Edge
                  </span>
                </div>
              </div>

              <p
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  maxWidth: 280,
                }}
              >
                Your full-service digital partner — helping businesses build,
                manage, and grow their online presence with strategy and
                creativity.
              </p>

              {/* Email pill */}
              <a href="mailto:hello@vinttrixedge.com" className="vx-email">
                <div className="vx-email-icon">
                  <EmailIcon />
                </div>
                hello@vinttrixedge.com
              </a>

              {/* Social row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="vx-social"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <div style={{ marginTop: 4 }}>
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  Stay Updated
                </p>
                <div className="vx-newsletter-row">
                  <input
                    className="vx-input"
                    type="email"
                    placeholder="your@email.com"
                  />
                  <button className="vx-sub-btn">Subscribe</button>
                </div>
              </div>
            </motion.div>

            {/* ── Link columns ── */}
            {Object.entries(footerLinks).map(([heading, links], ci) => (
              <motion.div key={heading} variants={fadeUp} custom={ci + 1}>
                <p
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 20,
                  }}
                >
                  {heading}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="vx-flink">
                        <span className="vx-flink-arrow">
                          <ArrowRight />
                        </span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Divider ── */}
          <div
            style={{
              height: 1,
              background: "rgba(255,255,255,0.08)",
              margin: "clamp(32px,5vw,52px) 0 0",
            }}
          />

          {/* ── Bottom bar ── */}
          <div
            className="vx-bottom"
            style={{ padding: "20px 0 clamp(24px,4vw,36px)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.75rem" }}>
              © {new Date().getFullYear()} Vinttrix Edge. All rights reserved.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span
                style={{ color: "rgba(255,255,255,0.24)", fontSize: "0.75rem" }}
              >
                Made with
              </span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ color: CORAL, fontSize: "0.9rem", lineHeight: 1 }}
              >
                ♥
              </motion.span>
              <span
                style={{ color: "rgba(255,255,255,0.24)", fontSize: "0.75rem" }}
              >
                by Vinay Gautam
              </span>
            </div>

            <div style={{ display: "flex", gap: 20 }}>
              {["Privacy Policy", "Terms of Use"].map((t) => (
                <a key={t} href="#" className="vx-blink">
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
