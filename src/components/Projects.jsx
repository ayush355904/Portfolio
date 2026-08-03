function Projects() {
  const projects = [
    {
      title: "Netflix Data Analysis",
      tech: "Python • Pandas • Matplotlib",
      description:
        "Analyzed Netflix dataset to discover trends, content distribution, genres, and country-wise insights using Python.",
      github: "https://github.com/ayush355904/data-science-learning",
      icon: "🎬",
    },
    {
      title: "Student Performance Analysis",
      tech: "Python • Pandas • Data Analysis",
      description:
        "Analyzed student performance using Python and generated insights with charts and statistics.",
      github: "https://github.com/ayush355904/student-performance-analysis",
      icon: "📊",
    },
    {
      title: "QR Scanner",
      tech: "Python • OpenCV • Pillow",
      description:
        "Built a QR Code Scanner application capable of detecting and decoding QR codes in real time.",
      github: "https://github.com/ayush355904/qr-scanner-python",
      icon: "📱",
    },
  ];

  return (
    <section id="projects" className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-40 rounded-xl mb-5 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">{project.icon}</span>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.split(" • ").map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-300">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="block text-center mt-6 bg-cyan-500 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;