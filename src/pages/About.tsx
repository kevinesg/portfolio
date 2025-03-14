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
          <h2>Travel</h2>
          <ImageCardCollection cards={travelCards} />
        </div>
        <div className="hobbies">
          <h2>Hiking</h2>
          <ImageCardCollection cards={hikingCards} />
        </div>
        <div className="hobbies">
          <h2>Running</h2>
          <ImageCardCollection cards={runningCards} />
        </div>

        <div className="pc-setup">
          <h2>PC setup</h2>

          {/* PC Specs */}
          <img src="/src/assets/pc/pc.jpg" alt="PC" />
          <h3>{specs.pc.title}</h3>
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
          <h3>{specs.homeServer.title}</h3>
          <img src="/src/assets/pc/server.jpg" alt="Home Server" />
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
          <h3>{specs.storage.title}</h3>
          <img src="/src/assets/pc/das.jpg" alt="Direct Attached Storage" />
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
          <h3>{specs.laptop.title}</h3>
          <img src="/src/assets/pc/laptop.jpg" alt="laptop" />
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
          <h2>games</h2>
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
