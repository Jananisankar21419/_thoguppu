import Image from "next/image";
import Background from "../../public/images/two.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Section() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden font-mono"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 p-8 sm:p-16 text-white w-full h-full flex flex-col justify-between">
        <p className="w-[80vw] sm:text-[6vw] md:text-[6.5vw] lg:text-[2.5vw] self-end uppercase mix-blend-difference">
          Indian temples are where art meets divinity, creating a sanctuary of
          beauty and peace
        </p>
        <p className="uppercase mix-blend-difference font-bold sm:text-[9vw] md:text-[9vw] text-[5.2vw] lg:text-[5vw] text-black">
          Indian sculptures
        </p>
      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={Background}
            fill
            alt="image"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
