import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { servicesData } from "../../Data/servicesData";

const fadeInUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.18 },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 56, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const badges = [
  "50+ Projects Delivered",
  "98% Client Retention",
  `${servicesData?.length || 0} Core Services`,
];

export default function ServicePage() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-stone-50 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Outfit:wght@300;400;500;600;700;800&display=swap');

        .font-sora   { font-family: 'Sora', sans-serif; }
        .font-outfit { font-family: 'Outfit', sans-serif; }

        .text-coral-grad {
          background: linear-gradient(135deg, #FF6247 30%, #c73a24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .svc-card {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow  0.4s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.3s ease;
        }
        .svc-card:hover {
          transform: translateY(-10px) scale(1.015);
          box-shadow: 0 32px 64px rgba(31,58,99,0.13),
                      0 8px 20px rgba(255,98,71,0.09);
          border-color: rgba(255,98,71,0.30) !important;
        }

        .icon-box {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .svc-card:hover .icon-box {
          transform: scale(1.12) rotate(-4deg);
          box-shadow: 0 8px 22px rgba(255,98,71,0.22);
        }

        .ghost-num {
          color: rgba(31,58,99,0.055);
          transition: color 0.35s ease;
        }
        .svc-card:hover .ghost-num { color: rgba(255,98,71,0.13); }

        .dot { transition: transform 0.2s ease; }
        .svc-card:hover .dot { transform: scale(1.5); }

        .card-shine {
          background: linear-gradient(135deg,
            rgba(255,98,71,0.04), rgba(31,58,99,0.04));
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .svc-card:hover .card-shine { opacity: 1; }

        .fade-hr {
          background: linear-gradient(90deg,
            rgba(255,98,71,0.35), transparent);
        }

        .btn-coral {
          background: linear-gradient(135deg, #FF6247, #e04e35);
          box-shadow: 0 8px 24px rgba(255,98,71,0.38);
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.3s ease;
        }
        .btn-coral:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 44px rgba(255,98,71,0.48);
        }
        .btn-coral:active { transform: translateY(-1px); }

        .btn-ghost {
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(255,255,255,0.16);
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,0.16);
          border-color: rgba(255,255,255,0.32);
        }

        .label-coral  { color: #FF6247; }
        .label-muted  { color: rgba(31,58,99,0.3); }
      `}</style>

      {/* ── Ambient blobs ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(255,98,71,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(31,58,99,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Page wrapper ── */}
      <div className="relative z-10 font-outfit mx-auto px-5 sm:px-8 lg:px-14 py-16 md:py-24 lg:py-28">
        {/* ────────── HEADER ────────── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center mb-16 md:mb-24"
        >
          {/* Eyebrow pill */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full
                         text-xs font-semibold uppercase tracking-widest border"
              style={{
                background: "rgba(255,98,71,0.09)",
                color: "#FF6247",
                borderColor: "rgba(255,98,71,0.22)",
              }}
            >
              <span>✦</span> Full-Service Digital Partner <span>✦</span>
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeInUp}
            className="font-sora font-extrabold leading-none tracking-tight
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ color: "#1F3A63" }}
          >
            Everything Your Brand
            <br />
            <span className="text-coral-grad">Needs Online</span>
          </motion.h1>

          {/* Accent rule */}
          <motion.div variants={fadeInUp} className="flex justify-center mt-5">
            <div
              className="h-1 w-16 rounded-full"
              style={{
                background: "linear-gradient(90deg, #FF6247, #1F3A63)",
              }}
            />
          </motion.div>

          {/* Sub-copy */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 font-light text-gray-400 text-base sm:text-lg md:text-xl
                       max-w-2xl mx-auto leading-relaxed"
          >
            From stunning websites to high-converting ads — we help ambitious
            businesses dominate the digital landscape.
          </motion.p>

          {/* Stat badges */}
          <motion.div
            variants={fadeInUp}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            {badges.map((b) => (
              <span
                key={b}
                className="px-4 py-2 rounded-xl text-sm font-semibold
                           bg-white shadow-sm border"
                style={{
                  color: "#1F3A63",
                  borderColor: "rgba(255,98,71,0.15)",
                }}
              >
                {b}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ────────── SERVICES GRID ────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.07 }}
          variants={stagger}
        >
          {servicesData.map((svc, i) => (
            <motion.div
              key={svc.id}
              variants={cardAnim}
              className="svc-card relative bg-white rounded-3xl p-7 md:p-8
                         border overflow-hidden cursor-default"
              style={{ borderColor: "rgba(31,58,99,0.09)" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Hover shimmer */}
              <div className="card-shine absolute inset-0 rounded-3xl pointer-events-none" />

              {/* Ghost number */}
              <span
                className="ghost-num font-sora font-extrabold absolute
                           top-4 right-5 text-6xl sm:text-7xl leading-none
                           select-none pointer-events-none"
                style={{ letterSpacing: "-0.02em" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon + Title */}
              <div className="relative z-10 flex items-center gap-4 mb-5">
                <div
                  className="icon-box w-14 h-14 rounded-2xl flex items-center
                             justify-center text-3xl flex-shrink-0 border"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(255,98,71,0.11),rgba(31,58,99,0.06))",
                    borderColor: "rgba(255,98,71,0.16)",
                  }}
                >
                  {svc.icon}
                </div>
                <h3
                  className="font-sora font-bold text-base md:text-lg leading-snug"
                  style={{ color: "#1F3A63", letterSpacing: "-0.01em" }}
                >
                  {svc.id?.toLocaleUpperCase()}
                </h3>
              </div>

              {/* Short line / tagline */}
              <p className="relative z-10 text-sm text-gray-400 font-light mb-4 leading-relaxed">
                {svc.title}
              </p>

              {/* Fade divider */}
              <div className="fade-hr relative z-10 h-px mb-5" />

              {/* Mini Bullets — from miniBullets array */}
              <ul className="relative z-10 space-y-3">
                {svc.miniBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span
                      className="dot mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#FF6247" }}
                    />
                    <span className="text-sm md:text-base text-gray-400 leading-relaxed font-normal">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bottom CTA label */}
              <Link to={`/service/${svc?.id}`} className="relative z-10 mt-6">
                <span
                  className={`text-xs font-bold uppercase tracking-widest
                    ${hovered === i ? "label-coral" : "label-muted"}`}
                >
                  {svc.buttonText} →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ────────── CTA BANNER ────────── */}
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28"
        >
          <div
            className="relative rounded-3xl overflow-hidden px-6 py-14
                       md:py-16 md:px-14 text-center"
            style={{
              background: "linear-gradient(135deg, #1F3A63 0%, #162c4d 100%)",
            }}
          >
            {/* Orbs */}
            <div
              className="pointer-events-none absolute -top-16 -right-16
                         w-64 h-64 rounded-full opacity-20"
              style={{ background: "rgba(255,98,71,0.5)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-20 left-[8%]
                         w-72 h-72 rounded-full opacity-10"
              style={{ background: "rgba(255,98,71,0.6)" }}
            />

            {/* Text + Buttons */}
            <div className="relative z-10">
              <p
                className="font-sora font-bold text-white leading-tight
                           tracking-tight text-2xl sm:text-3xl md:text-4xl mb-3"
              >
                Ready to grow your business digitally?
              </p>
              <p className="text-white/50 text-sm md:text-base mb-8 font-light">
                Let's build something exceptional together.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  className="btn-coral text-white font-bold px-8 py-4
                             rounded-2xl text-base md:text-lg w-full sm:w-auto"
                  onClick={() => navigate("/contact")}
                >
                  Let's Discuss Your Project →
                </button>
                <button
                  className="btn-ghost text-white/80 font-semibold px-8 py-4
                             rounded-2xl text-base md:text-lg w-full sm:w-auto"
                  onClick={() => navigate("/home")}
                >
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
