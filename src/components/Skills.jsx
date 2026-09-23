import {
  FiCode,
  FiDatabase,
  FiTool,
  FiLayers,
} from "react-icons/fi";

const skillGroups = [
  {
    title: "Languages",
    icon: FiCode,
    skills: [
      { name: "JavaScript", level: 80 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "TypeScript", level: 55 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: FiLayers,
    skills: [
      { name: "React", level: 80 },
      { name: "React Router", level: 75 },
      { name: "Redux Toolkit", level: 70 },
      { name: "React Icons", level: 85 },
    ],
  },
  {
    title: "Styling",
    icon: FiCode,
    skills: [
      { name: "Tailwind CSS", level: 85 },
      { name: "Responsive Design", level: 80 },
      { name: "CSS", level: 85 },
      { name: "UI Design", level: 65 },
    ],
  },
  {
    title: "Tools",
    icon: FiTool,
    skills: [
      { name: "Git", level: 70 },
      { name: "GitHub", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "Vite", level: 80 },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#FFFCFD] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#FADAE5]/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#EAF5FF]/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D75C8A]">
            What I work with
          </span>

          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#40172F] sm:text-5xl lg:text-6xl">
            Skills{" "}
            <span className="bg-gradient-to-r from-[#168CE8] to-[#E85C96] bg-clip-text text-transparent">
              & Expertise
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#168CE8] to-[#E85C96]" />
        </div>

        {/* Skill cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-[28px] border border-[#F0D9E3] bg-white p-6 shadow-[0_15px_45px_rgba(80,30,60,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(80,30,60,0.09)] sm:p-7"
              >
                {/* Card heading */}
                <div className="mb-7 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FCE8F0] text-[#D94B84]">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-lg font-bold text-[#40172F]">
                    {group.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-[#624859]">
                          {skill.name}
                        </span>

                        <span className="text-xs font-bold text-[#E65390]">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-[#F2E8ED]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#168CE8] via-[#4AA9E9] to-[#E65390] transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;