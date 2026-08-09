function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact{" "}
            <span className="text-cyan-400">
              Me
            </span>
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-400 text-lg">
            Feel free to reach out to me for internships, projects,
            collaborations or opportunities.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:your-kartikrathaur838@gmail.com"
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-4xl mb-4">📧</div>

            <h3 className="text-xl font-semibold mb-2">
              Email
            </h3>

            <p className="text-gray-400 break-all">
              kartikrathaur838@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kartik-6b7b03342/"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-4xl mb-4">💼</div>

            <h3 className="text-xl font-semibold mb-2">
              LinkedIn
            </h3>

            <p className="text-gray-400">
              Connect with me
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ayush355904"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-4xl mb-4">💻</div>

            <h3 className="text-xl font-semibold mb-2">
              GitHub
            </h3>

            <p className="text-gray-400">
              View my projects
            </p>
          </a>

        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            I'm currently open to{" "}
            <span className="text-cyan-400 font-semibold">
              internship opportunities
            </span>
            .
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;