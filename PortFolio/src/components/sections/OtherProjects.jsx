import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import BrowserFrame from "../common/BrowserFrame";
import Badge from "../common/Badge";
import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";
import { otherProjects } from "../../data/otherProjects";

export default function OtherProjects() {
  return (
    <section id="other-projects" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Projects"
          title="More Projects"
          description="A selection of projects demonstrating my experience in full-stack development."
          center
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {otherProjects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >

              <Card>

                <BrowserFrame image={project.image} />

                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-7">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">

                    {project.technologies.map((tech) => (
                      <Badge key={tech}>
                        {tech}
                      </Badge>
                    ))}

                  </div>

                  <div className="flex gap-4 mt-8">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 font-semibold hover:text-[#B98B43]"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 font-semibold hover:text-[#B98B43]"
                    >
                      <FaArrowUpRightFromSquare />
                      Demo
                    </a>

                  </div>

                </div>

              </Card>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}