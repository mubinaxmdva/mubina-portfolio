import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiShoppingBag,
  FiCheckSquare,
} from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "NovaStore",
    category: "E-Commerce",
    description:
      "A modern responsive e-commerce application with product browsing, search, categories, favorites and cart management.",
    image:
  "https://images.pexels.com/photos/34803970/pexels-photo-34803970.jpeg?cs=srgb&dl=pexels-dkomov-34803970.jpg&fm=jpg",
   technologies: ["React", "Redux Toolkit", "Tailwind CSS", "React Router"],
    icon: FiShoppingBag,
    live: "https://nova-storeee.netlify.app/",
    github: "#",
  },
  {
    id: 2,
    title: "Todo App",
    category: "Productivity",
    description:
      "A clean responsive task management application with task creation, editing, completion, filtering and persistent data.",
    image: "https://media2.dev.to/dynamic/image/width%3D1080%2Cheight%3D1080%2Cfit%3Dcover%2Cgravity%3Dauto%2Cformat%3Dauto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frjib77vh9mgqrgesf7ug.jpg",
    technologies: ["React", "JavaScript", "Context API", "Tailwind CSS"],
    icon: FiCheckSquare,
    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#FFFCFD] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-28 h-72 w-72 rounded-full bg-[#FADAE5]/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#EAF5FF]/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1350px]">
        {/* Heading */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D75C8A]">
            My work
          </span>

          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#40172F] sm:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#168CE8] via-[#D94B84] to-[#EF5D98] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#8C6C7D] sm:text-base">
            A selection of projects I’ve built while learning, experimenting,
            and improving my frontend development skills.
          </p>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#168CE8] to-[#E85C96]" />
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
              id="projects"
                key={project.id}
                className="group overflow-hidden rounded-[30px] border border-[#F0D9E3] bg-white shadow-[0_18px_50px_rgba(80,30,60,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(80,30,60,0.11)]">
                {/* Project image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#FDEBF2] to-[#EEF7FF]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  {/* Category */}
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#B74475] shadow-sm backdrop-blur-sm">
                    {project.category}
                  </span>

                  {/* Icon */}
                  <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-[#D94B84] shadow-md backdrop-blur-sm">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-[#40172F]">
                        {project.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-[#806577] sm:text-base">
                        {project.description}
                      </p>
                    </div>

                    <span className="hidden text-[#E65A93] transition group-hover:translate-x-1 group-hover:-translate-y-1 sm:block">
                      <FiArrowUpRight size={22} />
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[#F0C9D9] bg-[#FFF7FA] px-3 py-1.5 text-xs font-semibold text-[#B74475]">
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#EA5B96] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(234,91,150,0.18)] transition hover:-translate-y-0.5 hover:bg-[#DF4E89]">
                      <FiExternalLink size={15} />
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#E9B4C9] bg-white px-5 py-3 text-sm font-bold text-[#B84072] transition hover:-translate-y-0.5 hover:bg-[#FFF5F9]">
                      <FiGithub size={15} />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
