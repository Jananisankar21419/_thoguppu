"use client";

import { useRef, useEffect } from "react";
import Lenis from "lenis";
import styles from "../../app/exhibit/page.module.css"; // Ensure this path is correct
import { projects } from "../../data.js";
import Card from "../../components/Card/index";

export default function Exhibit() {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    const lenis = new Lenis({
      target: container.current,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <main ref={container} className={styles.main}>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            // Pass scroll progress if needed
            range={[i * 0.25, 1]} // Adjust range as needed
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
