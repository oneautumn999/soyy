import { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Particles from "../components/Particles";
import { useTheme } from "../components/styling/ThemeContext";
import { useMemo } from "react";
import Song1 from "../assets/song/thepolice.mp3";
import Song2 from "../assets/song/wte.mp3";
import Song3 from "../assets/song/abt.mp3";

const songs = [
  { src: Song1, name: "The-Police" },
  { src: Song2, name: "Wave-To-Earth" },
  { src: Song3, name: "1975" },
];

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

  const audioRef = useRef(null);
  const [audioStarted, setAudioStarted] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setAudioStarted(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleNext = () => {
    const nextIndex = (currentSong + 1) % songs.length;
    setCurrentSong(nextIndex);
    setTimeout(() => {
      if (audioRef.current) audioRef.current.play();
    }, 100);
  };

  const handlePrev = () => {
    const prevIndex = (currentSong - 1 + songs.length) % songs.length;
    setCurrentSong(prevIndex);
    setTimeout(() => {
      if (audioRef.current) audioRef.current.play();
    }, 100);
  };

  return (
    <div
      className={`min-h-screen relative transition-colors duration-300 ${themeClass}`}
    >
      <audio
        ref={audioRef}
        src={songs[currentSong].src}
        loop={false}
        controls={false}
        style={{ display: "none" }}
      />
      {!audioStarted && (
        <button
          onClick={handlePlay}
          className="fixed bottom-6 right-6 z-50 bg-white/80 text-black px-4 py-2 rounded-full shadow-lg mb-20 md:mb-6"
        >
          Play Music
        </button>
      )}
      {audioStarted && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-white/80 text-black px-4 py-2 rounded-full shadow-lg mb-20 md:mb-6">
          <button onClick={handlePrev}>⏮️</button>
          <button onClick={handlePause}>⏸️</button>
          <button onClick={handlePlay}>▶️</button>
          <button onClick={handleNext}>⏭️</button>
          <span className="ml-2 text-xs">{songs[currentSong].name}</span>
        </div>
      )}
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
