import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const contacts = [
  {
    icon: Phone,
    label: "Call Us",
    text: "+91 6398615710",
    href: "tel:+916398615710",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    border: "border-green-100",
  },
  {
    icon: Mail,
    label: "Email Us",
    text: "vinttrixedge@gmail.com",
    href: "mailto:vinttrixedge@gmail.com",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    border: "border-blue-100",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    text: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/vinay-gautam-b0765424a/",
    bg: "bg-sky-50",
    iconColor: "text-sky-700",
    border: "border-sky-100",
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    text: "Available for remote collaboration",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    border: "border-purple-100",
  },
];

export default function ContactPage() {
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

        .contact-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .contact-card:hover {
          transform: translateY(-6px) scale(1.015);
          box-shadow: 0 24px 48px rgba(31,58,99,0.11),
                      0 6px 16px rgba(255,98,71,0.07);
        }

        .info-row {
          transition: transform 0.25s ease;
        }
        .info-row:hover { transform: translateX(8px); }

        .fade-hr {
          background: linear-gradient(90deg, rgba(255,98,71,0.4), transparent);
        }

        .badge-pill {
          background: rgba(255,98,71,0.09);
          color: #FF6247;
          border: 1px solid rgba(255,98,71,0.22);
        }

        .img-card { overflow: hidden; }
        .img-card img { transition: transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .img-card:hover img { transform: scale(1.07); }

        .avatar-float {
          animation: floatY 3s ease-in-out infinite;
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }

        .quote-bar {
          border-left: 4px solid #FF6247;
        }

        .btn-coral {
          background: linear-gradient(135deg, #FF6247, #e04e35);
          box-shadow: 0 8px 24px rgba(255,98,71,0.35);
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease;
        }
        .btn-coral:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(255,98,71,0.45);
        }
      `}</style>

      {/* ── Ambient blobs ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "#FF6247" }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "#1F3A63" }}
        />
      </div>

      {/* ── Main ── */}
      <div className="font-outfit relative z-10  mx-auto px-5 sm:px-8 lg:px-14 py-16 md:py-24 lg:py-28">
        {/* ── HEADER ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-5">
            <span className="badge-pill inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest">
              <span>✦</span> Get In Touch <span>✦</span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-sora font-extrabold tracking-tight leading-none
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ color: "#1F3A63" }}
          >
            Let's <span className="text-coral-grad">Connect</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="flex justify-center mt-5">
            <div
              className="h-1 w-16 rounded-full"
              style={{ background: "linear-gradient(90deg,#FF6247,#1F3A63)" }}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 font-light text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind? We'd love to hear about it. Drop us a
            message and let's create something extraordinary together.
          </motion.p>
        </motion.div>

        {/* ── TWO-COLUMN LAYOUT ── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* ── LEFT: Founder + Quote ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6"
          >
            {/* Founder card */}
            <motion.div
              variants={fadeUp}
              className="contact-card bg-white rounded-3xl p-7 md:p-9 border shadow-sm"
              style={{ borderColor: "rgba(31,58,99,0.09)" }}
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-5 mb-7">
                <div
                  className="avatar-float w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  style={{
                    background: "linear-gradient(135deg,#FF6247,#e04e35)",
                  }}
                >
                  <span className="font-sora font-bold text-white text-xl">
                    VG
                  </span>
                </div>
                <div>
                  <h2
                    className="font-sora font-bold text-2xl md:text-3xl"
                    style={{ color: "#1F3A63" }}
                  >
                    Vinay Gautam
                  </h2>
                  <p className="text-gray-400 text-sm font-light mt-0.5">
                    Founder — Vinttrix Edge
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="fade-hr h-px mb-6" />

              {/* Contact rows */}
              <div className="space-y-4">
                {contacts.map((c, i) => (
                  <div
                    key={i}
                    className={`info-row flex items-center gap-4 p-3 rounded-2xl border ${c.bg} ${c.border}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-sm ${c.iconColor} flex-shrink-0`}
                    >
                      <c.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.external ? "_blank" : undefined}
                          rel={c.external ? "noopener noreferrer" : undefined}
                          className="text-sm md:text-base font-medium truncate block transition-colors duration-200"
                          style={{ color: "#1F3A63" }}
                          onMouseEnter={(e) =>
                            (e.target.style.color = "#FF6247")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.color = "#1F3A63")
                          }
                        >
                          {c.text}
                        </a>
                      ) : (
                        <p
                          className="text-sm md:text-base font-medium"
                          style={{ color: "#1F3A63" }}
                        >
                          {c.text}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              variants={fadeUp}
              className="quote-bar bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-stone-100"
            >
              <p className="text-gray-500 italic text-sm md:text-base leading-relaxed font-light">
                "We're excited to hear about your project. Let's create
                something amazing together!"
              </p>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Image + stat cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.25,
            }}
            className="space-y-6"
          >
            {/* Hero image */}
            <div className="img-card relative rounded-3xl shadow-xl border border-stone-100">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration"
                className="w-full h-64 sm:h-80 object-cover rounded-3xl"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 rounded-3xl flex items-end p-6"
                style={{
                  background:
                    "linear-gradient(to top, rgba(31,58,99,0.88) 0%, transparent 55%)",
                }}
              >
                <motion.p
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="font-sora font-semibold text-white text-lg"
                >
                  Ready to start your project? 🚀
                </motion.p>
              </div>
            </div>

        
          </motion.div>
        </div>
      </div>
    </div>
  );
}
