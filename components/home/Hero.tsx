"use client";

import Link from "next/link";
import { Button, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-gray-400">Optimize growth</p>

      <h1 className="text-4xl py-10 leading-relaxed text-center font-bold tracking-tight sm:text-5xl md:text-6xl">
        Starline your goals with our KPL & <br /> Project Management Platform
      </h1>

      <p className="text-gray-400 w-[70%] text-sm text-center">
        Our platform is designed to help you manage your projects and tasks
        efficiently. With our platform, you can track your progress, set
        deadlines, and monitor your team's performance. Whether you're a
        freelancer or a business owner, our platform is the perfect solution for
        managing your time effectively.
      </p>
      <Divider className="my-10" />
      <div className="flex gap-4">
        <Button variant="solid" className="bg-white text-black font-bold">
          Try for free
        </Button>
        <Button variant="bordered" className="bg-black text-white">
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: -20 }} // Move in -y direction
        transition={{ duration: 0.5, ease: "easeInOut" }} // Added easing for a smoother effect
      >
        <img src="/timewise.jpg" alt="Preview" className="w-full h-auto" />
      </motion.div>
    </div>
  );
};

export default Hero;
