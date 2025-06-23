"use client";

import type React from "react";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, type Variant } from "framer-motion";

type AnimateInViewProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
};

export function AnimateInView({
  children,
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  once = true,
}: AnimateInViewProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Only fade-in-down variant
  const variants = {
    hidden: {
      opacity: 0,
      y: -20,
    } as Variant,
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    } as Variant,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          controls.start("visible");
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsInView(false);
          controls.start("hidden");
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls, threshold, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
