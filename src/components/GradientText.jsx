export default function GradientText({
  children,
  className = "",
  colors = ["#0ea5e9", "#10b981", "#8b5cf6"],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
    backgroundSize: "300% 100%",
  };

  return (
    <div
      className={`relative mx-auto flex max-w-fit flex-row items-center justify-center font-medium transition-shadow duration-500 overflow-hidden cursor-pointer ${
        showBorder ? "rounded-[1.25rem] p-[2px]" : ""
      } ${className}`}
    >
      {showBorder && (
        <div
          className="absolute inset-0 animate-gradient z-0"
          style={gradientStyle}
        ></div>
      )}

      {showBorder && (
        <div className="absolute inset-0 bg-white dark:bg-zinc-900 z-[1] rounded-[1.25rem]"></div>
      )}

      <div
        className={`relative z-[2] text-transparent animate-gradient bg-clip-text bg-cover`}
        style={{
          ...gradientStyle,
          WebkitBackgroundClip: "text",
        }}
      >
        {children}
      </div>
    </div>
  );
}
