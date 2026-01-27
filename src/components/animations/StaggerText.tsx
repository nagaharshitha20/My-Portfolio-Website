"use client";

import { motion } from "framer-motion";
import { useInViewOnce } from "./useInViewOnce";

export function StaggerText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const { ref, visible } = useInViewOnce<HTMLParagraphElement>();

  const words = text.split(" ");

  return (
    <motion.p
      ref={ref}
      className={className}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.06 } },
        hidden: {},
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
          style={{ display: "inline-block", marginRight: "6px" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}
