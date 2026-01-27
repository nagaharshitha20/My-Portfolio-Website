"use client";
import { motion } from "framer-motion";

export default function TextReveal({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.12 }}
          viewport={{ once: true }}
          style={{ display: "inline-block", marginRight: 8 }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}
