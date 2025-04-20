import projects from "../../data/projects.json";
import { ResumeDownload } from "../components/ResumeDownload";
import techstack from "../../data/tech-stack.json";
import "../style.css";

const Home = () => {
  return (
    <div className="container">
      <div className="bio">
        <div className="bio-text">
          <h1 className="main-name">Kevin Esguerra</h1>
          <h5 className="main-job">Data Engineer</h5>
          <h5 className="main-job loc">from PH 🇵🇭</h5>
          <div className="footer-right">
            <ResumeDownload />
            <a
              href="mailto:kevinlloydesguerra@gmail.com"
              title="Email me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="32"
                height="32"
                stroke-width="2"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/kevinesg"
              title="LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="32"
                height="32"
                stroke-width="2"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
            <a
              href="https://github.com/kevinesg"
              title="GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="32"
                height="32"
                stroke-width="2"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="bio-pic">
          <img
            className="bio-pic-img default"
            src="/assets/photos/home/profile-pic.webp"
            alt="profile picture"
            loading="lazy"
          />
          <img
            className="bio-pic-img hover"
            src="/assets/photos/home/profile-pic-hover.webp"
            alt="hover profile picture"
            loading="lazy"
          />
        </div>
      </div>
      <div className="card">
        <p>
          Hi, I'm Kevin 👋, a Data Engineer with 3.5 years of experience. I
          build and document ETL/ELT pipelines, architect data foundations, and
          partner with stakeholders to turn questions into insights.
        </p>
        <p>
          I favor open-source tools (but have used AWS/GCP) and am dabbling in
          React + TypeScript on the side.
        </p>
        <p>Welcome to my portfolio!</p>
      </div>
      <div className="summaries-container">
        <div className="card summary">
          <h2>Work Experience</h2>
          <ul>
            <li>Data Engineer (2024 - Present)</li>
            <li>Data Analyst (2021 - 2024)</li>
          </ul>
          <h2>Education</h2>
          <ul>
            <li>BS Civil Engineering (2012 - 2017)</li>
          </ul>
        </div>
        <div className="card summary">
          <h2>Projects</h2>
          <ul>
            {[...projects].map((proj) => (
              <li key={proj.id}>
                <a href={proj.link} target="_blank" rel="noreferrer">
                  {proj.name} {""}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    width="13"
                    height="13"
                    stroke-width="2"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <p className="hide-me">
            this text is just here because i could not figure out how to expand
            the space of these horizontal cards without adding a paragraph
            content :)
          </p>
        </div>
      </div>
      <div className="tech-stack">
        <h2>Tech Stack</h2>
        <ul className="tech-stack-list">
          {techstack.work.map((tech) => (
            <li key={tech.name} className="tech-item card">
              <img
                src={tech.link}
                alt={`${tech.name} logo`}
                className="tech-logo"
                loading="lazy"
              />
              <div className="tech-details">
                <h3 className="tech-name">{tech.name}</h3>
                <p className="tech-description">{tech.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="tech-stack">
        <h2>on the side</h2>
        <ul className="tech-stack-list">
          {techstack.hobbies.map((tech) => (
            <li key={tech.name} className="tech-item card">
              <img
                src={tech.link}
                alt={`${tech.name} logo`}
                className="tech-logo"
                loading="lazy"
              />
              <div className="tech-details">
                <h3 className="tech-name">{tech.name}</h3>
                <p className="tech-description">{tech.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
