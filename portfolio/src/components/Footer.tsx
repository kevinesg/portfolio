import ProfileLinks from "@/components/ProfileLinks";

const Footer = () => {
  return (
    <div className="flex justify-between space-x-2">
      <h6>© {new Date().getFullYear()} / kevinesg / made with React+TS</h6>
      <ProfileLinks />
    </div>
  );
};

export default Footer;
