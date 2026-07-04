import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Button from "../common/Button";
import HeroImage from "./HeroImage";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#F8F6F2]"
    >
      {/* Background Blur */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-[#B98B43]/10 rounded-full blur-[130px]" />

      <div className="absolute bottom-10 -right-32 w-[420px] h-[420px] bg-black/5 rounded-full blur-[120px]" />

      {/* Grid Pattern */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#18181B 1px, transparent 1px),linear-gradient(to right,#18181B 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="uppercase tracking-[7px] text-[#B98B43] font-semibold mb-6"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="text-6xl md:text-8xl font-black leading-none"
            >
              HAMMAD
            </motion.h1>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.7,
              }}
              className="text-6xl md:text-8xl font-black text-[#B98B43]"
            >
              HASSAN
            </motion.h1>

            {/* Animated Roles */}

            <div className="mt-8">
              <AnimatedText />
            </div>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
              }}
              className="text-gray-600 text-lg leading-8 mt-8 max-w-xl"
            >
              I build scalable, secure and modern web applications using ASP.NET
              Core Web API, MERN Stack, Python, PostgreSQL, MySQL and AI
              technologies. Passionate about clean architecture, REST APIs and
              creating premium digital experiences.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
              }}
              className="flex flex-wrap gap-5 mt-10"
            >
              <Link to="contact" smooth={true} duration={600} offset={-80}>
                <Button>Let's Talk</Button>
              </Link>
            </motion.div>

            {/* Social */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.2,
              }}
              className="flex items-center gap-6 mt-12"
            >
              <a
                href="https://github.com/hammadhassan798"
                target="_blank"
                className="text-2xl hover:text-[#B98B43] duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/hammad-hassan-2074b5413"
                target="_blank"
                className="text-2xl hover:text-[#B98B43] duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:hammadzulfiqar648@gmail.com"
                className="text-2xl hover:text-[#B98B43] duration-300"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT */}

          <HeroImage />
        </div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-7 h-12 rounded-full border-2 border-[#B98B43] flex justify-center">
          <motion.div
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="w-2 h-2 rounded-full bg-[#B98B43] mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
