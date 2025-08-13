// layout/Layout-Pages.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import Particles from "../components/Particles";
import { useTheme } from "../components/styling/ThemeContext";
import { useMemo } from "react";

function Layout({ children }) {
  const { currentTheme } = useTheme();

  const particleColors = useMemo(() => {
    switch (currentTheme) {
      case "pastel":
        return ["#fbcfe8", "#bfdbfe", "#bbf7d0"];
      case "classy":
        return ["#d4af37", "#ffffff", "#2c2c2c"];
      default:
        return ["#ffffff", "#6b7280", "#fbbf24"];
    }
  }, [currentTheme]);

  const themeClass = useMemo(() => {
    switch (currentTheme) {
      case "pastel":
        return "bg-pink-50 text-gray-800";
      case "classy":
        return "bg-amber-500 text-amber-900";
      default:
        return "bg-black text-white";
    }
  }, [currentTheme]);

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${themeClass}`}>
      <Header />
      <main className="container mx-auto px-4 pt-8 md:pt-24 pb-8 md:pb-4 space-y-16 md:space-y-24 relative z-10">
        <Particles
          className="absolute inset-0 -z-10 pointer-events-none"
          particleColors={particleColors}
          particleCount={350}
          particleSpread={5}
          speed={0.1}
          particleBaseSize={100}
          alphaParticles={false}
          disableRotation={false}
          moveParticlesOnHover={true}
        />
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
