import { motion } from "framer-motion";

export default function Logo({ isScrolled }) {
  return (
    <motion.a
      href="/"
      whileHover={{ scale: 1.05 }}
      className={`
        text-3xl
        font-bold
        tracking-wide
        cursor-pointer
        select-none
        transition-all
        duration-300

        ${
          isScrolled
            ? "opacity-100"
            : "opacity-0 lg:opacity-100"
        }
      `}
    >
      Hammad
      <span className="text-[#B98B43]">.</span>
    </motion.a>
  );
}