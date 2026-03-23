import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingButtons = ({
  phoneNumber = "916398615710",
  message = "Hello, I want to know more about your services",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const callUrl = `tel:${phoneNumber}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0, x: 50 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
        <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-50"></span>
        <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:shadow-green-500/50">
          <svg
            viewBox="0 0 32 32"
            fill="white"
            className="w-8 h-8 md:w-9 md:h-9"
          >
            <path d="M16.003 3C9.383 3 4 8.383 4 15.003c0 2.646.868 5.09 2.332 7.07L4 29l7.15-2.293a11.94 11.94 0 0 0 4.853 1.05c6.62 0 12.003-5.383 12.003-12.003C28.006 8.383 22.623 3 16.003 3zm0 21.805a9.78 9.78 0 0 1-4.978-1.36l-.356-.21-4.24 1.36 1.38-4.14-.232-.378a9.77 9.77 0 0 1-1.5-5.074c0-5.41 4.4-9.81 9.81-9.81 5.41 0 9.81 4.4 9.81 9.81 0 5.41-4.4 9.81-9.81 9.81zm5.387-7.363c-.295-.148-1.744-.86-2.014-.958-.27-.098-.466-.148-.662.148-.197.295-.76.958-.932 1.154-.172.197-.344.221-.64.074-.295-.148-1.245-.458-2.372-1.46-.877-.782-1.47-1.748-1.643-2.043-.172-.295-.018-.455.13-.603.133-.133.295-.344.442-.516.148-.172.197-.295.295-.492.098-.197.049-.369-.025-.517-.074-.148-.662-1.6-.907-2.194-.239-.574-.482-.496-.662-.506-.172-.01-.369-.012-.566-.012s-.517.074-.788.369c-.27.295-1.034 1.01-1.034 2.462 0 1.452 1.06 2.854 1.208 3.05.148.197 2.086 3.186 5.056 4.466.707.305 1.259.487 1.689.623.71.226 1.357.194 1.868.118.57-.085 1.744-.712 1.99-1.4.246-.688.246-1.278.172-1.4-.074-.123-.27-.197-.566-.344z" />
          </svg>
        </div>
        <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg pointer-events-none">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Chat with us
          </span>
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={callUrl}
        initial={{ scale: 0, opacity: 0, x: 50 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative"
        aria-label="Call Us"
      >
        <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75"></span>
        <span className="absolute inset-0 rounded-full bg-blue-400 animate-pulse opacity-50"></span>
        <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:shadow-blue-500/50">
          <svg
            fill="white"
            viewBox="0 0 24 24"
            className="w-8 h-8 md:w-9 md:h-9"
          >
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
        </div>
        <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg pointer-events-none">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Call {phoneNumber}
          </span>
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
