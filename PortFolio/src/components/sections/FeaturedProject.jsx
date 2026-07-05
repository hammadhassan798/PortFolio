import { motion } from "framer-motion";
import { FaGithub, FaRobot, FaFilePdf, FaMicrophone } from "react-icons/fa";

import { HiArrowTopRightOnSquare } from "react-icons/hi2";

import { MdQuiz, MdHistory, MdSecurity } from "react-icons/md";

import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";

import { featuredProject } from "../../data/featuredProject";

const icons = [FaRobot, FaMicrophone, MdQuiz, FaFilePdf, MdSecurity, MdHistory];

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-36 bg-white relative overflow-hidden">
      <div className="absolute left-0 top-20 w-[500px] h-[500px] rounded-full bg-[#B98B43]/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-8">
        <SectionTitle
          subtitle="Featured Project"
          title="Building intelligent software powered by AI."
          description="One of my favorite projects that demonstrates my experience in full-stack development, AI integration and modern UI design."
          center
        />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-[#FCFBF8] rounded-[40px] p-10 shadow-xl border border-[#EFE7D7]"
        >
          <p className="uppercase tracking-[6px] text-[#B98B43] font-semibold">
            {featuredProject.subtitle}
          </p>

          <h2 className="text-5xl font-black mt-5">{featuredProject.title}</h2>

          <p className="mt-8 text-gray-600 leading-8 max-w-3xl">
            {featuredProject.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {featuredProject.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          {/* Browser Frame */}

          <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl border border-[#E8DCC7]">
            <div className="bg-[#ECE5D6] px-6 py-4 flex gap-3">
              <div className="w-4 h-4 rounded-full bg-red-400"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>

            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              src={featuredProject.image}
              alt={featuredProject.title}
              className="w-full"
            />
          </div>

          {/* Features */}

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {featuredProject.features.map((feature, index) => {
              const Icon = icons[index];

              return (
                <motion.div
                  key={feature}
                  whileHover={{
                    y: -8,
                  }}
                  className="bg-white rounded-2xl p-6 border"
                >
                  <Icon className="text-3xl text-[#B98B43]" />

                  <h3 className="font-bold mt-4">{feature}</h3>
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-14">
            <a
              href={featuredProject.demo}
              className="
w-full
sm:w-auto
justify-center
px-8
py-4
rounded-full
bg-[#18181B]
text-white
flex
items-center
gap-2
hover:bg-[#B98B43]
duration-300
"
            >
              Live Demo
              <HiArrowTopRightOnSquare />
            </a>

            <a
              href={featuredProject.github}
              className="
w-full
sm:w-auto
justify-center
px-8
py-4
rounded-full
bg-[#18181B]
text-white
flex
items-center
gap-2
hover:bg-[#B98B43]
duration-300
"
            >
              GitHub
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
