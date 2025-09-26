import React from "react";
import { SunIcon, MoonIcon } from "@/components/ui/icons";

interface ThemeIconProps {
  darkMode: boolean;
  onClick?: () => void;
  size?: number;
}

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
      <Icon />
    </span>
  );
};
