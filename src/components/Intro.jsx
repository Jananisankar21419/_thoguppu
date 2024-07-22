import React from "react";
import Image from "next/image";
import Background from "../../public/images/land4.svg";
import Logo from "../../public/images/Container 269.svg"; // Adjust path as needed
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="h-screen overflow-hidden relative">
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={Background}
          fill
          alt="Background image"
          style={{ objectFit: "cover", position: "absolute" }}
        />

        {/* Logo */}
        <div className="absolute top-8 left-8 p-4 md:flex">
          <Image
            src={Logo}
            alt="Logo"
            width={80} // Adjust width as needed
            height={80} // Adjust height as needed
            className="shrink-0"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Text */}
        <div className="absolute bottom-0 left-0 p-9 md:text-[8vw] lg:text-[8.5vw] xl:text-[7.5vw] text-white uppercase font-bold text-[10.2vw] font-mono">
          Divine Grandeur
        </div>
      </motion.div>
    </div>
  );
}
