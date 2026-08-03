import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-slate-900 text-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Contact Me
        </h2>

        <p className="text-gray-300 mb-10">
          I'm looking for internship opportunities and exciting projects.
        </p>

        <div className="flex justify-center gap-8 text-4xl">

          <a
            href="mailto:your-email@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>

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

        </div>

      </div>
    </section>
  );
}

export default Contact;