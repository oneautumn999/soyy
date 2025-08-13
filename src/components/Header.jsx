"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/flower.svg";
import { useTheme } from "./styling/ThemeContext";
import { Moon, Sun, Flower2 } from "lucide-react";

const navItems = [
  { path: "#home", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#photos", label: "Photo" },
  { path: "#contacts", label: "Contact" },
];

const renderThemeIcon = (theme) => {
  switch (theme) {
    case "sakura":
      return <Flower2 className="w-5 h-5" />;
    case "summer":
      return <Sun className="w-5 h-5" />;
    default:
      return <Moon className="w-5 h-5" />;
  }
};
const bgColorMap = {
  "bg-zinc-900": "rgba(24,24,27,0.92)",
  "bg-yellow-100": "rgba(254,243,199,0.92)",
  "bg-pink-50": "rgba(253,242,248,0.92)",
  // Add more if you add more themes
};
function Header() {
  const { currentTheme, changeTheme, themeOptions, themeColors } = useTheme();
  const nextTheme =
    themeOptions[
      (themeOptions.indexOf(currentTheme) + 1) % themeOptions.length
    ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navItems.map((item) =>
        document.querySelector(item.path)
      );
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setCurrentSection(navItems[i].path.substring(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cycleTheme = () => {
    const currentIndex = themeOptions.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeOptions.length;
    changeTheme(themeOptions[nextIndex]);
  };

  const handleClick = (e, path) => {
    e.preventDefault();
    const el = document.querySelector(path);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Glass effect + theme background
  const getThemeBackgroundClass = (scrolled) => {
    if (scrolled) {
      return `${themeColors.headerBg} ${themeColors.headerText} backdrop-blur-xl`;
    }
    // No background or blur when not scrolled
    return `${themeColors.headerText}`;
  };

  return (
    <>
      {/* Desktop Navbar */}
      <AnimatePresence>
        <motion.nav
          initial={false}
          animate={isScrolled ? "scrolled" : "top"}
          variants={{
            top: {
              width: "100%",
              borderRadius: "0rem",
              top: 0,
              left: 0,
              x: 0,
              boxShadow: "none",
            },
            scrolled: {
              width: "50%",
              borderRadius: "9999px",
              top: "1rem",
              left: "50%",
              x: "-50%",
              boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.15)",
            },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`fixed z-40 hidden md:block transition-colors duration-300 ${getThemeBackgroundClass(
            isScrolled
          )}`}
        >
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            {/* Left - Avatar */}
            <div className="relative h-9 w-9">
              <img
                src={Logo}
                alt="logo"
                width="36"
                height="36"
                loading="eager"
                className="h-9 w-9 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-12 ring-2 ring-gray-300/60 bg-gradient-to-br from-white/10 to-yellow-100/10"
              />
            </div>

            {/* Center - Nav Links */}
            <div className="flex items-center space-x-8">
              {navItems.map(({ path, label }) => (
                <a
                  key={path}
                  href={path}
                  onClick={(e) => handleClick(e, path)}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    currentSection === path.substring(1)
                      ? `${themeColors.text} font-semibold`
                      : `${themeColors.textLight} hover:${themeColors.text}`
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 ${
                      themeColors.text
                    } transition-all duration-300 ${
                      currentSection === path.substring(1)
                        ? "w-4"
                        : "w-0 group-hover:w-4"
                    }`}
                  ></span>
                </a>
              ))}
            </div>

            {/* Right - Theme Toggle */}
            <button
              className={`inline-flex items-center justify-center h-9 w-9 rounded-lg transition-all duration-300 hover:scale-110 ${themeColors.button} ${themeColors.buttonHover}`}
              onClick={cycleTheme}
              aria-label="Toggle theme"
            >
              {renderThemeIcon(currentTheme)}
            </button>
          </div>
        </motion.nav>
      </AnimatePresence>
      {/* Mobile Navbar */}
      <nav
        className={`md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[85%] border rounded-full shadow-lg transition-all duration-700 ease-out ${getThemeBackgroundClass(isScrolled)} ${themeColors.border}`}
      >
        <div className="container mx-auto px-4 h-12">
          <div className="flex items-center justify-around h-full">
            {navItems.map(({ path, label }) => (
              <a
                key={path}
                href={path}
                onClick={(e) => handleClick(e, path)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  currentSection === path.substring(1)
                    ? `${themeColors.text} font-semibold`
                    : `${themeColors.textLight} hover:${themeColors.text}`
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 ${
                    themeColors.text
                  } transition-all duration-300 ${
                    currentSection === path.substring(1)
                      ? "w-4"
                      : "w-0 group-hover:w-4"
                  }`}
                ></span>
              </a>
            ))}
            <div
              className="flex flex-col items-center justify-center gap-0.5 text-[10px] transition-all duration-300 cursor-pointer"
              onClick={cycleTheme}
            >
              {renderThemeIcon(currentTheme)}
              <span className={`${themeColors.textLight}`}>
                {currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
