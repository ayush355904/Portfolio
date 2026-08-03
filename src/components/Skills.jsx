import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiPandas,
  SiNumpy,
  SiMysql,
} from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaPython />, name: "Python" },
    { icon: <SiMysql />, name: "SQL" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
  ];

  return (
    <section id="skills" className="bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl text-cyan-400 mb-4">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;