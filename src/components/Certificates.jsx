function Certificates() {
  const certificates = [
    {
      title: "Python Essentials",
      file: "/certificates/python-essentials.pdf.pdf",
      icon: "🐍",
    },
    {
      title: "Full Stack Development",
      file: "/certificates/fullstack-development.pdf.pdf",
      icon: "💻",
    },
    {
      title: "Simplilearn Certificate",
      file: "/certificates/simplilearn.pdf.pdf",
      icon: "📜",
    },
    {
      title: "Data Analyst Certificate",
      file: "/certificates/data-analyst.pdf.pdf",
      icon: "📊",
    },
    {
      title: "Data Science and Analytics",
      file: "/certificates/data-science-analytics.pdf.pdf",
      icon: "🤖",
    },
  ];

  return (
    <section
      id="certificates"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          My Certificates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-6xl mb-5">
                {certificate.icon}
              </div>

              <h3 className="text-xl font-bold mb-6">
                {certificate.title}
              </h3>

              <a
                href={certificate.file}
                target="_blank"
                rel="noreferrer"
                className="block bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-semibold transition"
              >
                View Certificate
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Certificates;