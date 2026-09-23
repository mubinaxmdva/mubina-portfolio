import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";

const contacts = [
  {
    title: "GitHub",
    value: "github.com/mubinaxmdva",
    href: "https://github.com/mubinaxmdva",
    icon: FiGithub,
    color: "bg-[#F3F7FF] text-[#168CE8]",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/mubina-xamidova",
    href: "https://www.linkedin.com/in/mubina-xamidova-40993342a/",
    icon: FiLinkedin,
    color: "bg-[#EEF6FF] text-[#168CE8]",
  },
  {
    title: "Telegram",
    value: "@mubinaxmdva",
    href: "https://t.me/mubinaxmdva",
    icon: FiSend,
    color: "bg-[#FFF0F6] text-[#E65390]",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FFFCFD] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#EAF5FF]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-[#FADAE5]/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1100px]">

        {/* Heading */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D75C8A]">
            Let’s connect
          </span>

          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#40172F] sm:text-5xl lg:text-6xl">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#168CE8] to-[#E85C96] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#8C6C7D] sm:text-base sm:leading-7">
            I’m open to junior frontend opportunities, internships,
            collaborations, and interesting projects.
          </p>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#168CE8] to-[#E85C96]" />
        </div>

        {/* Contact card */}
        <div className="mt-14 rounded-[32px] border border-[#F0D9E3] bg-white p-6 shadow-[0_20px_60px_rgba(80,30,60,0.06)] sm:p-8 lg:p-10">

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* Left */}
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FADAE5] text-[#D94B84]">
                <FiSend size={25} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#40172F] sm:text-3xl">
                Let’s build something together.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-[#806577] sm:text-base sm:leading-7">
                Whether you have an opportunity, a project idea, or simply
                want to connect, you can find me through the links below.
              </p>
            </div>

            {/* Right */}
            <div className="space-y-3">
              {contacts.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={contact.title}
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-[#F0D9E3] bg-[#FFFCFD] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#EAB2C8] hover:bg-white hover:shadow-md sm:p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${contact.color}`}
                      >
                        <Icon size={19} />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-[#40172F]">
                          {contact.title}
                        </p>

                        <p className="mt-0.5 text-xs text-[#8C6C7D] sm:text-sm">
                          {contact.value}
                        </p>
                      </div>
                    </div>

                    <FiArrowUpRight
                      size={18}
                      className="text-[#B78A9D] transition duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#E65390]"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;