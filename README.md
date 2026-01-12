````markdown
# Portfolio-Website
# Portfolio Website

Personal portfolio website showcasing projects, skills, and professional background.

## Overview

This website serves as a personal portfolio to present selected projects, technical skills, and work experience. It is built as a responsive single-page application with expandable project cards and smooth navigation between sections.

The portfolio is intended for recruiters and collaborators who want a clear overview of experience, technical competence, and recent work.

## Features

* Responsive layout for desktop and mobile
* Project section with expandable cards for additional details
* Image galleries for projects
* Smooth scrolling navigation
* Sticky navigation bar
* Clean and minimal UI

## Tech Stack

* **Frontend:** React
* **Build tool:** Vite
* **Styling:** CSS (Flexbox-based layout)
* **Deployment:** Render (Static Site)

## Project Structure

```
project-root/
├─ public/
│  └─ images/
│     └─ projects/
├─ src/
│  ├─ components/
│  │  ├─ Card/
│  │  ├─ ExpandableCard/
│  │  ├─ NavBar/
│  │  └─ ...
│  ├─ pages/
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ vite.config.js
└─ package.json
```

## Getting Started

### Prerequisites

* Node.js (LTS recommended)
* npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
```


## Author

Anni Mustonen

## License

This project is intended for personal portfolio use. All rights reserved.

## **Quick Start (Frontend)**

- **Folder:** `frontend` — the React + Vite app lives here.
- **Prerequisites:** Node.js (LTS) and npm.
- **Install dependencies:**

```powershell
cd frontend; npm install
```

- **Run development server:**

```powershell
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

- **Build for production:**

```powershell
npm run build
```

- **Preview production build locally:**

```powershell
npm run preview
```

## **Available Scripts**

- **dev:** runs `vite` (start dev server).
- **build:** runs `vite build` (production build).
- **preview:** runs `vite preview` (serve production build locally).
- **lint:** runs `eslint .` (check for lint issues).

## **Notes**

- If you use environment variables, set them in `frontend/.env` before running or deploying.
- Project contact details and email configuration are in `src/components/Contact/Contact.jsx`.

If you'd like, I can also add a small deployment section (Render/Vercel instructions) or a short contributing guide.

````
