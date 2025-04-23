import "./css/ProjectCard.css";

interface ProjectCardProps {
  id: number;
  img: string;
  url: string;
  name: string;
  description: string;
  tech: Array<string>;
}

const Card: React.FC<ProjectCardProps> = ({
  id,
  img,
  url,
  name,
  description,
  tech,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-url"
    >
      <div className="project-card">
        <img src={img} className="project-img" alt={name} />
        <div className="project-card-body">
          <h2 className="project-name">{name}</h2>
          <p className="project-description p-no-indent">{description}</p>
          {[...tech].map((tool) => (
            <img
              src={
                "https://skills-icons.vercel.app/api/icons?i=" +
                tool.toLowerCase()
              }
              className="project-tech"
              alt={tool}
              title={tool}
              key={id}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </a>
  );
};

export default Card;
