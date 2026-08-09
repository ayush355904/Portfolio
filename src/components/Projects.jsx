function Projects() {
  const projects = [
    {
      title: "Netflix Data Analysis",
      tech: "Python • Pandas • Matplotlib",
      description:
        "Analyzed Netflix dataset to discover trends, content distribution, genres, and country-wise insights using Python.",
      github: "https://github.com/ayush355904/data-science-learning",
      image: "/projects/netflix.png.png",
    },
    {
      title: "Student Performance Analysis",
      tech: "Python • Pandas • Data Analysis",
      description:
        "Analyzed student performance using Python and generated insights with charts and statistics.",
      github:
        "https://github.com/ayush355904/student-performance-analysis",
      image: "/projects/student-performance.png.png",
    },
    {
      title: "QR Scanner",
      tech: "Python • Pillow • QR Code",
      description:
        "Built a Python-based QR Scanner application that can detect and decode QR codes.",
      github: "https://github.com/ayush355904/qr-scanner-python",
      image: "/projects/qr-scanner.png.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="text-cyan-400">
              Projects
            </span>
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-400 text-lg">
            Here are some of the projects I've worked on.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Image */}
              <div className="h-52 bg-slate-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.split(" • ").map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-7 mb-6">
                  {project.description}
                </p>

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center bg-cyan-500 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
                >
                  View on GitHub
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;