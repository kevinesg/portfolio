import React from "react";

interface PikachuRunProps {
  /** Whether Pikachu is visible is active */
  isRunning: boolean;
  /** Handler to switch modes (optional) */
  onClick?: () => void;
  /** Size in pixels */
  size?: number;
}

export const BoltOnIcon = ({
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
    strokeLinecap="round"
    strokeLinejoin="round"
    width={width}
    height={height}
    strokeWidth="2"
  >
    <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
  </svg>
);
export const BoltOffIcon = ({
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
    strokeLinecap="round"
    strokeLinejoin="round"
    width={width}
    height={height}
    strokeWidth="2"
  >
    <path d="M3 3l18 18"></path>
    <path d="M15.212 15.21l-4.212 5.79v-7h-6l3.79 -5.21m1.685 -2.32l2.525 -3.47v6m1 1h5l-2.104 2.893"></path>
  </svg>
);

export const PikachuToggle: React.FC<PikachuRunProps> = ({
  isRunning,
  onClick,
  size = 24,
}) => {
  const Icon = isRunning ? BoltOffIcon : BoltOnIcon;

  return (
    <span
      onClick={onClick}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        cursor: onClick ? "pointer" : "default",
        userSelect: "none",
        marginLeft: "3px",
        marginRight: "3px",
      }}
      aria-label={isRunning ? "Pikachu is running" : "Pikachu is resting"}
      role={onClick ? "button" : undefined}
    >
      <Icon width={size} height={size} />
    </span>
  );
};
