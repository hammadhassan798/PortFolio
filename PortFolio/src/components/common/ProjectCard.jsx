import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function ProjectCard({ project, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: .7 }}
      className={`
      grid
      lg:grid-cols-2
      gap-14
      items-center
      bg-white
      rounded-3xl
      overflow-hidden
      shadow-lg
      border
      border-transparent
      hover:border-[#B98B43]
      duration-300
      ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition duration-700 hover:scale-110"
        />
      </div>

      <div className="p-10">
        <h2 className="text-4xl font-bold">
          {project.title}
        </h2>

        <p className="text-gray-600 mt-6 leading-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-[#F8F6F2] text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-5 mt-10">
          <a
            href={project.demo}
            className="px-6 py-3 rounded-full bg-[#18181B] text-white flex items-center gap-2 hover:bg-[#B98B43]"
          >
            Live Demo
            <HiArrowTopRightOnSquare />
          </a>

          <a
            href={project.github}
            className="px-6 py-3 rounded-full border flex items-center gap-2 hover:bg-black hover:text-white"
          >
            GitHub
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
}