// ─── SEO OPTIMIZATION NOTES ───────────────────────────────────────────────
// Add this at the top of your App.jsx or index.jsx:
//   import { HelmetProvider } from 'react-helmet-async';
//   Wrap your <App /> with <HelmetProvider>
//
// Install: npm install react-helmet-async
// ──────────────────────────────────────────────────────────────────────────

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Code,
  Palette,
  Play,
  Rocket,
  Settings,
  Shield,
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

/* ─── Design Tokens ─── */
const C = {
  navy: "#1F3A63",
  coral: "#FF6247",
  navyLight: "#2a4d82",
  coralLight: "#ff7f6a",
  coralDim: "rgba(255,98,71,0.12)",
  navyDim: "rgba(31,58,99,0.08)",
};

/* ─── Reusable Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

/* ─── Sub-components ─── */
function GlowOrb({
  top,
  left,
  right,
  bottom,
  size = 320,
  color = C.coral,
  opacity = 0.18,
  blur = 90,
  animate = true,
}) {
  const style = {
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",
    background: color,
    opacity,
    filter: `blur(${blur}px)`,
    top,
    left,
    right,
    bottom,
    pointerEvents: "none",
  };
  if (!animate) return <div style={style} />;
  return (
    <motion.div
      style={style}
      animate={{
        scale: [1, 1.18, 1],
        opacity: [opacity, opacity * 0.7, opacity],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function SectionLabel({ children }) {
  return (
    <motion.div
      variants={fadeUp}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: C.coralDim,
        border: `1px solid rgba(255,98,71,0.25)`,
        borderRadius: 999,
        padding: "6px 18px",
        marginBottom: 20,
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: C.coral,
          display: "inline-block",
        }}
      />
      <span
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: C.coral,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontFamily: "inherit",
        }}
      >
        {children}
      </span>
    </motion.div>
  );
}

/* ─── Trust Badges ─── */
// NEW: Small inline trust signals placed under hero subheading
function TrustBadges() {
  const items = [
    "Trusted by 30+ Clients",
    "Based in Noida, Delhi NCR",
    "5-Star Rated Agency",
  ];
  return (
    <motion.div
      variants={fadeUp}
      custom={2.5}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        marginBottom: 32,
      }}
    >
      {items.map((item, i) => (
        <span
          key={i}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 999,
            padding: "5px 14px",
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.8)",
            fontWeight: 500,
          }}
        >
          <CheckCircle size={12} color={C.coral} />
          {item}
        </span>
      ))}
    </motion.div>
  );
}

