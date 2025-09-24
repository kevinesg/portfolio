import work_exp from "@/data/work-experience.json";
import projects from "@/data/projects.json";

const Experience = () => {
  return (
    <>
      <div>
        <p>Work Experience 💼</p>
        {[...work_exp]
          .sort((a, b) => b.id - a.id)
          .map((exp) => (
            <div key={exp.id}>
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                title={exp.company}
              >
                <img src={exp.logo} alt={exp.company} />
              </a>
              <div>
                <h3>{exp.position}</h3>
                <div>
                  <div>{exp.company}</div>
                  <div>
                    {exp.startDate} - {exp.endDate || "Present"}
                  </div>
                </div>
                <div>
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
      <div>
        <p>Education 📚</p>
        <div>
          <a
            href={"https://uplb.edu.ph/"}
            target="_blank"
            rel="noopener noreferrer"
            title={"University of the Philippines Los Baños"}
          >
            <img
              src="/assets/photos/experience/education/education-logo-uplb.webp"
              alt="University of the Philippines Los Baños"
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
      <div>
        <h2>Projects 🛠️</h2>
        <div>
          {[...projects]
            .sort((a) => a.id)
            .map((project) => (
              <div key={project.id}>
                <p>id: {project.id}</p>
                <img src={project.img} alt={project.name} />
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
                <p>{project.description}</p>
                <div>
                  {project.tech.map((tool) => (
                    <img
                      src={
                        "https://skills-icons.vercel.app/api/icons?i=" +
                        tool.toLowerCase()
                      }
                      alt={tool}
                      title={tool}
                      key={tool}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
