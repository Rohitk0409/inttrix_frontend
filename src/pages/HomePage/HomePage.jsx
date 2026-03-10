import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronRight,
  Code,
  Palette,
  Rocket,
  Shield,
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const services = [
    {
      icon: Code,
      title: "Web Development & Software",
      description:
        "Custom websites and applications built with cutting-edge technology for optimal performance.",
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description:
        "Stunning visuals that capture your brand's essence and leave lasting impressions.",
      color: "from-purple-600 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Digital Advertising",
      description:
        "Data-driven campaigns that maximize ROI and target the right audience effectively.",
      color: "from-green-600 to-emerald-500",
    },
    {
      icon: Users,
      title: "Social Media Management",
      description:
        "Engaging content and strategies to build a loyal community around your brand.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Video,
      title: "Product Advertisement & Reels",
      description:
        "Creative video content that tells your story and drives engagement.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Management",
      description:
        "End-to-end online store management for maximum sales and customer satisfaction.",
      color: "from-indigo-600 to-blue-500",
    },
  ];

  const approachSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understanding your vision, goals, and requirements in depth",
      icon: Star,
    },
    {
      number: "02",
      title: "Strategy",
      description: "Crafting the perfect digital solution roadmap",
      icon: Rocket,
    },
    {
      number: "03",
      title: "Execution",
      description: "Bringing ideas to life with precision and creativity",
      icon: Zap,
    },
    {
      number: "04",
      title: "Growth",
      description: "Continuous support and optimization for success",
      icon: Shield,
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Completed", icon: Rocket },
    { value: "30+", label: "Happy Clients", icon: Users },
    { value: "98%", label: "Client Satisfaction", icon: Star },
    { value: "24/7", label: "Support Available", icon: Zap },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#FF6247]/20 to-[#1F3A63]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#1F3A63]/20 to-[#FF6247]/20 rounded-full blur-3xl"
        />
      </div>

      {/* HERO SECTION */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative bg-gradient-to-br from-[#1F3A63]/5 via-white to-[#FF6247]/5 py-20 md:py-28 lg:py-20 overflow-hidden"
      >
        <div className="w-full mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#FF6247]/10 to-[#1F3A63]/10 rounded-full mb-6"
              >
                <span className="text-sm font-semibold text-[#1F3A63]">
                  🚀 Welcome to the Future
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-[#1F3A63] to-[#FF6247] bg-clip-text text-transparent">
                  Vinttrix Edge
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-4 text-2xl md:text-3xl font-medium text-gray-700"
              >
                Code. Create. Grow. 🚀
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed"
              >
                Transform your digital presence with cutting-edge solutions that
                drive real business growth. We blend creativity with technology
                to build extraordinary experiences.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="mt-10 flex flex-col sm:flex-row gap-5"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-[#FF6247] to-[#ff7f6a] text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#e54e38] to-[#ff6247]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative border-2 border-[#1F3A63] text-[#1F3A63] hover:text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Our Services</span>
                  <motion.div
                    className="absolute inset-0 bg-[#1F3A63]"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-[#1F3A63]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Digital solutions illustration"
                  className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] lg:aspect-auto border-8 border-white/50 backdrop-blur-sm"
                />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#FF6247] to-[#1F3A63] rounded-full opacity-20 blur-xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-[#1F3A63] to-[#FF6247] rounded-full opacity-20 blur-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* SERVICES SECTION */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A63] mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to elevate your brand and
              drive measurable results
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#1F3A63] to-[#FF6247] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-semibold text-[#1F3A63] mb-4 group-hover:text-[#FF6247] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 mt-6 text-[#FF6247] font-semibold group-hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#1F3A63]/5 to-[#FF6247]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A63] mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic methodology that ensures exceptional results every
              time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {approachSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < approachSteps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                    className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#FF6247] to-[#1F3A63]"
                  />
                )}

                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#1F3A63] to-[#FF6247] rounded-2xl flex items-center justify-center mb-6"
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="text-4xl font-bold text-[#FF6247] mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1F3A63] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#FF6247]/5 to-[#1F3A63]/5 rounded-full blur-3xl"
        />
      </section>

      {/* CTA SECTION */}
      {/* <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#1F3A63] to-[#FF6247] rounded-3xl p-12 md:p-16 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Let's collaborate and create something extraordinary together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#1F3A63] px-12 py-5 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <span className="flex items-center justify-center gap-2">
                Start Your Project
                <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}

export default HomePage;
