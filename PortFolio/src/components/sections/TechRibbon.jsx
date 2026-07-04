import { motion } from "framer-motion";
import { technologies } from "../../data/techStack";

export default function TechRibbon() {
  return (
    <section className="py-10 bg-[#F8F6F2] overflow-hidden border-y border-[#E8DDCB]">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
        className="flex w-max gap-6"
      >
        {[...technologies, ...technologies].map((tech, index) => {
          const Icon = tech.icon;

          return (
            <div
              key={index}
              className="
                flex
                items-center
                gap-3
                bg-white
                px-6
                py-4
                rounded-full
                shadow-md
                border
                border-[#ECE2D0]
                hover:border-[#B98B43]
                transition-all
              "
            >
              <Icon className="text-2xl text-[#B98B43]" />

              <span className="font-medium">
                {tech.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}