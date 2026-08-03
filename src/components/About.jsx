function About() {
  return (
    <section id="about" className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-3xl bg-slate-800 border border-cyan-500 flex items-center justify-center text-7xl">
              👨‍💻
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6">
              Hi, I'm Kartik
            </h3>

            <p className="text-gray-300 leading-8">
              I am a Data Science student passionate about Artificial Intelligence,
              Machine Learning, Data Analytics and Web Development.
            </p>

            <p className="text-gray-300 mt-5 leading-8">
              I enjoy building real-world projects, solving problems with data,
              and continuously learning modern technologies.
            </p>

           <div className="grid grid-cols-2 gap-4 mt-8">
  <div className="bg-slate-800 p-5 rounded-xl">
    <h4 className="text-cyan-400 text-2xl font-bold">3+</h4>
    <p>Projects</p>
  </div>

  <div className="bg-slate-800 p-5 rounded-xl">
    <h4 className="text-cyan-400 text-2xl font-bold">2028</h4>
    <p>Graduation</p>
  </div>
</div>
            </div>

          

        </div>

      </div>
    </section>
  );
}

export default About;