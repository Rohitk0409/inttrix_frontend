import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.2 },
  },
};

const deliverables = [
  { icon: "💻", label: "Web & App Development" },
  { icon: "🎨", label: "Creative Design & Branding" },
  { icon: "📱", label: "Social Media Growth" },
  { icon: "🎥", label: "Product Video & Reels" },
  { icon: "🛒", label: "E-commerce Management" },
  { icon: "📈", label: "Digital Ad Campaigns" },
];

const values = [
  {
    icon: "🎯",
    title: "Result-Driven",
    desc: "Every decision is tied to measurable outcomes for your business.",
  },
  {
    icon: "💡",
    title: "Creative First",
    desc: "We blend creativity with strategy to make your brand unforgettable.",
  },
  {
    icon: "🤝",
    title: "Client-Centric",
    desc: "Your goals are our goals. We work as an extension of your team.",
  },
];

function AboutPage() {
  const nagivate = useNavigate();
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden font-sans">
      {/* ── HERO BAND ── */}
      <section className="relative overflow-hidden bg-[#1F3A63] py-20 md:py-28 px-5 sm:px-8 lg:px-16 text-center">
        {/* Mesh glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-[#FF6247]/20 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-[#FF6247]/10 blur-3xl" />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF6247]/15 border border-[#FF6247]/30 text-[#ff8570] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6247] shadow-[0_0_6px_#FF6247] animate-pulse" />
              Since 2025
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-5"
          >
            About{" "}
            <span
              className="italic"
              style={{ fontFamily: "Georgia, serif", color: "#FF6247" }}
            >
              Vinttrix
            </span>
            <span className="text-white"> Edge</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-white/60 leading-relaxed max-w-xl mx-auto"
          >
            A passionate digital studio helping businesses build, manage, and
            grow their online presence with clean code, creative design, and
            smart strategy.
          </motion.p>
        </motion.div>

        {/* Wave */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,56 C480,0 960,56 1440,28 L1440,56 Z" fill="#f9fafb" />
        </svg>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="w-full mx-auto px-5 sm:px-8 lg:px-16 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-10"
          >
            {/* Who we are */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-7 bg-[#FF6247] rounded-full" />
                <span className="text-[#FF6247] text-xs font-bold tracking-[2px] uppercase">
                  Who We Are
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F3A63] leading-tight tracking-tight mb-4">
                Your Digital Growth
                <br />
                <span
                  className="italic"
                  style={{ fontFamily: "Georgia, serif", color: "#FF6247" }}
                >
                  Partner & Studio
                </span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                Vinttrix Edge is a passionate digital services studio helping
                businesses of all sizes build, manage, and grow their online
                presence with clean code, creative design, and smart strategy.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                We combine technical expertise with creative storytelling to
                deliver practical, high-impact solutions — from stunning
                websites and powerful e-commerce systems to scroll-stopping
                social content and result-driven advertising.
              </p>
            </motion.div>

            {/* What We Deliver */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold text-[#1F3A63] mb-5">
                What We Deliver
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.08 + 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm hover:border-[#FF6247]/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-600 text-gray-700 group-hover:text-[#1F3A63] transition-colors font-semibold">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Founder Card */}
            <motion.div
              variants={fadeInUp}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              {/* accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6247] to-[#ff9a84] rounded-t-2xl" />

              <div className="flex items-center gap-5 mb-5">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#1F3A63] to-[#FF6247] flex items-center justify-center text-white text-xl font-bold shrink-0 shadow-lg">
                  VG
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-[#1F3A63] group-hover:text-[#FF6247] transition-colors">
                    Vinay Gautam
                  </h4>
                  <p className="text-gray-500 text-sm mt-0.5 font-medium">
                    Founder · B.Tech CSE 2025
                  </p>
                  <div className="flex gap-1.5 mt-2">
                    {["Entrepreneur", "CSE Engineer"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full bg-[#FF6247]/10 text-[#FF6247] border border-[#FF6247]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                A final-year Computer Science engineer turned entrepreneur,
                building practical digital solutions that help real businesses
                grow in the digital world.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {/* Image block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, x: 28 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/vinttrix-edge-4.png"
                  alt="Vinttrix Edge team working on digital projects"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A63]/40 via-transparent to-transparent" />

                {/* Floating stat badge */}
                <div className="absolute bottom-5 left-5 right-5 flex gap-3">
                  {[
                    { n: "50+", l: "Projects" },
                    { n: "30+", l: "Clients" },
                    { n: "100%", l: "Satisfaction" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl py-2.5 text-center border border-white/60 shadow-sm"
                    >
                      <div className="text-lg font-extrabold text-[#FF6247] leading-none">
                        {s.n}
                      </div>
                      <div className="text-[10px] font-semibold text-gray-500 mt-0.5 uppercase tracking-wide">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Glow decoration */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[#FF6247]/15 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-[#1F3A63]/10 rounded-full blur-2xl -z-10" />
            </motion.div>

            {/* Values cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="space-y-4"
            >
              <motion.div variants={fadeInUp}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-0.5 w-7 bg-[#FF6247] rounded-full" />
                  <span className="text-[#FF6247] text-xs font-bold tracking-[2px] uppercase">
                    Our Values
                  </span>
                </div>
              </motion.div>

              {values.map((v, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-[#FF6247]/25 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FF6247]/10 border border-[#FF6247]/20 flex items-center justify-center text-xl shrink-0 group-hover:bg-[#FF6247]/20 transition-colors">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F3A63] mb-1 group-hover:text-[#FF6247] transition-colors">
                      {v.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA STRIP ── */}
      <section className="px-5 sm:px-8 lg:px-16 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto bg-[#1F3A63] rounded-3xl overflow-hidden px-8 md:px-16 py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-0 w-72 h-72 bg-[#FF6247]/20 blur-3xl rounded-full" />
            <div className="absolute left-0 bottom-0 w-48 h-48 bg-[#FF6247]/10 blur-3xl rounded-full" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
              Let's Build Something{" "}
              <span
                className="italic"
                style={{ fontFamily: "Georgia, serif", color: "#FF6247" }}
              >
                Great Together
              </span>
            </h2>
            <p className="text-white/55 text-sm md:text-base mt-2 max-w-md">
              Ready to grow your business online? Let's talk about your project.
            </p>
          </div>

          <div className="relative z-10 flex gap-3 flex-wrap justify-center">
            <button
              className="bg-[#FF6247] hover:bg-[#e5543a] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(255,98,71,0.4)]"
              onClick={() => {
                nagivate("/contact");
              }}
            >
              Start a Project →
            </button>
            <button
              className="bg-white/10 hover:bg-white/18 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-300 hover:-translate-y-1"
              onClick={() => {
                nagivate("/services");
              }}
            >
              View Services
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default AboutPage;
