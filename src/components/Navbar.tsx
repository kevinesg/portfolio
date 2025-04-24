import React from "react";
import { NavLink } from "react-router-dom";
import NavbarProps from "../interface/NavbarProps";
import { ThemeIcon } from "./ThemeIcon";
import { PikachuToggle } from "./PikachuToggle";

const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  toggleDarkMode,
  isRunning,
  togglePika,
}) => {
  return (
    <nav className="dock-navbar">
      <ul className="dock-list">
        <li className="dock-item">
          <NavLink to="/" title="Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="24"
              height="24"
              stroke-width="2"
            >
              <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
            </svg>
          </NavLink>
        </li>
        <li className="dock-item">
          <NavLink to="/experience" title="Experience">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="24"
              height="24"
              stroke-width="2"
            >
              <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z"></path>
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </NavLink>
        </li>
        <li className="dock-item">
          <NavLink to="/about" title="About">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="24"
              height="24"
              stroke-width="2"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
            </svg>
          </NavLink>
        </li>
        <li className="dock-item mode-toggle">
          <ThemeIcon darkMode={darkMode} onClick={toggleDarkMode} />
        </li>
        <li className="dock-item ">
          <PikachuToggle isRunning={isRunning} onClick={togglePika} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
