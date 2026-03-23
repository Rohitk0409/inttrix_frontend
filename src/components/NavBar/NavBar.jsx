import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const NAVY = "#1F3A63";
const CORAL = "#FF6247";

const navItems = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Services", route: "/services" },
];

const drawerVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] },
  },
};

const itemVariant = {
  closed: { opacity: 0, x: -16 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.28 },
  }),
};

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,600;9..40,700;9..40,800&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .vx { font-family: 'DM Sans', sans-serif; }

        @keyframes slide { 0%{background-position:0%} 100%{background-position:200%} }
        .vx-bar { height: 3px; background: linear-gradient(90deg,${NAVY},${CORAL},${NAVY}); background-size:200% 100%; animation: slide 4s linear infinite; }

        .vx-logo { text-decoration:none; display:flex; align-items:center; gap:10px; flex-shrink:0; }
        .vx-logo-mark { width:34px; height:34px; border-radius:10px; background:linear-gradient(135deg,${NAVY},${CORAL}); display:flex; align-items:center; justify-content:center; box-shadow:0 4px 14px rgba(255,98,71,.35); flex-shrink:0; }
        .vx-logo-text { display:flex; align-items:baseline; gap:2px; }
        .vx-logo-v { font-size:clamp(1rem,3vw,1.22rem); font-weight:800; color:${NAVY}; letter-spacing:-0.02em; line-height:1; }
        .vx-logo-e { font-size:clamp(1rem,3vw,1.22rem); font-weight:800; color:${CORAL}; letter-spacing:-0.02em; line-height:1; }

        .vx-link { text-decoration:none; }
        .vx-link-inner { position:relative; padding:8px 13px; border-radius:10px; cursor:pointer; }
        .vx-link-label { font-size:0.9rem; font-weight:600; color:#4a5568; transition:color .2s; display:block; }
        .vx-link-inner:hover .vx-link-label { color:${NAVY}; }
        .vx-link-label.is-active { color:${CORAL}; }
        .vx-underline { position:absolute; bottom:5px; left:50%; transform:translateX(-50%); width:18px; height:3px; border-radius:99px; background:${CORAL}; }

        .vx-btn { position:relative; overflow:hidden; background:linear-gradient(135deg,${CORAL},#ff7e69); color:#fff; border:none; border-radius:12px; padding:10px 20px; font-size:0.875rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:7px; box-shadow:0 4px 16px rgba(255,98,71,.32); transition:box-shadow .25s,transform .2s; white-space:nowrap; font-family:'DM Sans',sans-serif; }
        .vx-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,#e04432,${CORAL}); opacity:0; transition:opacity .25s; }
        .vx-btn:hover { transform:translateY(-1px); box-shadow:0 8px 28px rgba(255,98,71,.44); }
        .vx-btn:hover::before { opacity:1; }
        .vx-btn:active { transform:translateY(0); }
        .vx-btn > * { position:relative; z-index:1; }

        .vx-ham { background:none; border:none; cursor:pointer; padding:7px; border-radius:9px; display:flex; align-items:center; justify-content:center; color:${NAVY}; transition:background .2s; }
        .vx-ham:hover { background:rgba(31,58,99,.07); }

        .vx-mob-link { display:flex; align-items:center; gap:11px; padding:13px 14px; border-radius:12px; font-size:0.975rem; font-weight:600; color:#4a5568; text-decoration:none; transition:background .18s,color .18s; }
        .vx-mob-link:hover { background:rgba(31,58,99,.06); color:${NAVY}; }
        .vx-mob-link.is-active { background:rgba(255,98,71,.09); color:${CORAL}; }
        .vx-dot { width:6px; height:6px; border-radius:50%; background:${CORAL}; flex-shrink:0; }

        /* Hide/show by breakpoint */
        .show-desktop { display:none !important; }
        .show-mobile  { display:flex !important; }

        /* Tablet: 768px+ */
        @media (min-width: 768px) {
          .show-desktop { display:flex !important; }
          .show-mobile  { display:none !important; }
        }

        /* Tablet nav link size tweak */
        @media (min-width:768px) and (max-width:1023px) {
          .vx-link-label { font-size:0.82rem; }
          .vx-btn { padding:9px 14px; font-size:0.82rem; }
          .vx-link-inner { padding:7px 8px; }
          .vx-logo-v, .vx-logo-e { font-size:1rem; }
        }
      `}</style>

      <header
        className="vx"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          width: "100%",
          background: scrolled ? "rgba(255,255,255,0.93)" : "#fff",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
          boxShadow: scrolled
            ? "0 4px 28px rgba(31,58,99,0.11)"
            : "0 1px 0 rgba(0,0,0,0.07)",
          transition: "box-shadow .3s, background .3s",
        }}
      >
        <div className="vx-bar" />

        <div
          style={{
            // maxWidth: 1200,
            margin: "0 auto",
            padding: "0 clamp(14px, 4vw, 32px)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "clamp(54px, 9vw, 66px)",
            }}
          >
            {/* Logo */}
            <Link to="/" className="vx-logo">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <div className="vx-logo-mark">
                  <Zap size={17} color="#fff" fill="#fff" />
                </div>
                <div className="vx-logo-text">
                  <span className="vx-logo-v">Vinttrix</span>
                  <span className="vx-logo-e">Edge</span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop nav links */}
            <nav
              className="show-desktop"
              style={{ alignItems: "center", gap: 2 }}
            >
              {navItems.map((item) => (
                <NavLink key={item.label} to={item.route} className="vx-link">
                  {({ isActive }) => (
                    <motion.div
                      whileHover={{ y: -1 }}
                      className="vx-link-inner"
                    >
                      <span
                        className={`vx-link-label ${isActive ? "is-active" : ""}`}
                      >
                        {item.label}
                      </span>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            layoutId="underline"
                            className="vx-underline"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            exit={{ scaleX: 0, opacity: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 38,
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="show-desktop" style={{ alignItems: "center" }}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="vx-btn"
                onClick={() => navigate("/contact")}
              >
                <Phone size={15} />
                <span>Contact Us</span>
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={() => setOpen((v) => !v)}
              className="vx-ham show-mobile"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={24} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={24} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="drawer"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{
                overflow: "hidden",
                borderTop: "1px solid rgba(0,0,0,0.06)",
                background: "#fff",
              }}
            >
              <div style={{ padding: "10px 16px 22px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    marginBottom: 14,
                  }}
                >
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      custom={i}
                      variants={itemVariant}
                      initial="closed"
                      animate="open"
                    >
                      <NavLink
                        to={item.route}
                        style={{ textDecoration: "none" }}
                      >
                        {({ isActive }) => (
                          <div
                            className={`vx-mob-link ${isActive ? "is-active" : ""}`}
                          >
                            {isActive && <span className="vx-dot" />}
                            {item.label}
                          </div>
                        )}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                <div
                  style={{
                    height: 1,
                    background: "rgba(0,0,0,0.06)",
                    marginBottom: 14,
                  }}
                />

                <motion.button
                  custom={navItems.length}
                  variants={itemVariant}
                  initial="closed"
                  animate="open"
                  whileTap={{ scale: 0.97 }}
                  className="vx-btn"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    borderRadius: 13,
                    padding: "13px 20px",
                    fontSize: "0.95rem",
                  }}
                  onClick={() => navigate("/contact")}
                >
                  <Phone size={16} />
                  <span>Contact Us</span>
                </motion.button>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.28 }}
                  style={{
                    textAlign: "center",
                    marginTop: 14,
                    fontSize: "0.72rem",
                    color: "#94a3b8",
                    fontWeight: 500,
                  }}
                >
                  Code. Create. Grow. 🚀
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default NavBar;
