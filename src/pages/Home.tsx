import projects from "../../data/projects.json";

const Home = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="bio"></div>
        <p>
          Hi, I'm Kevin 👋. I'm a Data Engineer with 3.5 years of work
          experience in the data field.
        </p>
        <p>
          I prioritize setting up the foundation for our data architecture, then
          documenting the ETL/ELT data pipeline as well as the source of truth
          as we go and update our codebase. I like working with stakeholders
          directly to understand their needs and help them with their data
          requirements.
        </p>
        <p>
          I prefer using open-source tools and frameworks, but I also have
          experience with cloud-based solutions like AWS and GCP. I tend to
          avoid low-code/ no-code solutions, as I believe they can lead to
          unnecessary complexity and vendor lock-in.
        </p>
        <p>
          While I don't plan to pursue a Web Developer role, I've recently
          started creating sites using React and TypeScript.
        </p>
        <p> Welcome to my portfolio! 🙂</p>
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
    </div>
  );
};

export default Home;
