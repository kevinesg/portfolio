import work_exp from "@/data/work-experience.json";
import projects from "@/data/projects.json";
import { motion } from "framer-motion";

const renderTextWithLinks = (text: string) => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-blue-500"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="pb-8">
        <h2 className="text-2xl font-bold pb-4">Work Experience 💼</h2>
        <div className="space-y-4">
          {[...work_exp]
            .sort((a, b) => b.id - a.id)
            .map((exp) => (
              <div key={exp.id} className="card flex flex-wrap gap-4">
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={exp.company}
                  className="rounded-sm overflow-hidden flex-shrink-0 w-[50px] h-[50px]"
                >
                  <img src={exp.logo} alt={exp.company} />
                </a>
                {/* max width is a hack / bandaid solution */}
                <div className="max-w-[600px]">
                  <h3 className="text-lg font-semibold pb-4">{exp.position}</h3>
                  <div>
                    <div>{exp.company}</div>
                    <div>
                      {exp.startDate} - {exp.endDate || "Present"}
                    </div>
                  </div>
                  <div>
                    <ul>
                      {exp.description.map((item, index) => (
                        <li key={`${exp.id}-desc-${index}`} className="">
                          {renderTextWithLinks(item)}
                        </li>
                      ))}
                      <li className="flex flex-wrap">
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
                            className="w-8 h-8 mr-1"
                          />
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="pb-8">
        <h2 className="text-2xl font-bold pb-4">Education 📚</h2>
        <div className="card flex flex-wrap gap-4">
          <a
            href={"https://uplb.edu.ph/"}
            target="_blank"
            rel="noopener noreferrer"
            title={"University of the Philippines Los Baños"}
            className="rounded-sm overflow-hidden flex-shrink-0 w-[50px] h-[50px]"
          >
            <img
              src="/assets/photos/experience/education/education-logo-uplb.webp"
              alt="University of the Philippines Los Baños"
            />
          </a>
          <div>
            <h3 className="text-lg font-semibold">
              University of the Philippines Los Baños
            </h3>
            <ul>
              <li>BS in Civil Engineering (2012 - 2017)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pb-24">
        <h2 className="text-2xl font-bold pb-4">Projects 🛠️</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {[...projects]
            .sort((a) => a.id)
            .map((project) => (
              <div key={project.id} className="project-card flex flex-col">
                {" "}
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="project-img pb-8"
                  />
                  <div className="px-4">
                    <h6 className="text-md font-semibold pb-4">
                      {project.name}
                    </h6>
                    <h6>{project.description}</h6>
                    <div className="flex flex-wrap pt-4 pb-8">
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
                          className="w-8 h-8 mr-1"
                        />
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
