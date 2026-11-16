# MockMate — AI Mock Interview Studio

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-1.4-fbf0df?style=flat&logo=bun)](https://bun.sh/)
[![Vitest](https://img.shields.io/badge/Vitest-4.1-green?style=flat&logo=vitest)](https://vitest.dev/)

**MockMate** is an AI-powered mock interview studio and skill-building platform engineered for software engineers, engineering leaders, and technical candidates. It simulates realistic, high-pressure technical and behavioral interviews with real-time audio/visual interaction, progressive coaching, and evidence-grounded performance evaluations.

MockMate runs on a deterministic, client-side simulated architecture using realistic fixtures and browser storage—allowing you to test, rehearse, and explore all workflows immediately without external API keys or complex backend setup.

---

## 🌟 Key Features

### 🎙️ Pre-Flight Hardware Lobby (`/interview/lobby/[id]`)
- **Real-Time Mic & Audio Diagnostics:** Tests microphone input using the Web Audio API and `getUserMedia` with a live volume level meter.
- **Camera Feed Verification:** Provides a mirror preview to verify framing, lighting, and readiness before entering the interview.
- **Graceful Fallbacks:** Automatically supports simulated audio modes for environments without hardware camera/mic access.

### ⏱️ Live Multi-Phase Interview Studio (`/interview/session/[id]`)
- **Focused Split-Screen Workspace:** Interactive AI interviewer avatar on one side, candidate camera stream on the other.
- **6-Phase State Machine:** Guides candidates through authentic interview phases (Greeting, Technical Deep-Dive, System Architecture, Problem Solving, Candidate Q&A, and Wrap-Up).
- **Interactive Live Captions & Typewriter Streaming:** Real-time speech transcription and dynamic question delivery.
- **Real-Time Session Controls:** Live phase timers, answer submission, pause/resume, and safe exit confirmation.

### 📊 Evidence-Based Evaluation Reports (`/interview/report/[id]`)
- **Dual-Domain Scoring:** Independent rubrics for **Technical Competence** and **Communication Effectiveness**.
- **Timestamped Transcript Citations:** Verifiable feedback linked directly to candidate speech segments.
- **Speech & Cadence Analytics:** Filler word density, pace (words per minute), and interactive `<SpeechTimeline />` visualization.
- **Export Ready:** Clean, print-friendly stylesheet for saving reports to PDF.

### 🎯 Skill Coach & Targeted Drills (`/coach` & `/coach/session/[id]`)
- **Categorized Exercise Catalog:** Practice system design tradeoffs, STAR behavioral responses, and algorithm complexity.
- **Tiered Hint System:** Progressive 3-level hint unlocks to unstick candidates without giving away solutions.
- **Real-Time Word Counter & Model Answers:** Live response tracking with locked reference solutions unlocked upon submission.

### 📈 Longitudinal Progress & History (`/progress` & `/history`)
- **Trajectory Charts:** Visual performance progression over time rendered with Recharts.
- **Filterable Archive:** Complete history of completed interviews filterable by role, difficulty, and date.

### 🔒 Privacy-First Design & Theme System (`/settings`)
- **Client-Side Data Sovereignty:** All sessions and preferences persist locally (`localStorage`).
- **Data Governance:** Audit consent logs, toggle audio recording persistence, export data as JSON, or purge local storage in one click.
- **Ocean & Teal Design System:** Light, Dark, and System theme support with zero-flash inline hydration scripts.

---

## 🛠️ Technology Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) | React Server Components, client boundary layouts, Turbopack |
| **UI Library** | [React 19](https://react.dev/) | Concurrent rendering, latest hooks & actions |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org/) | Strict type checking with `@/*` path mapping |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | CSS-first configuration, `@theme inline`, and `tw-animate-css` |
| **Primitives** | [Radix UI](https://www.radix-ui.com/) | Accessible UI primitives (Dialog, Tabs, Accordion, Dropdown, etc.) |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent SVG icon set |
| **Visualizations** | [Recharts](https://recharts.org/) | Declarative SVG area and line charts |
| **Form Handling** | React Hook Form + Zod | Schema-validated forms and multi-step wizards |
| **Testing** | [Vitest](https://vitest.dev/) + React Testing Library | Fast unit and component test runner with jsdom |
| **Package Manager** | [Bun](https://bun.sh/) / npm | Fast dependency management and script execution |

---

## 📂 Project Structure

```text
mockmate/
├── public/                 # Static assets (favicons, robots.txt)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── (app)/          # App shell routes (persistent sidebar & topbar)
│   │   │   ├── dashboard/  # Overview & quick stats
│   │   │   ├── coach/      # Guided drills & exercise session runner
│   │   │   ├── history/    # Past interview sessions list
│   │   │   ├── progress/   # Performance analytics & score charts
│   │   │   └── settings/   # Theme, audio, and privacy controls
│   │   ├── interview/      # Full-width standalone interview workflows
│   │   │   ├── new/        # 4-step interview setup wizard
│   │   │   ├── lobby/[id]/ # Hardware audio/mic test lobby
│   │   │   ├── session/[id]/ # Live interactive interview studio
│   │   │   └── report/[id]/  # Performance score & transcript report
│   │   ├── globals.css     # Tailwind v4 styles & Ocean/Teal design tokens
│   │   ├── layout.tsx      # Root HTML shell with ThemeProvider
│   │   └── page.tsx        # Marketing landing page
│   ├── assets/             # Logos, marks, and interviewer avatars
│   ├── components/         # Reusable React components
│   │   ├── charts/         # Progress and speech timeline charts
│   │   ├── layout/         # AppShell, SiteHeader, SiteFooter
│   │   └── ui/             # Radix UI primitive wrappers (shadcn/ui style)
│   ├── data/
│   │   └── fixtures.ts     # Deterministic mock data (interviews, questions, drills)
│   ├── lib/
│   │   ├── repo.ts         # Client repository layer & localStorage bridge
│   │   ├── theme.tsx       # ThemeProvider (Light/Dark/System)
│   │   └── utils.ts        # Class merging and utility helpers
│   └── test/               # Vitest test suites
├── docs/                   # Architectural blueprints & migration records
├── bunfig.toml             # Bun runtime & package security configuration
├── components.json         # shadcn/ui configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Scripts & dependencies
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Bun** (recommended, v1.2+) or **Node.js** (v20+)
- A modern web browser (Chrome, Edge, Firefox, or Safari) with camera/microphone permissions enabled for live tests.

### Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone <repository-url>
cd MockMate

# Install dependencies using Bun (recommended)
bun install

# Or using npm
npm install
```

### Development Server

Start the local development server:

```bash
# Using Bun
bun run dev

# Or using npm
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🧪 Available Scripts

| Command | Description |
| :--- | :--- |
| `bun run dev` | Starts the Next.js development server with Turbopack |
| `bun run build` | Compiles the production build |
| `bun run start` | Runs the built production server locally |
| `bun run test` | Executes the Vitest test suite |
| `bun run test:watch` | Runs Vitest in interactive watch mode |
| `bun run lint` | Runs ESLint across the codebase |
| `bun run format` | Formats files with Prettier |

---

## 🏗️ Demo & Client-Side Architecture

MockMate is architected as an **instant-run demo build**:

1. **Deterministic Fixtures:** Initial data for interview questions, candidate roles, coaching exercises, and sample feedback are defined in `src/data/fixtures.ts`.
2. **Local Persistence:** Configured interviews and created sessions are stored in browser `localStorage` (prefixed with `interview-coach-`).
3. **No External Backend Needed:** You can practice, create new sessions, run audio checks, navigate the live session state machine, and generate detailed score reports without supplying API keys or connecting external cloud services.

---

## 🎨 Built with Lovable

This project was initially scaffolded with [Lovable](https://lovable.dev).

You can continue developing this project in the [Lovable Editor](https://lovable.dev/projects/120747b8-5a64-437c-b4f1-2389b3cb6071):
- **Ship faster:** Describe user flows and features, and Lovable assists in generating code.
- **Git Synchronization:** Commits pushed to `main` sync back directly into Lovable.
