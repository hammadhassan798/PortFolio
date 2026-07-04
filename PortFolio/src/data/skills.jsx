import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import {
  SiTailwindcss,
  SiDotnet,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSwagger,
  SiPostman,
  SiGithub,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "text-cyan-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "ASP.NET Core", icon: SiDotnet, color: "text-violet-600" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-800" },
      { name: "Python", icon: FaPython, color: "text-yellow-500" },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: SiGithub, color: "text-black" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Swagger", icon: SiSwagger, color: "text-green-500" },
      {
        name: "VS Code",
         icon: VscVscode,
        color: "text-blue-500",
      },
    ],
  },
];