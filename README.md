# Machine Learning Club Website 🤖✨
### Srinivas Institute of Technology

[![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> Official web portal for the **Machine Learning Club at Srinivas Institute of Technology**. We build, break, and teach intelligent systems — from first notebooks to models that ship.

---

## 🌟 Features

- **🧠 Interactive Neural Background Canvas**: Real-time particle connection simulation visualizing deep neural pathways and synaptic nodes.
- **💎 Liquid Glass UI Design**: Modern backdrop blur, subtle borders, luminous gradient effects, and smooth animations.
- **📚 Learning Modules**: Structured pathways covering ML Foundations, Deep Learning, Computer Vision, Natural Language Processing, and Edge AI.
- **👥 Core Leadership & Team**: Showcase of club founders, co-founders, leads, and contributors.
- **⚡ High-Performance Architecture**: Powered by Vite and React for ultra-fast HMR and optimized production bundles.
- **📱 Responsive & Accessible**: Fully responsive across mobile, tablet, and desktop viewports with reduced motion accessibility support.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 18](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS custom tokens |
| **Bundler & Dev Server** | [Vite](https://vitejs.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | `Instrument Serif` & `Inter` |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or 20.x recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nidhishhhn-cmd/ML---CLUB-WEBSITE.git
   cd ML---CLUB-WEBSITE
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## 📜 Available Scripts

In the project root, you can run:

- `npm run dev` — Starts the local development server with Hot Module Replacement (HMR).
- `npm run build` — Compiles TypeScript (`tsc -b`) and bundles production assets via Vite into `dist/`.
- `npm run preview` — Locally previews the built production app.

---

## 📂 Project Structure

```text
├── .github/                      # GitHub configurations & CI workflows
│   ├── ISSUE_TEMPLATE/           # Bug report & feature request templates
│   ├── pull_request_template.md  # PR description template
│   └── workflows/ci.yml          # GitHub Actions CI build & verification
├── public/                       # Static public assets
├── src/                          # Application source code
│   ├── assets/                   # Images, media, and SVGs
│   ├── components/               # React components
│   │   ├── Hero.tsx              # Hero header with dynamic canvas
│   │   ├── Modules.tsx           # Club syllabus & modules section
│   │   ├── NeuralBackground.tsx  # Particle canvas animation component
│   │   └── Team.tsx              # Core team member showcase
│   ├── App.css                   # Component-specific styles
│   ├── App.tsx                   # Main React root component
│   ├── index.css                 # Design tokens, typography & Tailwind layers
│   └── main.tsx                  # React entry point
├── .gitattributes                # Line ending and binary file definitions
├── .gitignore                    # Git ignore specifications
├── index.html                    # HTML entry point
├── package.json                  # Dependencies and project metadata
├── postcss.config.js             # PostCSS Tailwind plugins
├── tailwind.config.js            # Tailwind theme configuration
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite project configuration
```

---

## 🌿 Git & Branching Strategy

- `main`: Production-ready, stable releases.
- `branch1`: Feature development and staging branch.
- Feature branches: `feature/<feature-name>` or `fix/<bug-name>`.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
