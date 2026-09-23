import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Navbar full width bo‘lishi
      setIsSticky(scrollY > 15);

      // Hozirgi sectionni topish
      const currentPosition = scrollY + 180;

      let currentSection = "";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= currentPosition) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-[86px] w-full">
      <nav
        className={
          isSticky
            ? "fixed left-0 top-0 z-50 w-full border-b border-[#F1D8E3] bg-[#FDEBF2]/95 shadow-[0_8px_30px_rgba(190,70,120,0.10)] backdrop-blur-xl"
            : "absolute left-1/2 top-5 z-50 w-[calc(100%-40px)] max-w-[1500px] -translate-x-1/2 rounded-[22px] border border-[#F5D6E1] bg-[#FDEBF2]/90 shadow-[0_8px_30px_rgba(232,91,145,0.06)] backdrop-blur-md sm:w-[calc(100%-64px)]"
        }
      >
        <div
          className={
            isSticky
              ? "mx-auto flex w-full max-w-[1500px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
              : "flex items-center justify-between px-5 py-3.5 sm:px-7 sm:py-4"
          }
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="text-2xl font-extrabold tracking-[-0.03em] text-[#168CE8] sm:text-[27px]"
          >
            Mivora
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#FADAE5] text-[#B73E70]"
                      : "text-[#714E62] hover:bg-white/80 hover:text-[#B73E70]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F0CBD9] bg-white text-[#B74475] md:hidden"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden px-4 transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-[320px] pb-4 opacity-100"
              : "max-h-0 pb-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-[#F2D8E3] bg-white p-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-[#FADAE5] text-[#B73E70]"
                      : "text-[#714E62] hover:bg-[#FFF1F6]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;