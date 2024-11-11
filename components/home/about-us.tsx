"use client";

import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="flex flex-col items-center justify-center py-12"
    >
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h2>
      <motion.p
        className="text-gray-600 text-center w-[80%] sm:w-[60%] text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We are dedicated to providing the best project management solutions to
        help you achieve your goals. Our team is passionate about innovation and
        committed to delivering exceptional service.
      </motion.p>
    </div>
  );
};

export default AboutUs;
