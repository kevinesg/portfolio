import work_exp from "../../data/work-experience.json";
import projects from "../../data/projects.json";

const Experience = () => {
  return (
    <>
      <div className="exp-container">
        <h2>Work Experience</h2>
        {[...work_exp]
          .sort((a, b) => b.id - a.id)
          .map((exp) => (
            <div className="card" key={exp.id}>
              <h3>{exp.position}</h3>
              <div className="exp-card-company">{exp.company}</div>
              <div className="exp-card-date">
                {exp.startDate} - {exp.endDate || "Present"}
              </div>

              <div className="exp-card-description">
                <ul>
                  {exp.description.map((item, index) => (
                    <li key={`${exp.id}-desc-${index}`}>{item}</li>
                  ))}
                  <li>Tech used: {exp.tech.join(", ")}</li>
                </ul>
              </div>
            </div>
          ))}
      </div>
      <div className="educ-container">
        <h2>Education</h2>
        <div className="card">
          <h3>University of the Philippines Los Baños</h3>
          <ul>
            <li>BS in Civil Engineering (2012 - 2017)</li>
          </ul>
        </div>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <div className="card">
          {[...projects].map((proj) => (
            <div key={proj.id}>
              <h3>
                <a href={proj.link} target="_blank" rel="noreferrer">
                  {proj.name}
                </a>
              </h3>
              <ul>
                <li>{proj.description}</li>
                <li>Tech used: {proj.tech.join(", ")}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className="cv">
        <h2>Get my CV</h2>
        <p className="p-no-indent">
          Drop your email to receive my CV in PDF format instantly! 😃
        </p>
        <p className="p-no-indent">[ NOT YET WORKING ]</p>
        <input className="custom-input" type="email" placeholder="Your email" />
      </div>
    </>
  );
};

export default Experience;
