import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import Logo from "./logo";
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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      let current = "home";

      navLinks.forEach((item) => {
        const section = document.getElementById(item.to);

        if (!section) return;

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = item.to;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
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
            h-16
            lg:h-20
            mt-3
            lg:mt-5
            mx-auto
            px-5
            lg:px-8
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
          <Logo isScrolled={isScrolled} />

          {/* Desktop Navigation */}

          <ul className="hidden lg:flex items-center gap-3">
            {navLinks.map((item) => (
              <li key={item.title}>
                <div
                  className={`rounded-full transition-all duration-300 ${
                    activeSection === item.to
                      ? "bg-[#C8A165] text-black shadow-md"
                      : "hover:bg-black/5"
                  }`}
                >
                  <NavItem to={item.to}>
                    <span className="px-5 py-2 block">{item.title}</span>
                  </NavItem>
                </div>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="/resume.pdf" download>
              Resume
            </Button>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-3xl"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
          >
            {/* Drawer */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
              }}
              className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl px-8 py-8"
            >
              {/* Close */}

              <div className="flex justify-end mb-10">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-[#F5F5F5]
                    flex
                    items-center
                    justify-center
                    text-2xl
                    hover:bg-[#C8A165]
                    hover:text-white
                    transition
                  "
                >
                  <IoClose />
                </button>
              </div>

              <ul className="flex flex-col gap-7 text-xl font-semibold">
                {navLinks.map((item) => (
                  <li
                    key={item.title}
                    className="border-b border-gray-200 pb-4"
                  >
                    <NavItem
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.title}
                    </NavItem>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button
                  href="/resume.pdf"
                  download
                  onClick={() => setMenuOpen(false)}
                >
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}