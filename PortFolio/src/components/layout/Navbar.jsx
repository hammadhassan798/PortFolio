import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import Logo from "./Logo";
import NavItem from "./NavItem";
import Button from "../common/Button";

const navLinks = [
  { title: "Home", to: "home" },
  { title: "Projects", to: "projects" },
  { title: "About", to: "about" },
  { title: "Skills", to: "skills" },
  { title: "Experience", to: "experience" },
  { title: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div
          className={`
          max-w-7xl
          h-20
          mt-5
          mx-auto
          px-8
          rounded-full
          flex
          items-center
          justify-between
          transition-all
          duration-500

          ${
            isScrolled
              ? "bg-white/75 backdrop-blur-xl border border-white/70 shadow-xl"
              : "bg-transparent"
          }
          `}
        >
          <Logo />

          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <li key={item.title}>
                <NavItem to={item.to}>{item.title}</NavItem>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="/resume.pdf" download>
              Resume
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl"
          >
            {menuOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#F8F6F2] z-40 pt-32"
          >
            <ul className="flex flex-col items-center gap-8 text-2xl">
              {navLinks.map((item) => (
                <li key={item.title}>
                  <NavItem to={item.to} onClick={() => setMenuOpen(false)}>
                    {item.title}
                  </NavItem>
                </li>
              ))}

              <Button href="/resume.pdf">Resume</Button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
