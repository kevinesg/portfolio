# Portfolio

This is a personal portfolio website built with React and TypeScript, showcasing my projects, work experience, and hobbies.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/portfolio.git
   ```
2. Navigate to the project directory:
   ```sh
   cd portfolio
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

To start the development server, run:

```
npm run dev
```

To build the project for production, run:

```
npm run build
```

To preview the production build, run:

```
npm run preview
```

## Project Structure

```
portfolio/
├── .gitignore
├── .vscode/
│   └── launch.json
├── data/
│   ├── .gitkeep
│   ├── hiking.json
│   ├── pc_specs.json
│   ├── projects.json
│   ├── running.json
│   └── travel.json
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── README.md
├── src/
│   ├── assets/
│   │   ├── cv.pdf
│   │   ├── pc/
│   │   └── photos/
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── css/
│   │   ├── Footer.tsx
│   │   ├── ImageCard.tsx
│   │   ├── ImageCardCollection.tsx
│   │   ├── MaterialUISwitch.tsx
│   │   └── Navbar.tsx
│   ├── interface/
│   │   └── NavbarProps.tsx
│   ├── main.tsx
│   ├── MainRouter.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   └── Home.tsx
│   ├── style.css
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Scripts

- npm run dev: Start the development server.
- npm run build: Build the project for production.
- npm run lint: Run ESLint to lint the code.
- npm run preview: Preview the production build.
