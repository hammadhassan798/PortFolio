import {
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaEnvelope,
} from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top */}

        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* Left */}

          <div className="text-center lg:text-left">

            <h2 className="text-3xl font-bold text-white">
              Hammad Hassan
            </h2>

            <p className="text-[#C8A165] mt-2 font-medium">
              Full Stack Developer
            </p>

            <p className="max-w-md mt-5 leading-7 mx-auto lg:mx-0">
              Passionate about building scalable, secure and modern web
              applications using ASP.NET Core, MERN Stack, Python and AI
              technologies.
            </p>

          </div>

          {/* Right */}

          <div className="text-center lg:text-left">

            <h3 className="text-xl text-white font-semibold mb-5">
              Quick Links
            </h3>

            <div className="space-y-4 flex flex-col items-center lg:items-start">

              <a
                href="mailto:hammadzulfiqar648@gmail.com"
                className="flex items-center gap-3 hover:text-[#C8A165] transition"
              >
                <FaEnvelope />
                Email
              </a>

              <a
                href="https://github.com/hammadhassan798"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-[#C8A165] transition"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/hammad-hassan-2074b5413"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-[#C8A165] transition"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-3 hover:text-[#C8A165] transition"
              >
                <HiOutlineDocumentDownload />
                Resume
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
            border-t
            border-gray-800
            mt-10
            pt-6
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
            text-center
            md:text-left
          "
        >

          <p>
            © {new Date().getFullYear()} Hammad Hassan. All Rights Reserved.
          </p>

          <p
            className="
              flex
              flex-wrap
              justify-center
              md:justify-start
              items-center
              gap-2
            "
          >
            <span>Built with</span>

            <FaHeart className="text-red-500" />

            <span>
              using React, Tailwind CSS & Framer Motion
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}