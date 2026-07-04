import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 bg-[#F8F6F2] relative overflow-hidden"
    >
      <div className="absolute right-0 top-20 w-[400px] h-[400px] bg-[#B98B43]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-8">

        <SectionTitle
          subtitle="Skills"
          title="Technologies I use to build modern software."
          description="I enjoy working across the full stack, from designing responsive user interfaces to building secure APIs and scalable database solutions."
          center
        />

        <div className="mt-20 space-y-14">

          {skillCategories.map((category, categoryIndex) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.15 }}
            >

              <h3 className="text-3xl font-bold mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                {category.skills.map((skill, index) => {

                  const Icon = skill.icon;

                  return (

                    <motion.div
                      key={skill.name}
                      whileHover={{
                        y: -10,
                        scale: 1.04,
                      }}
                      className="
                      group
                      bg-white
                      rounded-3xl
                      p-8
                      shadow-sm
                      border
                      border-transparent
                      hover:border-[#B98B43]
                      duration-300
                      cursor-pointer
                      text-center
                      "
                    >

                      <Icon
                        className={`
                        ${skill.color}
                        text-5xl
                        mx-auto
                        transition-transform
                        duration-300
                        group-hover:rotate-12
                        `}
                      />

                      <h4 className="mt-6 font-semibold text-lg">
                        {skill.name}
                      </h4>

                    </motion.div>

                  );
                })}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}