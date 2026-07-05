import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import profile from "../../assets/images/profile.webp";

const stats = [
  { number: "15+", title: "Technologies" },
  { number: "12+", title: "Projects" },
  { number: "5+", title: "Certificates" },
  { number: "2+", title: "Years Learning" },
];

const services = [
  "Develop scalable ASP.NET Core Web APIs",
  "Build modern MERN Stack applications",
  "Design SQL & NoSQL databases",
  "Implement JWT Authentication",
  "Integrate AI into web applications",
  "Create responsive modern UI",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute -left-40 top-20 w-[450px] h-[450px] rounded-full bg-[#B98B43]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-8">

        <SectionTitle
          subtitle="About Me"
          title="Crafting modern digital experiences with clean architecture."
          description="I specialize in developing scalable web applications using ASP.NET Core Web API, MERN Stack, Python and modern databases. My goal is to build software that is secure, maintainable and delivers an excellent user experience."
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-20">

          {/* Image */}

          <motion.div
            initial={{ opacity:0,x:-80 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
          >
            <img
              src={profile}
              alt="Hammad Hassan"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity:0,x:80 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
          >

            <h3 className="text-3xl font-bold mb-8">
              What I Do
            </h3>

            <div className="space-y-5">

              {services.map((item,index)=>(

                <motion.div
                  key={index}
                  whileHover={{x:8}}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#F8F6F2] duration-300"
                >

                  <div className="w-3 h-3 rounded-full bg-[#B98B43]" />

                  <p className="text-lg text-gray-700">
                    {item}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-8 mt-24">

          {stats.map((item,index)=>(

            <motion.div

              key={index}

              whileHover={{
                y:-10,
                scale:1.03
              }}

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                delay:index*.15
              }}

              className="bg-[#F8F6F2] rounded-3xl p-10 text-center shadow-sm"
            >

              <h2 className="text-5xl font-black text-[#B98B43]">
                {item.number}
              </h2>

              <p className="mt-4 text-gray-600">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}