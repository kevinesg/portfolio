import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import travel from "../../data/travel.json";
import hiking from "../../data/hiking.json";
import running from "../../data/running.json";
import specs from "../../data/pc_specs.json";
import ImageCardCollection from "../components/ImageCardCollection";
import "../style.css";

const travelCards = travel.map((t) => ({
  imageSrc: t.photo,
  location: `${t.places.join(" + ")}, ${t.country}`,
  year: t.year,
}));

const hikingCards = hiking.map((h) => ({
  imageSrc: h.photo,
  location: h.place,
  year: h.year,
}));

const runningCards = running.map((r) => ({
  imageSrc: r.photo,
  location: r.event == null ? "" : r.event,
  year: r.year,
}));

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="hobbies">
          <h2>Travel ✈️</h2>
          <ImageCardCollection cards={travelCards} />
        </div>
        <div className="hobbies">
          <h2>Hiking 🥾</h2>
          <ImageCardCollection cards={hikingCards} />
        </div>
        <div className="hobbies">
          <h2>Running 🏃🏻‍➡️</h2>
          <ImageCardCollection cards={runningCards} />
        </div>

        <div className="pc-setup">
          <h2>PC setup 🖧</h2>
          <div>
            <img
              src="/assets/photos/pc/setup_diagram.webp"
              alt="Setup Diagram"
            />
            <div className="card">
              <p>
                The home server serves as the production environment for
                self-hosted data engineering projects, such as the
                data-pipelines project, running tools like Airflow, dbt, and
                custom scripts. It also functions as a media server (Jellyfin)
                and a storage server (Nextcloud), both accessible via Cloudflare
                Tunnel. Jellyfin allows family and friends to stream media
                remotely, while Nextcloud provides auto-sync for my phone and
                enables sharing of files and folders with view-only access.
              </p>
              <p>
                The desktop PC is primarily used for web browsing, programming
                (as a development environment), work, and some gaming. It
                utilizes an Ubuntu VM for isolated development, with production
                environments hosted either on the home server or on cloud
                providers like Netlify and Render.
              </p>
              <p>
                The laptop mirrors the desktop's functionality but is used when
                travelling or working outside the home. Both the desktop PC and
                laptop can securely access the home server from anywhere using
                Tailscale.
              </p>
            </div>
          </div>
          {/* PC Specs */}
          <h3>{specs.pc.title} 🖳</h3>
          <img src="/assets/photos/pc/pc.webp" alt="PC" />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Component</TableCell>
                  <TableCell>Specification</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {specs.pc.specs.map((part, index) => (
                  <TableRow key={index}>
                    <TableCell>{part.component}</TableCell>
                    <TableCell>{part.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <a href={specs.pc.linkUrl} target="_blank" rel="noopener noreferrer">
            {specs.pc.linkText}
          </a>

          {/* Home Server */}
          <h3>{specs.homeServer.title} 🗄️</h3>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Component</TableCell>
                  <TableCell>Specification</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {specs.homeServer.specs.map((part, index) => (
                  <TableRow key={index}>
                    <TableCell>{part.component}</TableCell>
                    <TableCell>{part.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Storage */}
          <h3>{specs.storage.title} 📦</h3>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>Capacity</TableCell>
                  <TableCell>Usage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {specs.storage.specs.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.capacity}</TableCell>
                    <TableCell>{item.usage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Laptop */}
          <h3>{specs.laptop.title} 💻</h3>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Component</TableCell>
                  <TableCell>Specification</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {specs.laptop.specs.map((part, index) => (
                  <TableRow key={index}>
                    <TableCell>{part.component}</TableCell>
                    <TableCell>{part.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="games">
          <h2>games 🎮</h2>
          <div className="card">
            <ul>
              <li>Dota 2</li>
              <ul>
                <li>
                  <a
                    href="https://www.dotabuff.com/players/317389712"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dotabuff profile
                  </a>
                </li>
                <li>6088 MMR</li>
              </ul>
              <li>Chess</li>
              <ul>
                <li>
                  <a
                    href="https://www.chess.com/member/kevinesg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    chess.com profile
                  </a>
                </li>
                <li>1876 ELO (rapid)</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
