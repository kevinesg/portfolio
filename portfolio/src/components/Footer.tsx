import ProfileLinks from "@/components/ProfileLinks";

const Footer = () => {
  return (
    <div className="flex ">
      <p>© {new Date().getFullYear()} / kevinesg / made with react+TS</p>
      <ProfileLinks />
    </div>
  );
};

export default Footer;
