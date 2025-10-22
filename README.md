# CV Project 💼

A small front-end web app to present my CV. Built with React + TypeScript on Vite, styled with MUI and Emotion, and complemented by a few UI/visualization libraries.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/MUI-6-007FFF?logo=mui&logoColor=white)](https://mui.com/)
[![Emotion](https://img.shields.io/badge/Emotion-11-C865B9)](https://emotion.sh/docs/introduction)
[![Recharts](https://img.shields.io/badge/Recharts-2-00C49F)](https://recharts.org/)
[![React Slick](https://img.shields.io/badge/React%20Slick-0.30-CC6699)](https://react-slick.neostack.com/)
[![React Icons](https://img.shields.io/badge/React%20Icons-5-4A5568)](https://react-icons.github.io/react-icons/)
[![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

## Tech Stack 🔧
- React 18 + TypeScript
- Vite (dev server and build)
- MUI + Emotion (styling)
- Recharts, React Slick, React Icons
- ESLint for linting

## Quick Start ⚡
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev` → http://localhost:5173
3. Optional lint: `npm run lint`

## Scripts 📜
- `npm run dev`: start Vite dev server
- `npm run build`: type-check and create a production build
- `npm run preview`: preview the production build locally
- `npm run lint`: run ESLint
- `npx tsc .\scripts\generate-suggestions-script.ts`: autogenerate text suggestions for the search bar based on \src\component files.

## Project Structure 🗂️
- `index.html`: Vite entry HTML
- `src/`: source code (components, styles, utilities)
  - `src/components/`: reusable UI (e.g., `header`, `footer`, etc.)
  - `src/assets/`: static assets
  - `src/App.tsx`, `src/main.tsx`: app bootstrap
- `public/`: public static files
- `scripts/`: project scripts/ 

## Build & Deploy 🚀
1. Build artifacts: `npm run build` (output in `dist/`)
2. Deploy `dist/` to any static host (Nginx, Apache, Vercel, Netlify, etc.)

