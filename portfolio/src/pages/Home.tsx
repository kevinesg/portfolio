import ProfileLinks from "@/components/ProfileLinks";
import { DownloadResumeIcon, LinkIcon } from "@/components/ui/icons";

import projects from "@/data/projects.json";
import techstack from "@/data/tech-stack.json";

const Home = () => {
  return (
    <>
      <div className="flex">
        <div>
          <p>Kevin Esguerra</p>
          <p>Data Engineer from PH 🇵🇭</p>
          <p>salted caramel enthusiast 🧋</p>
          <div className="flex">
            <a
              href="/assets/files/Kevin-Esguerra-resume.pdf"
              download="Kevin-Esguerra-resume.pdf"
              title="Download my resume"
              className="inline-flex items-center"
            >
              Resume <DownloadResumeIcon />
            </a>
            <ProfileLinks />
          </div>
        </div>
        <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden group transform transition-transform duration-300 ease-out hover:scale-105 origin-center flex-shrink-0">
          <img
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-out group-hover:opacity-0"
            src="/assets/photos/home/profile-pic.webp"
            alt="profile picture"
            loading="lazy"
          />
          <img
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100"
            src="/assets/photos/home/profile-pic-hover.webp"
            alt="hover profile picture"
            loading="lazy"
          />
        </div>
      </div>
      <div>
        <div>
          <p>
            Hi 👋 I'm Kevin, a Data Engineer with 3.5 years of related work
            experience. I build and document ETL/ELT pipelines, architect data
            foundations, and partner with stakeholders to turn questions into
            insights.
          </p>
          <p>
            I favor free and open-source tools and am dabbling in web
            development for fun 😃
          </p>
        </div>
        <div className="flex">
          <div>
            <div>
              <p>Work Experience 💼</p>
              <ul>
                <li>Data Engineer (2024 - Present)</li>
                <li>Data Analyst (2021 - 2024)</li>
              </ul>
            </div>
            <div>
              <p>Education 📚</p>
              <ul>
                <li>BS Civil Engineering (2012 - 2017)</li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <p>Projects 🛠️</p>
              <ul>
                {[...projects].map((proj) => (
                  <li key={proj.id}>
                    <a href={proj.url} target="_blank" rel="noreferrer">
                      <div className="flex items-center">
                        {proj.name}
                        <LinkIcon />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Tech Stack ⚙️</p>
        <ul>
          {techstack.work.map((tech) => (
            <li key={tech.name}>
              <img src={tech.link} alt={`${tech.name} logo`} loading="lazy" />
              <div>
                <p>{tech.name}</p>
                <p>{tech.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>on the side</h2>
        <ul>
          {techstack.hobbies.map((tech) => (
            <li key={tech.name}>
              <img src={tech.link} alt={`${tech.name} logo`} loading="lazy" />
              <div>
                <p>{tech.name}</p>
                <p>{tech.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
