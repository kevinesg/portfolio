import React from "react";

export const ResumeDownload: React.FC = () => (
  <a
    href="/assets/files/Kevin-Esguerra-resume.pdf"
    download="Kevin-Esguerra-resume.pdf"
    title="Download my resume"
    style={{ display: "inline-flex", gap: 4 }}
  >
    Resume{" "}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="32"
      height="32"
      strokeWidth="2"
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
      <path d="M12 17v-6"></path>
      <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
    </svg>
  </a>
);
