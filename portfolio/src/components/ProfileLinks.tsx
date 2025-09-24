import { EmailIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

const ProfileLinks = () => {
  return (
    <div className="flex justify-center">
      <a
        href="mailto:kevinlloydesguerra@gmail.com"
        title="Email me"
        target="_blank"
        rel="noopener noreferrer"
      >
        <EmailIcon />
      </a>
      <a
        href="https://linkedin.com/in/kevinesg"
        title="LinkedIn profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/kevinesg"
        title="GitHub profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
    </div>
  );
};

export default ProfileLinks;
