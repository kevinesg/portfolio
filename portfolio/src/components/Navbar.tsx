import { NavLink } from "react-router-dom";
import { HomeIcon, ExperienceIcon, AboutIcon } from "@/components/ui/icons";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
