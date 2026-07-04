import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiDotnet,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import profile from "../../assets/images/profile.png";

const icons = [
  {
    icon: <FaReact />,
    color: "text-cyan-500",
    top: "-10%",
    left: "45%",
  },

  {
    icon: <SiDotnet />,
    color: "text-violet-600",
    top: "20%",
    right: "-8%",
  },

  {
    icon: <FaNodeJs />,
    color: "text-green-600",
    bottom: "20%",
    right: "-10%",
  },

  {
    icon: <SiMongodb />,
    color: "text-green-700",
    bottom: "-5%",
    left: "15%",
  },

  {
    icon: <SiPostgresql />,
    color: "text-blue-700",
    top: "55%",
    left: "-8%",
  },

  {
    icon: <FaPython />,
    color: "text-yellow-500",
    top: "8%",
    left: "-6%",
  },

  {
    icon: <FaGitAlt />,
    color: "text-orange-600",
    bottom: "10%",
    left: "50%",
  },
];

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative flex justify-center items-center"
    >
      {/* Background Glow */}

      <div className="absolute w-[520px] h-[520px] rounded-full bg-[#B98B43]/15 blur-[120px]" />

      {/* Outer Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 45,
          ease: "linear",
        }}
        className="absolute w-[470px] h-[470px] border border-[#B98B43]/30 rounded-full"
      />

      {/* Profile */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="relative z-20"
      >
        <img
          src={profile}
          alt="Hammad Hassan"
          className="w-[390px] h-[390px] object-cover rounded-full shadow-2xl border-[10px] border-white"
        />
      </motion.div>

      {/* Floating Icons */}

      {icons.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + index,
          }}
          className={`absolute text-5xl ${item.color} bg-white p-4 rounded-full shadow-xl`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </motion.div>
  );
}