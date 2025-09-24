import { NavLink } from "react-router-dom";
import { HomeIcon, ExperienceIcon, AboutIcon } from "@/components/ui/icons";
import { ThemeIcon } from "@/components/ThemeIcon";

const Navbar = ({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  return (
    <div className="flex">
      <NavLink to="/" title="Home">
        <HomeIcon />
      </NavLink>
      <NavLink to="/experience" title="Experience">
        <ExperienceIcon />
      </NavLink>
      <NavLink to="/about" title="About">
        <AboutIcon />
      </NavLink>
      <div className="dock-item mode-toggle">
        <ThemeIcon darkMode={darkMode} onClick={toggleDarkMode} />
      </div>
    </div>
  );
};

export default Navbar;
