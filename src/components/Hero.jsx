function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 text-center"
    >
      <div className="max-w-3xl mx-auto">

        <p className="text-cyan-400 text-xl font-semibold mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Kartik
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
          Data Science Student & Python Developer
        </h2>

        <p className="text-gray-400 text-lg leading-8 mb-8">
          I'm passionate about Python, Data Analytics, Machine Learning
          and building real-world projects.
        </p>

        <div className="flex justify-center flex-wrap gap-4">

          <a
            href="/resume.pdf"
            download
            className="bg-cyan-500 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition duration-300"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="border border-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-950 transition duration-300"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;