import {
  FiBookOpen,
  FiCode,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";

const experiences = [
  {
    year: "Current",
    title: "Frontend Development",
    type: "Learning & Practice",
    icon: FiBookOpen,
    description:
      "Building a strong foundation in modern frontend development through hands-on learning, practical exercises, and real projects.",
    skills: ["JavaScript", "React", "Tailwind CSS", "Git"],
  },
  {
    year: "Projects",
    title: "React Project Development",
    type: "Independent Work",
    icon: FiCode,
    description:
      "Developing responsive web applications while practicing reusable components, routing, state management, and clean UI implementation.",
    skills: ["React", "Redux Toolkit", "React Router", "Responsive Design"],
  },
  {
    year: "Featured",
    title: "NovaStore",
    type: "E-Commerce Project",
    icon: FiLayers,
    description:
      "Built a responsive e-commerce application with product browsing, search, categories, favorites, cart management, and reusable React components.",
    skills: ["React", "Redux Toolkit", "Tailwind CSS", "Vite"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#FFFCFD] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#FADAE5]/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#EAF5FF]/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1200px]">

        {/* Heading */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D75C8A]">
            My journey
          </span>

          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#40172F] sm:text-5xl lg:text-6xl">
            Experience{" "}
            <span className="bg-gradient-to-r from-[#168CE8] to-[#E85C96] bg-clip-text text-transparent">
              & Journey
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#8C6C7D] sm:text-base">
            My frontend journey is built around continuous learning,
            practical projects, and solving real development problems.
          </p>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#168CE8] to-[#E85C96]" />
        </div>

        {/* Timeline */}
        <div className="relative mt-14">

          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[#E8AFC5] via-[#E7D5DE] to-transparent md:block" />

          <div className="space-y-7">
            {experiences.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className="relative md:pl-16"
                >
                  {/* Timeline icon */}
                  <div className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-2xl border border-[#F0C9D9] bg-white text-[#D94B84] shadow-sm md:flex">
                    <Icon size={21} />
                  </div>

                  {/* Card */}
                  <div className="rounded-[28px] border border-[#F0D9E3] bg-white p-6 shadow-[0_15px_45px_rgba(80,30,60,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(80,30,60,0.09)] sm:p-7">

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FCE8F0] text-[#D94B84] md:hidden">
                            <Icon size={17} />
                          </span>

                          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D75C8A]">
                            {item.type}
                          </span>
                        </div>

                        <h3 className="mt-3 text-xl font-bold text-[#40172F] sm:text-2xl">
                          {item.title}
                        </h3>
                      </div>

                      <span className="w-fit rounded-full bg-[#FDEBF2] px-3 py-1.5 text-xs font-bold text-[#B74475]">
                        {item.year}
                      </span>
                    </div>

                    <p className="mt-4 max-w-3xl text-sm leading-6 text-[#806577] sm:text-base sm:leading-7">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-[#F0C9D9] bg-[#FFF7FA] px-3 py-1.5 text-xs font-semibold text-[#B74475]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Small closing note */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-[#EFD4DF] bg-white px-4 py-2 text-xs font-medium text-[#8C6C7D] shadow-sm">
            <FiCheckCircle className="text-[#E65390]" />
            Always learning. Always building.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;