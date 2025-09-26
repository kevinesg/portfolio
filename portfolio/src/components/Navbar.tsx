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
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center justify-center p-2 rounded-lg transition-colors ${
      isActive
        ? "bg-primary text-primary-foreground"
        : "hover:bg-accent hover:text-accent-foreground"
    }`;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-xl bg-card shadow-lg border">
        <NavLink to="/" title="Home" className={navLinkClasses}>
          <HomeIcon />
        </NavLink>
        <NavLink to="/experience" title="Experience" className={navLinkClasses}>
          <ExperienceIcon />
        </NavLink>
        <NavLink to="/about" title="About" className={navLinkClasses}>
          <AboutIcon />
        </NavLink>
        <div className="w-px h-6 bg-border mx-1"></div>
        <div
          className="flex items-center justify-center p-2 rounded-lg cursor-pointer hover:bg-accent hover:text-accent-foreground"
          onClick={toggleDarkMode}
        >
          <ThemeIcon darkMode={darkMode} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
