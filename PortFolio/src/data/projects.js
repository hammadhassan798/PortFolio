import chatbot from "../assets/projects/chatbot.jpg";
import ecommerce from "../assets/projects/ecommerce.jpg";
import library from "../assets/projects/library.jpg";
import portfolio from "../assets/projects/portfolio.jpg";

export const projects = [
  {
    id: 1,
    title: "AI Chatbot Platform",
    image: chatbot,

    description:
      "An AI-powered chatbot built with React, Python, MongoDB and JWT authentication. It supports secure login, real-time conversations, chat history and Groq AI integration.",

    technologies: [
      "React",
      "Python",
      "MongoDB",
      "JWT",
      "Groq API",
    ],

    github: "https://github.com/hammadhassan798",

    demo: "#",

    featured: true,
  },

  {
    id: 2,

    title: "E-Commerce Platform",

    image: ecommerce,

    description:
      "Modern e-commerce platform featuring secure authentication, product management, order processing and PostgreSQL database.",

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
    id: 3,

    title: "Library Management System",

    image: library,

    description:
      "Desktop application for managing books, students and borrowing records using C# and SQL Server.",

    technologies: [
      "C#",
      "Windows Forms",
      "SQL Server",
    ],

    github: "https://github.com/hammadhassan798",

    demo: "#",
  },

  {
    id: 4,

    title: "Developer Portfolio",

    image: portfolio,

    description:
      "Modern portfolio website developed with React, Express, Tailwind CSS and Framer Motion animations.",

    technologies: [
      "React",
      "Express",
      "Tailwind",
      "Framer Motion",
    ],

    github: "https://github.com/hammadhassan798",

    demo: "#",
  },
];