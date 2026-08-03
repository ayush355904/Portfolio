import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6"
    >
      <div className="text-center max-w-4xl">

        <h2 className="text-2xl text-gray-400 mb-3">
          Hello, I'm
        </h2>

        <h1 className="text-6xl md:text-7xl font-bold text-cyan-400">
          Kartik 👋
        </h1>

        <h3 className="mt-6 text-2xl md:text-3xl font-semibold">
          Data Science Student
        </h3>

        <p className="mt-5 text-xl text-gray-300">
          Turning Data into Insights with Python & AI
        </p>

        <p className="mt-4 text-gray-400">
          Python • SQL • React • Machine Learning • Data Analysis
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <a
            href="#contact"
            className="bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600 transition"
          >
            Resume (Coming Soon)
          </a>

          <a
            href="#projects"
            className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-white transition px-6 py-3 rounded-xl"
          >
            View Projects
          </a>

        </div>

        <div className="mt-10 flex justify-center gap-8 text-3xl">

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

export default Hero;