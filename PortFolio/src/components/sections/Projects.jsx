import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 bg-[#F8F6F2]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <SectionTitle
          subtitle="Projects"
          title="Some of my favorite work."
          description="Here are some projects that demonstrate my experience building full-stack applications, REST APIs and modern user interfaces."
          center
        />

        <div className="space-y-24 mt-20">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}

        </div>

      </div>
    </section>
  );
}