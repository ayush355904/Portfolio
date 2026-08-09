function Navbar() {
  return (
    <nav className="bg-slate-950 text-white py-5 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <h1 className="text-2xl font-bold text-cyan-400">
          Kartik
        </h1>

        <ul className="hidden md:flex gap-8 text-lg">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#certificates" className="hover:text-cyan-400 transition">
              Certificates
            </a>
          </li>

          <li>
            <a href="#education" className="hover:text-cyan-400 transition">
              Education
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;