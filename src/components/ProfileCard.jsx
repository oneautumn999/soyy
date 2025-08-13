import React, { useEffect, useRef, useState } from "react";
import "./custom-css/ProfileCard.css";

export default function ProfileCard({
  name = "",
  title = "",
  handle = "",
  status = "",
  avatarUrl,
  grainUrl,
  iconUrl,
  showUserInfo = true,
  enableTilt = true,
  onContactClick = () => {},
}) {
  const wrapperRef = useRef(null);
  const [active, setActive] = useState(false);

  // Pointer move for tilt effect if enabled
  function handlePointerMove(e) {
    if (!enableTilt) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const pointerX = e.clientX - rect.left;
    const pointerY = e.clientY - rect.top;

    const pointerFromLeft = pointerX / rect.width;
    const pointerFromTop = pointerY / rect.height;

    const rotateX = (pointerFromTop - 0.5) * -20;
    const rotateY = (pointerFromLeft - 0.5) * 20;

    wrapperRef.current.style.setProperty(
      "--pointer-x",
      `${pointerFromLeft * 100}%`
    );
    wrapperRef.current.style.setProperty(
      "--pointer-y",
      `${pointerFromTop * 100}%`
    );
    wrapperRef.current.style.setProperty(
      "--pointer-from-left",
      pointerFromLeft
    );
    wrapperRef.current.style.setProperty("--pointer-from-top", pointerFromTop);
    wrapperRef.current.style.setProperty("--rotate-x", `${rotateX}deg`);
    wrapperRef.current.style.setProperty("--rotate-y", `${rotateY}deg`);
  }

  function handlePointerLeave() {
    wrapperRef.current.style.setProperty("--pointer-x", `50%`);
    wrapperRef.current.style.setProperty("--pointer-y", `50%`);
    wrapperRef.current.style.setProperty("--pointer-from-left", 0.5);
    wrapperRef.current.style.setProperty("--pointer-from-top", 0.5);
    wrapperRef.current.style.setProperty("--rotate-x", `0deg`);
    wrapperRef.current.style.setProperty("--rotate-y", `0deg`);
  }

  useEffect(() => {
    setActive(true);
    const timeout = setTimeout(() => setActive(false), 150);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      ref={wrapperRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`pc-card-wrapper rounded-[30px] shadow-black/80 dark:shadow-black/60 ${
        active ? "active" : ""
      }`}
      style={{ perspective: "500px", transformStyle: "preserve-3d" }}
      role="region"
      aria-label={`Profile card of ${name}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onContactClick();
        }
      }}
    >
      <div
        className="pc-card animate-glow-bg bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800"
        style={{ willChange: "transform" }}
      >
        {grainUrl && (
          <div
            className="absolute inset-0 rounded-[30px] pointer-events-none"
            style={{
              backgroundImage: `url(${grainUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: 0.1,
              zIndex: 0,
              mixBlendMode: "overlay",
            }}
            aria-hidden="true"
          />
        )}
        {/* Avatar */}
        <img
          src={avatarUrl}
          alt={`Avatar of ${name}`}
          className="pc-avatar mx-auto rounded-[20px] max-w-[260px] max-h-[260px] object-cover mt-6 shadow-lg dark:shadow-red-900"
          loading="lazy"
          draggable={false}
        />

        {/* User info */}
        {showUserInfo && (
          <div className="pc-text text-center px-6 py-4 select-none text-gray-900 dark:text-gray-100">
            <h2 className="pc-title font-semibold text-3xl md:text-2xl sm:text-xl">
              {name}
            </h2>
            <p className="pc-subtitle mt-1 text-lg md:text-base sm:text-sm opacity-90 dark:opacity-80">
              {title}
            </p>
            {status && (
              <p className="pc-subtitle mt-1 text-sm opacity-70 dark:opacity-60 flex items-center justify-center space-x-2">
                {iconUrl && (
                  <img
                    src={iconUrl}
                    alt={`${status} icon`}
                    className="w-4 h-4"
                  />
                )}
                <span>{status}</span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
