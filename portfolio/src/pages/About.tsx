import { useState, useEffect } from "react";
import SpecsCard from "@/components/SpecsCard";
import travel from "@/data/travel.json";
import hiking from "@/data/hiking.json";
import running from "@/data/running.json";
import pc_specs from "@/data/pc_specs.json";
import { motion } from "framer-motion";

interface ChessStats {
  chess_rapid?: { last: { rating: number } };
  chess_blitz?: { last: { rating: number } };
}

const About = () => {
  const [chessStats, setChessStats] = useState<ChessStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChessStats = async () => {
      try {
        const response = await fetch(
          "https://api.chess.com/pub/player/kevinesg/stats"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setChessStats(data);
      } catch (error) {
        console.error("Failed to fetch Chess.com stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChessStats();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="pb-8">
        <h2 className="text-2xl font-bold pb-4">Travel ✈️</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-1">
          {[...travel].map((t) => (
            <div
              key={t.photo}
              className="relative group aspect-[3/4] overflow-hidden"
            >
              <img
                src={t.photo}
                alt={`${t.place.join(", ")} - ${t.year}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <h6 className="text-white font-bold pb-1 w-full text-center">
                  {t.place.join(" + ")}, {t.country} ({t.year})
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-8">
        <h2 className="text-2xl font-bold pb-4">Hiking 🥾</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-1">
          {[...hiking]
            .sort((a, b) => b.year - a.year)
            .map((h) => (
              <div
                key={h.photo}
                className="relative group aspect-[3/4] overflow-hidden"
              >
                <img
                  src={h.photo}
                  alt={`${h.place} - ${h.year}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h6 className="text-white font-bold p-2 !indent-0 w-full text-center">
                    {h.place} ({h.year})
                  </h6>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="pb-16">
        <h2 className="text-2xl font-bold pb-4">Running 🏃‍♂️</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-1">
          {[...running]
            .sort((a, b) => b.year - a.year)
            .map((r) => (
              <div
                key={r.photo}
                className="relative group aspect-[3/4] overflow-hidden"
              >
                <img
                  src={r.photo}
                  alt={`${r.event} - ${r.year}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h6 className="text-white font-bold p-2 !indent-0 w-full text-center">
                    {r.event} ({r.year})
                  </h6>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold pb-4">PC setup 🖧</h2>
        <div>
          <img
            src="/assets/photos/pc/setup_diagram.webp"
            alt="Setup Diagram"
            className="rounded-md overflow-hidden"
          />
          <div className="card my-4">
            <p>
              The home server serves as the production environment for
              self-hosted data engineering projects, such as the data-pipelines
              project, running tools like Airflow, dbt, and custom scripts. It
              also functions as a media server (Jellyfin) and a storage server
              (Nextcloud), both accessible via Cloudflare Tunnel. Jellyfin
              allows family and friends to stream media remotely, while
              Nextcloud provides auto-sync for my phone and enables sharing of
              files and folders with view-only access.
            </p>
            <p>
              The desktop PC is primarily used for web browsing, programming (as
              a development environment), work, and some gaming. It utilizes an
              Ubuntu VM for isolated development, with production environments
              hosted either on the home server or on cloud providers like
              Netlify and Render.
            </p>
            <p>
              The laptop mirrors the desktop's functionality but is used when
              travelling or working outside the home. Both the desktop PC and
              laptop can securely access the home server from anywhere using
              Tailscale.
            </p>
          </div>
        </div>
        <h3 className="text-xl font-bold pb-4">PC 🖳</h3>
        <img src="/assets/photos/pc/pc.webp" alt="PC [pending photo]" />
        <SpecsCard specs={pc_specs.pc.specs} linkUrl={pc_specs.pc.linkUrl} />

        <h3 className="text-xl font-bold">Home Server 🗄️</h3>
        <SpecsCard specs={pc_specs.homeServer.specs} />

        <h3 className="text-xl font-bold">Laptop 💻</h3>
        <SpecsCard specs={pc_specs.laptop.specs} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-8 mb-4">Games 🎮</h2>
        <div className="space-y-4 pb-24">
          <div className="card flex flex-wrap gap-4">
            <img
              src="/assets/photos/games/dota2.webp"
              alt="Dota 2"
              title="Dota 2"
              className="rounded-sm overflow-hidden flex-shrink-0 w-[50px] h-[50px] object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">Dota 2</h3>
              <ul>
                <li>
                  <a
                    href="https://www.dotabuff.com/players/317389712"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Dotabuff profile
                  </a>
                </li>
                <li>6088 MMR</li>
              </ul>
            </div>
          </div>
          <div className="card flex flex-wrap gap-4">
            <img
              src="/assets/photos/games/chess.webp"
              alt="Chess"
              title="Chess"
              className="rounded-sm overflow-hidden flex-shrink-0 w-[50px] h-[50px] object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">Chess</h3>
              <ul>
                <li>
                  <a
                    href="https://www.chess.com/member/kevinesg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    chess.com profile
                  </a>
                </li>
                {loading ? (
                  <li>Loading ratings...</li>
                ) : (
                  <>
                    {chessStats?.chess_rapid && (
                      <li>{chessStats.chess_rapid.last.rating} ELO (Rapid)</li>
                    )}
                    {chessStats?.chess_blitz && (
                      <li>{chessStats.chess_blitz.last.rating} ELO (Blitz)</li>
                    )}
                    {!chessStats && (
                      <>
                        <li>1760 ELO (Rapid)</li>
                        <li>1646 ELO (Blitz)</li>
                      </>
                    )}
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
