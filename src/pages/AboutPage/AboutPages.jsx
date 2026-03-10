import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FF6247]/5 rounded-bl-full blur-3xl -z-10 hidden lg:block" />

      <div className="w-full mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 ">
          {/* LEFT - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-8 lg:space-y-10"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-2 bg-[#FF6247]/10 text-[#FF6247] font-medium rounded-full text-sm tracking-wide">
                Since 2025
              </span>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-5xl font-extrabold  leading-tight">
                About <span className="text-blue-950">Vinttrix</span>
                <span className="text-orange-500"> Edge</span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Vinttrix Edge is a passionate digital services studio helping
              businesses of all sizes build, manage, and grow their online
              presence with clean code, creative design, and smart strategy.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              We combine technical expertise with creative storytelling to
              deliver practical, high-impact solutions — from stunning websites
              and powerful e-commerce systems to scroll-stopping social content
              and result-driven advertising.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-4">
              <h3 className="text-2xl font-bold text-[#1F3A63] mb-6">
                What We Deliver
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
                {[
                  "Web & App Development",
                  "Creative Design & Branding",
                  "Social Media Growth",
                  "Product Video & Reels",
                  "E-commerce Management",
                  "Digital Ad Campaigns",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-lg"
                  >
                    <span className="text-[#FF6247] text-2xl">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Founder Card */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#1F3A63] to-[#FF6247] flex items-center justify-center text-white text-2xl font-bold shrink-0">
                  VG
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold text-[#1F3A63] group-hover:text-[#FF6247] transition-colors">
                    Vinay Gautam
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Founder • B.Tech CSE 2025
                  </p>
                </div>
              </div>
              <p className="mt-5 text-gray-700 leading-relaxed">
                A final-year Computer Science engineer turned entrepreneur,
                building practical digital solutions that help real businesses
                grow in the digital world.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT - Visual / Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative lg:mt-10"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="\vinttrix-edge-4.png"
                alt="Team working on digital projects"
                className="w-full h-auto object-cover  brightness-[0.97]"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating accent shape */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 bg-[#FF6247]/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
