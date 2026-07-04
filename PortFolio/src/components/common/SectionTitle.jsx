import { motion } from "framer-motion";

export default function SectionTitle({
  subtitle,
  title,
  description,
  center = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .7 }}
      viewport={{ once: true }}
      className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}
    >
      <p className="uppercase tracking-[6px] text-[#B98B43] font-semibold mb-4">
        {subtitle}
      </p>

      <h2 className="text-5xl font-black text-[#18181B] leading-tight">
        {title}
      </h2>

      <p className="mt-6 text-gray-600 leading-8 text-lg">
        {description}
      </p>
    </motion.div>
  );
}