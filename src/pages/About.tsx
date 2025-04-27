import travel from "../../data/travel.json";
import hiking from "../../data/hiking.json";
import running from "../../data/running.json";
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
          <h3>PC 🖳</h3>
          <img src="/assets/photos/pc/pc.webp" alt="PC [pending photo]" />

          <div className="card pre">
            <span className="json-braces">{`{`}</span>
            {`
    `}

            <span className="json-key">"CPU"</span>
            {`:          `}
            <span className="json-value">"AMD Ryzen 7 5700X"</span>
            {`,
    `}
            <span className="json-key">"GPU"</span>
            {`:          `}
            <span className="json-value">"AMD RX 7600 XT"</span>
            {`,
    `}
            <span className="json-key">"RAM"</span>
            {`:          `}
            <span className="json-value">"64GB"</span>
            {`,
    `}
            <span className="json-key">"Motherboard"</span>
            {`:  `}
            <span className="json-value">"B550"</span>
            {`,
    `}
            <span className="json-key">"PSU"</span>
            {`:          `}
            <span className="json-value">"750W"</span>
            {`,
    `}
            <span className="json-key">"Storage"</span>
            {`:    `}
            <span className="json-bracket">{`[`}</span>
            {`
                    `}
            <span className="json-value">"500GB NVMe SSD"</span>
            {`,
                    `}
            <span className="json-value">"1TB NVMe SSD"</span>
            {`,
                    `}
            <span className="json-value">"2TB HDD"</span>
            {`
                  `}
            <span className="json-bracket">{`]`}</span>
            {`,
    `}
            <span className="json-key">"OS"</span>
            {`:           `}
            <span className="json-value">"EndeavourOS"</span>
            {`,
    `}
            <span className="json-key">"partsList"</span>
            {`:    `}
            <span className="json-value">
              "
              <a
                href="https://pcpartpicker.com/b/qTvfrH"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pcpartpicker.com/b/qTvfrH
              </a>
              "
            </span>
            {`
`}
            <span className="json-braces">{`}`}</span>
          </div>
          <h3>Home Server 🗄️</h3>
          <div className="card pre">
            <span className="json-braces">{`{`}</span>
            {`
    `}
            <span className="json-key">"CPU"</span>
            {`:          `}
            <span className="json-value">"Intel Celeron N5105"</span>
            {`,
    `}
            <span className="json-key">"GPU"</span>
            {`:          `}
            <span className="json-value">
              "Intel JasperLake [UHD Graphics]"
            </span>
            {`,
    `}
            <span className="json-key">"RAM"</span>
            {`:          `}
            <span className="json-value">"12GB"</span>
            {`,
    `}
            <span className="json-key">"Storage"</span>
            {`:    `}
            <span className="json-bracket">{`[`}</span>
            {`
                    `}
            <span className="json-value">"250GB NVMe SSD"</span>
            {`,
                    `}
            <span className="json-value">"2TB SATA SSD"</span>
            {`
                  `}
            <span className="json-bracket">{`]`}</span>
            {`,
    `}
            <span className="json-key">"OS"</span>
            {`:           `}
            <span className="json-value">"Ubuntu Server 24.04 LTS"</span>
            {`,
    `}
            <span className="json-key">"DAS"</span>
            {`:          `}
            <span className="json-value">"1x 8TB HDD"</span>
            {`
`}
            <span className="json-braces">{`}`}</span>
          </div>
          <h3>Laptop 💻</h3>
          <div className="card pre">
            <span className="json-braces">{`{`}</span>
            {`
    `}
            <span className="json-key">"Model"</span>
            {`:        `}
            <span className="json-value">"Acer Aspire 3 A315-44P-R9WX"</span>
            {`,
    `}
            <span className="json-key">"CPU"</span>
            {`:          `}
            <span className="json-value">"AMD Ryzen 7 5700U"</span>
            {`,
    `}
            <span className="json-key">"GPU"</span>
            {`:          `}
            <span className="json-value">"AMD Radeon Graphics"</span>
            {`,
    `}
            <span className="json-key">"RAM"</span>
            {`:          `}
            <span className="json-value">"16GB"</span>
            {`,
    `}
            <span className="json-key">"Storage"</span>
            {`:      `}
            <span className="json-value">"500GB SSD"</span>
            {`,
    `}
            <span className="json-key">"OS"</span>
            {`:           `}
            <span className="json-value">"EndeavourOS"</span>
            {`
`}
            <span className="json-braces">{`}`}</span>
          </div>
        </div>
        <div className="games">
          <h2>games 🎮</h2>
          <div className="card">
            <div className="game-div">
              <img
                src="/assets/photos/games/dota2.webp"
                alt="Dota 2"
                title="Dota 2"
                className="game-icon"
              />
              <div className="game-info">
                <h3>Dota 2</h3>
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
              </div>
            </div>
            <div className="game-div">
              <img
                src="/assets/photos/games/chess.webp"
                alt="Chess"
                title="Chess"
                className="game-icon"
              />
              <div className="game-info">
                <h3>Chess</h3>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
