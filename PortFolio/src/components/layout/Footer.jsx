import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          © {new Date().getFullYear()} Hammad Hassan.
          All Rights Reserved.
        </div>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/hammadhassan798"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C8A165] transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/hammad-hassan-2074b5413"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C8A165] transition"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="flex items-center gap-2">
          Made with <FaHeart className="text-red-500" /> using React
        </div>

      </div>
    </footer>
  );
}