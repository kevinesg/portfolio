import React from "react";

interface ThemeIconProps {
  /** Whether dark mode is active */
  darkMode: boolean;
  /** Handler to switch modes (optional) */
  onClick?: () => void;
  /** Size in pixels */
  size?: number;
}

export const SunIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    width={width}
    height={height}
    stroke-width="2"
  >
    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
  </svg>
);
export const MoonIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    width={width}
    height={height}
    stroke-width="2"
  >
    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
  </svg>
);

export const ThemeIcon: React.FC<ThemeIconProps> = ({
  darkMode,
  onClick,
  size = 24,
}) => {
  const Icon = darkMode ? SunIcon : MoonIcon;

  return (
    <span
      onClick={onClick}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        cursor: onClick ? "pointer" : "default",
        userSelect: "none",
        marginRight: "3px",
      }}
      aria-label={darkMode ? "Dark mode" : "Light mode"}
      role={onClick ? "button" : undefined}
    >
      <Icon width={size} height={size} />
    </span>
  );
};
