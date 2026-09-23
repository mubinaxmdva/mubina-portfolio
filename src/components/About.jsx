import { FiCode, FiLayers, FiZap } from "react-icons/fi";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFFCFD] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Soft decorations */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#FADAE5]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#F9DDE8]/70 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-312.5">
        {/* Section heading */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D75C8A]">
            Get to know me
          </span>

          <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#40172F] sm:text-5xl lg:text-6xl">
            About{" "}
            <span className="bg-linear-to-r from-[#188DE8] via-[#D94B84] to-[#EF5D98] bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-[#188DE8] to-[#EF5D98]" />
        </div>

        {/* Main content */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left side */}
          <div className="relative">
            <div className="rounded-4xl border border-[#F2D8E3] bg-white/80 p-6 shadow-[0_20px_60px_rgba(210,80,130,0.08)] backdrop-blur-sm sm:p-8 lg:p-10">

              {/* Small icon */}
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FADAE5] text-[#D94B84]">
                <FiCode size={26} />
              </div>

              <h3 className="text-2xl font-bold text-[#40172F] sm:text-3xl">
                Frontend Developer
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#806577] sm:text-base">
                I’m a frontend developer focused on building modern,
                responsive web applications with React and JavaScript.
                I enjoy turning ideas into clean, interactive interfaces
                and improving my skills through real projects.
              </p>

              <p className="mt-5 text-sm leading-7 text-[#806577] sm:text-base">
                I’m especially interested in user-friendly design,
                reusable components, and writing clean, maintainable code.
                My goal is to keep learning and become a stronger
                developer through hands-on experience.
              </p>

              {/* Skills */}
              <div className="mt-8 flex flex-wrap gap-2">
                {["React", "JavaScript", "Tailwind CSS", "Git", "Redux"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#F0C9D9] bg-[#FFF7FA] px-3.5 py-2 text-xs font-semibold text-[#B74475]"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-5">

            {/* Card 1 */}
            <div className="group rounded-3xl border border-[#F2D8E3] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(210,80,130,0.10)]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF5FF] text-[#168CE8]">
                  <FiLayers size={22} />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#40172F]">
                    I build real projects
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[#806577]">
                    From e-commerce interfaces to smaller applications,
                    I learn by building and solving practical problems.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-3xl border border-[#F2D8E3] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(210,80,130,0.10)]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF0F6] text-[#E65390]">
                  <FiZap size={22} />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#40172F]">
                    Always learning
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[#806577]">
                    I’m continuously improving my React, JavaScript,
                    responsive design, and problem-solving skills.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="rounded-3xl border border-[#F2D8E3] bg-[#FFF7FA] p-6 text-center">
                <p className="text-3xl font-black text-[#E65390]">2+</p>
                <p className="mt-1 text-sm font-medium text-[#806577]">
                  Main projects
                </p>
              </div>

              <div className="rounded-3xl border border-[#DCEEFF] bg-[#F6FBFF] p-6 text-center">
                <p className="text-3xl font-black text-[#168CE8]">100%</p>
                <p className="mt-1 text-sm font-medium text-[#806577]">
                  Learning mindset
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;