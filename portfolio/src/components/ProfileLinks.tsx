import { EmailIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

const ProfileLinks = () => {
  return (
    <div className="flex justify-center gap-4">
      <a
        href="mailto:kevinlloydesguerra@gmail.com"
        title="Email me"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-500"
      >
        <EmailIcon />
      </a>
      <a
        href="https://linkedin.com/in/kevinesg"
        title="LinkedIn profile"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-500"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/kevinesg"
        title="GitHub profile"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-500"
      >
        <GitHubIcon />
      </a>
    </div>
  );
};

export default ProfileLinks;
