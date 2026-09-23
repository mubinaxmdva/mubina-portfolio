import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  FiArrowRight,
  FiChevronDown,
  FiMail,
} from "react-icons/fi";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function HeroSection() {
  return (
    <section
  id="home"
  className="relative min-h-screen ..."
>
      {/* ================= BACKGROUND DECOR ================= */}

      {/* Top left blob */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#FADAE5]" />

      {/* Bottom right blob */}
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#FBE3EC]" />

      {/* Soft glow */}
      <div className="pointer-events-none absolute left-[36%] top-[24%] h-72 w-72 rounded-full bg-[#FCE9F0] blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] top-[18%] h-80 w-80 rounded-full bg-[#F9DDE8] blur-3xl" />

      {/* ================= FLOATING DECORATIONS ================= */}

      {/* Dots */}
      <span className="pointer-events-none absolute left-[7%] top-[30%] h-2.5 w-2.5 rounded-full bg-[#F06A9C] animate-float-1" />

      <span className="pointer-events-none absolute left-[42%] top-[15%] h-2 w-2 rounded-full bg-[#F6A6C3] animate-float-2" />

      <span className="pointer-events-none absolute right-[8%] top-[22%] h-3 w-3 rounded-full bg-[#F39ABD] animate-float-3" />

      <span className="pointer-events-none absolute bottom-[20%] left-[9%] h-3 w-3 rounded-full bg-[#FFB5CE] animate-float-4" />

      {/* Hearts */}
      <span className="pointer-events-none absolute left-[7%] top-[42%] z-20 text-3xl text-[#EF6197] animate-float-1">
        ♡
      </span>

      <span className="pointer-events-none absolute left-[41%] top-[20%] z-20 text-4xl text-[#F48BB3] animate-float-2">
        ♡
      </span>

      <span className="pointer-events-none absolute right-[6%] top-[39%] z-20 text-3xl text-[#EF6A9F] animate-float-3">
        ♡
      </span>

      <span className="pointer-events-none absolute bottom-[16%] right-[7%] z-20 text-4xl text-[#F7A2BF] animate-float-4">
        ♡
      </span>

      {/* Sparkles */}
      <span className="pointer-events-none absolute left-[47%] top-[27%] z-20 text-2xl text-[#F2A04C] animate-float-3">
        ✦
      </span>

      <span className="pointer-events-none absolute right-[26%] top-[28%] z-20 text-3xl text-[#F5AF54] animate-float-1">
        ✦
      </span>

      <span className="pointer-events-none absolute bottom-[18%] right-[30%] z-20 text-2xl text-[#F3A3C0] animate-float-2">
        ✦
      </span>

      {/* ================= MAIN WRAPPER ================= */}

      <div className="relative z-10 mx-auto w-full max-w-375 px-5 py-5 sm:px-8 lg:px-12">

        {/* ================= NAVBAR ================= */}

       

        {/* ================= HERO ================= */}

        <div className="grid min-h-[calc(100vh-105px)] grid-cols-1 items-center gap-8 py-10 sm:py-14 lg:grid-cols-12 lg:gap-0 lg:py-8">

          {/* LEFT */}
          <div className="relative z-10 lg:col-span-7">

            <div className="mb-5 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F06799]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#C85A83] sm:text-sm">
                Frontend Developer
              </span>
            </div>

            {/* NAME */}
            <h1 className="text-[58px] font-black leading-[0.93] tracking-[-0.06em] sm:text-[78px] lg:text-[96px]">

              <span className="relative block">
                <span className="bg-linear-to-r from-[#188DE8] via-[#248FE4] to-[#D94B84] bg-clip-text text-transparent">
                  Mubina
                </span>

                {/* small sparkle near name */}
                <span className="absolute -right-2 -top-5 text-2xl font-normal text-[#F18DB1] animate-float-3 sm:right-10 sm:text-3xl">
                  ✦
                </span>
              </span>

              <span className="mt-2 block bg-linear-to-r from-[#EB5B93] via-[#F05F98] to-[#D83B7C] bg-clip-text text-transparent">
                Xamidova
              </span>
            </h1>

            {/* ROLE */}
            <div className="mt-7 max-w-190">
              <p className="text-xl font-semibold leading-tight text-[#51223E] sm:text-2xl lg:text-[30px]">
                Frontend Developer specializing in
              </p>

              <span className="mt-2 inline-block rounded-full bg-[#FADAE5] px-4 py-1.5 text-xl font-extrabold text-[#E64E8C] shadow-[0_5px_20px_rgba(229,78,140,0.08)] sm:text-2xl">
                React.js
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-170 text-sm leading-6 text-[#8C6C7D] sm:text-base sm:leading-7 lg:text-[17px]">
              Transforming complex product ideas into high-performance user
              interfaces with modern web technologies and clean code
              practices.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#EA5B96] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(234,91,150,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E14E8C] hover:shadow-[0_14px_30px_rgba(234,91,150,0.28)]"
              >
                View My Work
                <FiArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#E9AFC5] bg-white px-6 py-3.5 text-sm font-bold text-[#B84072] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E45B91] hover:bg-[#FFF5F9]"
              >
                <FiMail size={16} />
                Get In Touch
              </a>
            </div>

            {/* Hand drawn line */}
            <svg
              className="mt-7 h-8 w-36"
              viewBox="0 0 160 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 24C31 10 58 12 84 22C104 29 128 28 157 10"
                stroke="#EF6A9E"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <path
                d="M137 7C146 5 153 7 157 10"
                stroke="#EF6A9E"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* RIGHT */}
          <div className="relative flex min-h-97.5 items-center justify-center lg:col-span-5 lg:min-h-150">

            {/* Main circle */}
            <div className="absolute h-70 w-70 rounded-full border-10 border-[#FCE8F0] bg-[#F9D9E6] shadow-[0_25px_70px_rgba(225,83,139,0.18)] sm:h-97.5 sm:w-97.5 sm:border-13 lg:h-117.5 lg:w-117.5" />

            {/* Inner glow */}
            <div className="absolute h-57.5 w-57.5 rounded-full bg-[#FCEBF2]/70 blur-2xl sm:h-80 sm:w-80 lg:h-97.5 lg:w-97.5" />

            {/* Circle decorations */}
            <span className="absolute left-[8%] top-[20%] z-20 text-4xl text-[#EF659A] animate-float-1">
              ♡
            </span>

            <span className="absolute right-[13%] top-[18%] z-20 text-3xl text-[#F2B14D] animate-float-2">
              ✦
            </span>

            <span className="absolute bottom-[18%] left-[12%] z-20 text-3xl text-[#F28DB3] animate-float-3">
              ♡
            </span>

            <span className="absolute right-[9%] top-[40%] z-20 h-5 w-5 rotate-45 border-r-2 border-t-2 border-[#EF6A9C] animate-float-4" />

            <span className="absolute right-[5%] top-[43%] z-20 h-3 w-3 rotate-45 border-r-2 border-t-2 border-[#EF6A9C] animate-float-1" />

            {/* LOTTIE */}
            <div className="relative z-10 w-68.75 sm:w-91.25 lg:w-113.75">
              <DotLottieReact
                src="/animations/baby.lottie"
                autoplay
                loop
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= SCROLL ================= */}

      <a
        href="#skills"
        className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-[#B8899D]"
      >
      </a>
    </section>
  );
}

export default HeroSection;