import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-[#FCFBF8]"
    >
      <div className="max-w-6xl mx-auto px-6">

        <SectionTitle
          subtitle="Experience"
          title="My Journey"
          description="A timeline of my learning and development as a software engineer."
          center
        />

        <div className="relative mt-20">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 w-1 h-full bg-[#C8A165]/30"></div>

          {experience.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-16 pb-14"
            >

              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-[#B98B43] border-4 border-white shadow-lg"></div>

              <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">

                <span className="text-[#B98B43] font-semibold">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-1">
                  {item.company}
                </p>

                <p className="text-gray-600 mt-4 leading-7">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}