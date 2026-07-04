import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.a
      href="/"
      whileHover={{
        scale: 1.05,
      }}
      className="
      text-3xl
      font-bold
      tracking-wide
      cursor-pointer
      select-none
      "
    >
      Hammad
      <span className="text-[#B98B43]">.</span>
    </motion.a>
  );
}