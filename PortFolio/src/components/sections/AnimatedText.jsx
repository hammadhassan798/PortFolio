import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = [
  "Full Stack Software Developer",
  "ASP.NET Core Web API Developer",
  "MERN Stack Developer",
  "Python Backend Developer",
  "AI Integration Developer",
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-14 flex items-center">
      <AnimatePresence mode="wait">
        <motion.h2
          key={roles[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-semibold text-[#18181B]"
        >
          {roles[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}