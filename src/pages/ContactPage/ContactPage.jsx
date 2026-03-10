import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF6247] rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1F3A63] rounded-full filter blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto py-16 md:py-24 px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#1F3A63] to-[#FF6247] bg-clip-text text-transparent mb-4"
          >
            Let's Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Have a project in mind? We'd love to hear about it. Drop us a
            message and let's create something extraordinary together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Founder Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20"
            >
              <div className="flex items-center space-x-4 mb-6">
                <motion.div
                  animate={floatingAnimation}
                  className="w-16 h-16 bg-gradient-to-r from-[#1F3A63] to-[#FF6247] rounded-2xl flex items-center justify-center"
                >
                  <span className="text-2xl font-bold text-white">VG</span>
                </motion.div>
                <div>
                  <h2 className="text-3xl font-bold text-[#1F3A63]">
                    Vinay Gautam
                  </h2>
                  <p className="text-lg text-gray-600">
                    Founder — Vinttrix Edge
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    text: "+91 6398615710",
                    href: "tel:+916398615710",
                    color: "text-green-600",
                  },
                  {
                    icon: Mail,
                    text: "vinttrixedge@gmail.com",
                    href: "mailto:vinttrixedge@gmail.com",
                    color: "text-blue-600",
                  },
                  {
                    icon: Linkedin,
                    text: "Connect on LinkedIn",
                    href: "https://www.linkedin.com/in/vinay-gautam-b0765424a/",
                    color: "text-[#0077B5]",
                  },
                  {
                    icon: MapPin,
                    text: "Available for remote collaboration",
                    color: "text-purple-600",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`p-2 rounded-lg bg-gray-100 ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.icon === Linkedin ? "_blank" : undefined}
                        rel={
                          item.icon === Linkedin
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-gray-700 hover:text-[#FF6247] transition-colors duration-300"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-700">{item.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-[#FF6247]" />
                <h3 className="text-xl font-semibold text-[#1F3A63]">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>

            {/* Motivational Message */}
            <motion.p
              variants={itemVariants}
              className="text-gray-600 italic bg-white/50 backdrop-blur-sm p-4 rounded-xl border-l-4 border-[#FF6247]"
            >
              "We're excited to hear about your project. Let's create something
              amazing together!"
            </motion.p>
          </motion.div>

          {/* Contact Form & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Image Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Modern office collaboration"
                className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A63]/90 via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <motion.p
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-lg font-medium"
                  >
                    Ready to start your project?
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20"
            >
              <h3 className="text-2xl font-bold text-[#1F3A63] mb-6">
                Send us a Message
              </h3>

              <div className="space-y-5">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF6247] focus:border-transparent outline-none transition-all duration-300 bg-white/50"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF6247] focus:border-transparent outline-none transition-all duration-300 bg-white/50"
                    placeholder="john@example.com"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF6247] focus:border-transparent outline-none transition-all duration-300 bg-white/50 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#1F3A63] to-[#FF6247] text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {/* Status Message */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center space-x-2 p-3 rounded-lg ${
                      submitStatus === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>
                          Message sent successfully! We'll get back to you soon.
                        </span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5" />
                        <span>Something went wrong. Please try again.</span>
                      </>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
