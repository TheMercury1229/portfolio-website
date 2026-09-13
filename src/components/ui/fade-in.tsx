"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import React from "react";

export interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  children: React.ReactNode;
}

/**
 * Minimal, subtle fade-in on scroll or load.
 * Keeps motion grounded and fast (no bouncy spring or heavy translations).
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.4,
  yOffset = 12,
  className,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Container that staggers child animations cleanly.
 */
export function FadeInStagger({
  children,
  faster = false,
  className,
  ...props
}: HTMLMotionProps<"div"> & { faster?: boolean }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: faster ? 0.03 : 0.06,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Child item within a FadeInStagger container.
 */
export function FadeInStaggerItem({
  children,
  yOffset = 10,
  className,
  ...props
}: HTMLMotionProps<"div"> & { yOffset?: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.35,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
