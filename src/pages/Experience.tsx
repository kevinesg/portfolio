import work_exp from "../../data/work-experience.json";
import projects from "../../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import "../style.css";

const Experience = () => {
  return (
    <>
      <div className="exp-container">
        <h2>Work Experience 💼</h2>
        {[...work_exp]
          .sort((a, b) => b.id - a.id)
          .map((exp) => (
            <div className="card work" key={exp.id}>
              {" "}
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                title={exp.company}
              >
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="exp-card-company-logo"
                />
              </a>
              <div>
                <h3>{exp.position}</h3>
                <div className="exp-card-company-details">
                  <div className="exp-card-company">{exp.company}</div>
                  <div className="exp-card-date">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </div>
                </div>
                <div className="exp-card-description">
                  <ul>
                    {exp.description.map((item, index) => (
                      <li key={`${exp.id}-desc-${index}`}>{item}</li>
                    ))}
                    <li>
                      {" "}
                      {[...exp.tech].map((tool) => (
                        <img
                          src={
                            "https://skills-icons.vercel.app/api/icons?i=" +
                            tool.toLowerCase()
                          }
                          className="project-tech"
                          alt={tool}
                          title={tool}
                          key={tool}
                          loading="lazy"
                        />
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="educ-container">
        <h2>Education 📚</h2>
        <div className="card work">
          <a
            href={"https://uplb.edu.ph/"}
            target="_blank"
            rel="noopener noreferrer"
            title={"University of the Philippines Los Baños"}
          >
            <img
              src="/assets/photos/experience/education/education-logo-uplb.webp"
              alt="University of the Philippines Los Baños"
              className="exp-card-company-logo"
            />
          </a>
          <div>
            <h3>University of the Philippines Los Baños</h3>
            <ul>
              <li>BS in Civil Engineering (2012 - 2017)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="projects">
        <h2>Projects 🛠️</h2>
        <div className="projects-container">
          {[...projects]
            .sort((a) => a.id)
            .map((project) => (
              <ProjectCard
                id={project.id}
                key={project.id}
                img={project.img}
                url={project.url}
                name={project.name}
                description={project.description}
                tech={project.tech}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