/* ─── Main Component ─── */
function HomePage() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  // ── SEO-OPTIMISED SERVICE DESCRIPTIONS ──
  // Each description now includes a benefit-first statement + keyword phrase
  const services = [
    {
      icon: Code,
      title: "Web Development",
      // SEO: keywords — custom web development Noida, React website India
      desc: "Custom websites and web applications built with React, Next.js, and modern frameworks. Get a fast, SEO-ready digital platform that converts visitors into customers.",
      accent: "#3B82F6",
    },
    {
      icon: Palette,
      title: "Creative Design",
      // SEO: UI/UX design agency Delhi NCR, brand identity design
      desc: "UI/UX design and brand identity that sets you apart. We craft visuals aligned with your brand story — from logo to full design systems.",
      accent: "#A855F7",
    },
    {
      icon: TrendingUp,
      title: "Digital Advertising",
      // SEO: Google Ads, Meta Ads, performance marketing India
      desc: "Data-driven Google Ads, Meta Ads, and performance marketing campaigns designed to maximise ROI and lower your cost per acquisition.",
      accent: "#10B981",
    },
    {
      icon: Users,
      title: "Social Media Management",
      // SEO: social media marketing agency Noida
      desc: "Full-service social media management — content creation, community building, and growth strategies that turn followers into loyal brand advocates.",
      accent: "#F59E0B",
    },
    {
      icon: Video,
      title: "Video & Reels Production",
      // SEO: video marketing, Instagram Reels production India
      desc: "Short-form video content and Instagram Reels that stop the scroll. Our creative team produces thumb-stopping content that boosts organic reach.",
      accent: "#EC4899",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      // SEO: Shopify, WooCommerce development India
      desc: "End-to-end e-commerce store setup, management, and optimisation on Shopify, WooCommerce, and custom platforms — built to scale your online sales.",
      accent: "#6366F1",
    },
    {
      icon: Settings,
      title: "Automation & CRM",
      // SEO: CRM automation, WhatsApp business automation, sales pipeline India
      desc: "Custom CRM setups, WhatsApp Business automation, and sales pipeline management that reduce manual work and help your team close more deals, faster.",
      accent: "#14B8A6",
    },
  ];

  const steps = [
    {
      n: "01",
      label: "Discovery",
      desc: "We start by understanding your business goals, target audience, and competitive landscape in depth.",
      icon: Star,
    },
    {
      n: "02",
      label: "Strategy",
      desc: "We craft a tailored digital roadmap — aligning technology, design, and marketing to your growth objectives.",
      icon: Rocket,
    },
    {
      n: "03",
      label: "Execution",
      desc: "Our expert team builds, launches, and iterates with precision and creativity — on time, every time.",
      icon: Zap,
    },
    {
      n: "04",
      label: "Growth",
      desc: "Post-launch, we continuously track, optimise, and scale your digital presence for lasting business results.",
      icon: Shield,
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Happy Clients" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <>
      {/*
       * ─── REACT HELMET — SEO META TAGS ──────────────────────────────────────
       * Requires: npm install react-helmet-async
       * Wrap your root App with <HelmetProvider> from react-helmet-async
       *
       * Title formula: Primary Keyword | Brand Name | Location
       * Meta description: 150–160 chars, includes CTA + location + keywords
       * ────────────────────────────────────────────────────────────────────────
       */}
      <Helmet>
        <title>
          Web Development & CRM Automation Company in Noida | Vinttrix Edge
        </title>
        <meta
          name="description"
          content="Vinttrix Edge is a leading web development & CRM automation company in Noida, Delhi NCR. We build custom websites, run digital ads, and automate your sales pipeline. Trusted by 30+ clients across India. Get a free consultation today."
        />
        {/* Open Graph — for WhatsApp/LinkedIn/Facebook link previews */}
        <meta
          property="og:title"
          content="Web Development & CRM Automation Company in Noida | Vinttrix Edge"
        />
        <meta
          property="og:description"
          content="Custom web development, digital marketing, and sales automation for growing businesses in Noida and Delhi NCR. Trusted by 30+ clients."
        />
        <meta property="og:image" content="/Vinttrix-Edge-3.png" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Development & CRM Automation | Vinttrix Edge, Noida"
        />
        <meta
          name="twitter:description"
          content="Vinttrix Edge builds websites, runs digital campaigns, and automates your business. Based in Noida, serving clients across India."
        />
        {/* Canonical */}
        <link rel="canonical" href="https://vinttrix-edge.vercel.app/" />
        {/* Keyword hint for older crawlers */}
        <meta
          name="keywords"
          content="web development company Noida, CRM automation India, digital marketing agency Delhi NCR, custom website development, WhatsApp automation, React development India, Vinttrix Edge"
        />
      </Helmet>

      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "#f8f9fc",
          fontFamily: "'Clash Display', 'DM Sans', 'Segoe UI', sans-serif",
          overflowX: "hidden",
        }}
      >
        {/* ── HERO ── */}
        <motion.section
          ref={heroRef}
          // Semantic landmark — important for accessibility + SEO
          aria-label="Hero — Vinttrix Edge Web Development & CRM Automation Company"
          style={{
            y: heroY,
            opacity: heroOpacity,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Hero background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(135deg, ${C.navy} 0%, #162d52 55%, #1a1a2e 100%)`,
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
              backgroundSize: "40px 40px",
              zIndex: 1,
            }}
          />
          <GlowOrb
            top={-60}
            right={-60}
            size={440}
            color={C.coral}
            opacity={0.22}
          />
          <GlowOrb
            bottom={-80}
            left={-80}
            size={380}
            color="#3B82F6"
            opacity={0.15}
          />

          <div
            style={{
              margin: "0 auto",
              padding: "80px 24px 100px",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 64,
                alignItems: "center",
              }}
            >
              {/* Left */}
              <motion.div variants={stagger} initial="hidden" animate="visible">
                {/* ── SECTION LABEL — brand + location ── */}
                <motion.div variants={fadeUp} custom={0}>
                  <SectionLabel>Vinttrix Edge · Noida, Delhi NCR</SectionLabel>
                </motion.div>

                {/*
                 * ── H1 — PRIMARY SEO HEADING ──────────────────────────────────
                 * Rule: ONE <h1> per page.
                 * Contains main keyword: "Web Development & CRM Automation Company"
                 * Brand name + location reinforced visually below.
                 * ──────────────────────────────────────────────────────────────
                 */}
                <motion.h1
                  variants={fadeUp}
                  custom={1}
                  style={{
                    fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: "#fff",
                    margin: "0 0 20px",
                  }}
                >
                  {/* Visible conversion copy — keyword embedded naturally */}
                  Web Development
                  <br />
                  &amp; <span style={{ color: C.coral }}>CRM Automation</span>
                  <br />
                  Company 🚀
                </motion.h1>

                {/*
                 * ── HERO SUBHEADING — benefit-first, keyword-rich ──
                 * Includes: brand name, location, core services, CTA signal
                 * ~50 words — scannable and persuasive
                 */}
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  style={{
                    fontSize: "1.1rem",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.8,
                    maxWidth: 500,
                    marginBottom: 20,
                  }}
                >
                  <strong style={{ color: "rgba(255,255,255,0.9)" }}>
                    Vinttrix Edge
                  </strong>{" "}
                  helps businesses in Noida, Delhi NCR, and across India grow
                  faster with custom websites, data-driven digital marketing,
                  and intelligent CRM automation — all under one roof.
                </motion.p>

                {/* ── TRUST BADGES ── NEW: social proof inline */}
                <TrustBadges />

                <motion.div
                  variants={fadeUp}
                  custom={3}
                  style={{
                    display: "flex",
                    gap: 16,
                    flexWrap: "wrap",
                    marginBottom: 52,
                  }}
                >
                  {/*
                   * CTA #1 — Primary: action-oriented, benefit-led
                   * "Free Consultation" outperforms generic "Get Started"
                   */}
                  <motion.button
                    whileHover={{
                      scale: 1.04,
                      boxShadow: `0 12px 40px ${C.coral}55`,
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate("/contact")}
                    aria-label="Get a free consultation from Vinttrix Edge"
                    style={{
                      background: `linear-gradient(135deg, ${C.coral}, ${C.coralLight})`,
                      color: "#fff",
                      border: "none",
                      borderRadius: 14,
                      padding: "15px 32px",
                      fontSize: "1rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      boxShadow: `0 4px 20px ${C.coral}44`,
                    }}
                  >
                    Get Free Consultation <ArrowRight size={18} />
                  </motion.button>

                  {/* CTA #2 — Secondary: explore intent */}
                  <motion.button
                    whileHover={{
                      scale: 1.04,
                      background: "rgba(255,255,255,0.12)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate("/services")}
                    aria-label="View all services offered by Vinttrix Edge"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: 14,
                      padding: "15px 32px",
                      fontSize: "1rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <Play size={16} /> Explore Services
                  </motion.button>
                </motion.div>

                {/* Stats row */}
                <motion.div
                  variants={stagger}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 4,
                  }}
                >
                  {stats.map((s, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      custom={i * 0.1}
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: 14,
                        padding: "16px 8px",
                        textAlign: "center",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.6rem",
                          fontWeight: 800,
                          color: C.coral,
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: "rgba(255,255,255,0.55)",
                          marginTop: 2,
                          fontWeight: 500,
                        }}
                      >
                        {s.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right – Hero image card */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ position: "relative" }}
              >
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ position: "relative", zIndex: 2 }}
                >
                  <div
                    style={{
                      position: "relative",
                      borderRadius: 28,
                      overflow: "hidden",
                      boxShadow: `0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)`,
                    }}
                  >
                    {/*
                     * ── ALT TEXT — SEO OPTIMISED ────────────────────────────
                     * Formula: [what's shown] + [brand] + [location/keyword]
                     * Avoid: "image", "photo of", "picture of"
                     * ────────────────────────────────────────────────────────
                     */}
                    <img
                      src="/Vinttrix-Edge-3.png"
                      alt="Vinttrix Edge team delivering web development and digital marketing solutions in Noida, Delhi NCR"
                      style={{
                        width: "100%",
                        display: "block",
                        aspectRatio: "4/3",
                        objectFit: "cover",
                      }}
                    />
                    {/* Overlay shimmer */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, transparent 60%, rgba(31,58,99,0.6) 100%)",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  style={{
                    position: "absolute",
                    bottom: -20,
                    left: -20,
                    background: "#fff",
                    borderRadius: 16,
                    padding: "12px 20px",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    zIndex: 4,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: `linear-gradient(135deg, ${C.navy}, ${C.coral})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Star size={18} color="#fff" fill="#fff" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 800,
                        color: C.navy,
                      }}
                    >
                      98% Client Satisfaction
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "#888" }}>
                      Verified by 30+ clients across India
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ── SERVICES ── */}
        <section
          aria-label="Our Services — Web Development, Digital Marketing, CRM Automation"
          style={{
            padding: "100px 24px",
            background: "#fff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "70%",
              height: 1,
              background: `linear-gradient(90deg, transparent, ${C.coral}44, transparent)`,
            }}
          />
          <GlowOrb
            top={-100}
            right={100}
            size={350}
            color={C.navy}
            opacity={0.04}
            animate={false}
          />

          <div style={{ margin: "0 auto" }}>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{ textAlign: "center", marginBottom: 64 }}
            >
              <SectionLabel>What We Do</SectionLabel>
              {/*
               * H2 — secondary keyword heading
               * "Digital Agency Noida" + service categories for long-tail SEO
               */}
              <motion.h2
                variants={fadeUp}
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: C.navy,
                  margin: "0 0 16px",
                }}
              >
                Full-Service Digital Agency{" "}
                <span style={{ color: C.coral }}>in Noida</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: "1.1rem",
                  color: "#64748b",
                  maxWidth: 560,
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                From custom web development and performance marketing to
                WhatsApp automation and CRM — we provide end-to-end digital
                solutions that drive measurable business growth for companies
                across Delhi NCR and India.
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 24,
              }}
            >
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{
                    y: -8,
                    boxShadow: `0 24px 60px rgba(31,58,99,0.12)`,
                  }}
                  style={{
                    background: "#fafafa",
                    borderRadius: 24,
                    padding: "36px 32px",
                    border: "1px solid #f0f0f0",
                    cursor: "pointer",
                    transition: "box-shadow 0.3s",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: 120,
                      height: 120,
                      borderRadius: "0 24px 0 100%",
                      background: `${s.accent}0d`,
                    }}
                  />
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: `linear-gradient(135deg, ${C.navy}, ${C.navyLight})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 22,
                    }}
                  >
                    <s.icon size={24} color="#fff" />
                  </div>
                  {/* H3 for service cards — good for crawlability */}
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: C.navy,
                      marginBottom: 10,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#64748b",
                      lineHeight: 1.7,
                      marginBottom: 20,
                    }}
                  >
                    {s.desc}
                  </p>
                  {/*
                   * Internal link — anchor tags crawled by Google.
                   * Using <button> here is fine but consider converting
                   * the card to an <a href="/services#service-name"> for
                   * maximum crawlability on key service pages.
                   */}
                  <button
                    onClick={() => navigate("/services")}
                    aria-label={`Learn more about ${s.title} at Vinttrix Edge`}
                    style={{
                      background: "none",
                      border: "none",
                      color: C.coral,
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: 0,
                    }}
                  >
                    Learn More <ChevronRight size={15} />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── APPROACH ── */}
        <section
          aria-label="Our Approach — How Vinttrix Edge Delivers Results"
          style={{
            padding: "100px 24px",
            background: `linear-gradient(135deg, #f0f4ff 0%, #fff5f3 100%)`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <GlowOrb
            top="50%"
            left="50%"
            size={600}
            color={C.coral}
            opacity={0.05}
            blur={120}
            animate={false}
          />

          <div
            style={{
              margin: "0 auto",
              position: "relative",
              zIndex: 2,
            }}
          >
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{ textAlign: "center", marginBottom: 64 }}
            >
              <SectionLabel>How We Work</SectionLabel>
              <motion.h2
                variants={fadeUp}
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: C.navy,
                  margin: "0 0 16px",
                }}
              >
                Our Proven 4-Step Process
              </motion.h2>
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: "1.1rem",
                  color: "#64748b",
                  maxWidth: 500,
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                A structured, transparent methodology that eliminates guesswork
                and consistently delivers results for every client — from
                startups to established brands.
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 24,
              }}
            >
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -10 }}
                  style={{
                    background: "#fff",
                    borderRadius: 24,
                    padding: "36px 28px",
                    boxShadow: "0 4px 24px rgba(31,58,99,0.07)",
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(255,98,71,0.08)",
                  }}
                >
                  {/* Step number watermark */}
                  <div
                    style={{
                      position: "absolute",
                      top: -10,
                      right: 12,
                      fontSize: "5rem",
                      fontWeight: 900,
                      color: `${C.coral}0f`,
                      lineHeight: 1,
                      pointerEvents: "none",
                    }}
                  >
                    {step.n}
                  </div>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: `linear-gradient(135deg, ${C.coral}, ${C.coralLight})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <step.icon size={24} color="#fff" />
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 800,
                      color: C.coral,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {step.n}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: C.navy,
                      marginBottom: 10,
                    }}
                  >
                    {step.label}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#64748b",
                      lineHeight: 1.7,
                    }}
                  >
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section
          aria-label="Call to Action — Start your project with Vinttrix Edge"
          style={{ padding: "80px 24px" }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                background: `linear-gradient(135deg, ${C.navy} 0%, #162d52 50%, #0f1e3a 100%)`,
                borderRadius: 32,
                padding: "clamp(40px, 8vw, 72px)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                boxShadow: `0 40px 80px ${C.navy}44`,
              }}
            >
              <GlowOrb
                top={-60}
                right={-60}
                size={300}
                color={C.coral}
                opacity={0.3}
              />
              <GlowOrb
                bottom={-60}
                left={-60}
                size={280}
                color="#3B82F6"
                opacity={0.2}
              />

              <div style={{ position: "relative", zIndex: 2 }}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(255,98,71,0.2)",
                    border: "1px solid rgba(255,98,71,0.3)",
                    borderRadius: 999,
                    padding: "6px 18px",
                    marginBottom: 24,
                  }}
                >
                  <Rocket size={14} color={C.coral} />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: C.coral,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Free Consultation Available
                  </span>
                </motion.div>

                <h2
                  style={{
                    fontSize: "clamp(1.8rem, 4vw, 3rem)",
                    fontWeight: 800,
                    color: "#fff",
                    margin: "0 0 16px",
                    lineHeight: 1.2,
                  }}
                >
                  Ready to Grow Your{" "}
                  <span style={{ color: C.coral }}>Business Online?</span>
                </h2>
                {/* Benefit-focused, keyword-aware CTA subtext */}
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "rgba(255,255,255,0.65)",
                    marginBottom: 40,
                    maxWidth: 520,
                    margin: "0 auto 40px",
                    lineHeight: 1.7,
                  }}
                >
                  Join 30+ businesses in Noida and Delhi NCR that trust Vinttrix
                  Edge to build their digital presence, automate their sales,
                  and deliver real, measurable growth.
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Primary CTA — high-intent, specific */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 16px 40px ${C.coral}55`,
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate("/contact")}
                    aria-label="Book a free consultation with Vinttrix Edge"
                    style={{
                      background: `linear-gradient(135deg, ${C.coral}, ${C.coralLight})`,
                      color: "#fff",
                      border: "none",
                      borderRadius: 14,
                      padding: "16px 36px",
                      fontSize: "1rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      boxShadow: `0 4px 20px ${C.coral}44`,
                    }}
                  >
                    Book Free Consultation <Rocket size={17} />
                  </motion.button>

                  {/* Secondary CTA */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      background: "rgba(255,255,255,0.12)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate("/services")}
                    aria-label="View all services offered by Vinttrix Edge"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: 14,
                      padding: "16px 36px",
                      fontSize: "1rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    View All Services
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Responsive overrides via inline style tag */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: 'DM Sans', sans-serif; }

          @media (max-width: 640px) {
            section { padding-left: 16px !important; padding-right: 16px !important; }
          }
        `}</style>
      </div>
    </>
  );
}

export default HomePage;
