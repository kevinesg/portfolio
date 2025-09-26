import ProfileLinks from "@/components/ProfileLinks";
import { DownloadResumeIcon, LinkIcon } from "@/components/ui/icons";
import { motion } from "framer-motion";

import projects from "@/data/projects.json";
import techstack from "@/data/tech-stack.json";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-y-4 pb-24">
        <div className="flex justify-center gap-8 flex-wrap-reverse">
          <div className="justify-center ">
            <h1 className="text-4xl font-bold pb-2">Kevin Esguerra</h1>
            <h5 className="text-lg">Data Engineer from PH 🇵🇭</h5>
            <h5 className="text-lg">salted caramel enthusiast 🧋</h5>
            <div className="flex gap-4 pt-2">
              <a
                href="/assets/files/Kevin-Esguerra-resume.pdf"
                download="Kevin-Esguerra-resume.pdf"
                title="Download my resume"
                className="inline-flex items-center hover:text-gray-500 hover:underline"
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
        <div className="flex flex-col gap-y-4 pb-4">
          <div className="card">
            <p className="pb-4">
              Hi 👋 I'm Kevin, a Data Engineer with 4 years of related work
              experience. I build and document ETL/ELT pipelines, architect data
              foundations, and partner with stakeholders to turn questions into
              insights.
            </p>
            <p>
              I favor free and open-source tools and am dabbling in web
              development for fun 😃
            </p>
          </div>
          <div className="flex flex-wrap gap-4 items-stretch">
            <div className="card flex-1 basis-0 min-w-[250px]">
              <div className="pb-4">
                <h2 className="text-2xl font-bold">Work Experience 💼</h2>
                <ul>
                  <li>Data Engineer (2024 - Present)</li>
                  <li>Data Analyst (2021 - 2024)</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Education 📚</h2>
                <ul>
                  <li>BS Civil Engineering (2012 - 2017)</li>
                </ul>
              </div>
            </div>
            <div className="card flex-1 basis-0 min-w-[250px]">
              <div>
                <h2 className="text-2xl font-bold">Projects 🛠️</h2>
                <ul>
                  {[...projects].map((proj) => (
                    <li
                      key={proj.id}
                      className="hover:text-gray-500 hover:underline"
                    >
                      <a href={proj.url} target="_blank" rel="noreferrer">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="truncate">{proj.name}</span>
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
        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl font-bold">Tech Stack ⚙️</h2>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] auto-rows-fr">
            {techstack.work.map((tech) => (
              <div
                key={tech.name}
                className="p-2 tech-stack flex items-start space-x-4 h-full max-h-[240px]"
              >
                <img
                  src={tech.link}
                  alt={`${tech.name} logo`}
                  loading="lazy"
                  className="flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h5 className="font-bold text-lg whitespace-normal break-words">
                    {tech.name}
                  </h5>
                  <h6 className="text-sm text-card-secondary-foreground whitespace-normal break-words">
                    {tech.description}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl font-bold">on the side</h2>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] auto-rows-fr">
            {techstack.hobbies.map((tech) => (
              <div
                key={tech.name}
                className="p-2 tech-stack flex items-start space-x-4 h-full max-h-[240px]"
              >
                <img
                  src={tech.link}
                  alt={`${tech.name} logo`}
                  loading="lazy"
                  className="flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h5 className="font-bold text-lg whitespace-normal break-words">
                    {tech.name}
                  </h5>
                  <h6 className="text-sm text-card-secondary-foreground whitespace-normal break-words">
                    {tech.description}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
