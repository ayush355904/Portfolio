import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-cyan-400">
          Kartik
        </h2>

        <p className="text-gray-400 mt-3">
          Data Science Student | Python Developer | AI & ML Enthusiast
        </p>

        <div className="flex justify-center gap-8 text-3xl mt-8">

          <a
            href="https://github.com/ayush355904"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kartik-6b7b03342"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        <hr className="border-slate-700 my-8" />

        <p className="text-gray-500 text-sm">
          © 2026 Kartik. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;