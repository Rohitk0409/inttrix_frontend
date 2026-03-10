import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

function ServicePage() {
  const serviceCategories = [
    {
      icon: "🌐",
      title: "Web Development & Software Solutions",
      items: [
        "Business Website Design",
        "Web Applications & Custom Software",
        "Landing Page Development",
        "Domain, Hosting & Website Maintenance",
      ],
    },
    {
      icon: "📱",
      title: "Social Media Management",
      items: [
        "Page Setup & Ongoing Management",
        "Content Planning & Calendar",
        "Social Media Posts, Reels & Video Editing",
        "Brand Content Creation",
      ],
    },
    {
      icon: "🎨",
      title: "Creative Design",
      items: [
        "Social Media Posters & Promotional Creatives",
        "Corporate & Event Designs",
        "HR & Business Materials (Letterheads, etc.)",
      ],
    },
    {
      icon: "🎥",
      title: "Product Advertisement & Short Ads",
      items: [
        "Short Product Advertisement Videos",
        "Promotional Reels for Products",
        "Motion Graphics & Product Text Animations",
        "Social Media Product Ads & Showcase Videos",
      ],
    },
    {
      icon: "📈",
      title: "Digital Advertising",
      items: [
        "Campaign Setup & Audience Targeting",
        "Ad Creative Design",
        "Campaign Monitoring, Optimization & Reporting",
      ],
    },
    {
      icon: "🛒",
      title: "E-commerce Onboarding & Management",
      items: [
        "Seller Account & Marketplace Onboarding",
        "Product Listing, Catalog & Image Design",
        "Product SEO, Title/Keyword Optimization",
        "Sponsored Ads & Ongoing Catalog Management",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6247]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1F3A63]/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/3" />
      </div>

      <div className="relative  mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-5 py-2 bg-[#FF6247]/10 text-[#FF6247] font-semibold rounded-full text-sm md:text-base tracking-wide uppercase mb-4"
          >
            Full-Service Digital Partner
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1F3A63] leading-tight"
          >
            Comprehensive Digital Services
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          >
            From beautiful websites to high-converting ads and growing social
            presence — we help businesses thrive online.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {serviceCategories.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-7 md:p-9 shadow-sm hover:shadow-2xl hover:border-[#FF6247]/30 hover:-translate-y-2 transition-all duration-400 ease-out"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl md:text-5xl opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1F3A63] group-hover:text-[#FF6247] transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              {/* List */}
              <ul className="space-y-3.5 text-gray-700 text-base md:text-lg">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#FF6247] text-xl md:text-2xl font-bold shrink-0 mt-0.5">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Subtle gradient hover overlay */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#FF6247]/0 to-[#1F3A63]/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-24"
        >
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Ready to grow your business digitally?
          </p>
          <button className="bg-[#FF6247] hover:bg-[#e54e38] text-white px-10 py-5 rounded-xl font-semibold text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Let's Discuss Your Project →
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default ServicePage;
