import projects from "../../data/projects.json";

const Home = () => {
  return (
    <div className="container">
      <h2 className="hide-me-too">hide me!</h2>
      <div className="card">
        <p>
          Hi, I'm Kevin. I started programming as a hobby and became interested
          in Machine Learning. This led me to learn Data Science, which
          eventually helped me shift careers to become a Data Analyst. Later, I
          discovered my interest in back-end work and transitioned to Data
          Engineering. While I don't plan to pursue a Web Developer role, I've
          recently started creating sites using React and TypeScript.
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
