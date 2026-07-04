import ecommerce from "../assets/projects/ecommerce.png";
import library from "../assets/projects/library.png";
import portfolio from "../assets/projects/portfolio.png";

export const otherProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: ecommerce,
    description:
      "Modern e-commerce platform with authentication, product management and secure REST APIs.",

    technologies: [
      "ASP.NET Core",
      "React",
      "PostgreSQL",
      "JWT",
    ],

    github: "https://github.com/hammadhassan798",
    demo: "#",
  },

  {
    id: 2,
    title: "Library Management",
    image: library,
    description:
      "Desktop management system built with C# and SQL Server.",

    technologies: [
      "C#",
      "Windows Forms",
      "SQL Server",
    ],

    github: "https://github.com/hammadhassan798",
    demo: "#",
  },

  {
    id: 3,
    title: "Developer Portfolio",
    image: portfolio,
    description:
      "Personal portfolio developed with React, Express and Framer Motion.",

    technologies: [
      "React",
      "Express",
      "Tailwind",
    ],

    github: "https://github.com/hammadhassan798",
    demo: "#",
  },
];