# Doodle Challenge

A modern chat application built with **React**, **TypeScript**, and **Vite**.  
Features real-time messaging UI, input validation, modular components, and robust error handling.

---

## Features

- ⚡️ Fast development with Vite
- 🛡️ Type-safe codebase (TypeScript)
- 🎨 Modular, SCSS-based styling
- ✅ Form validation with Zod
- 🧪 Unit tests with Vitest & React Testing Library
- 🧩 Error boundaries for robust UX
- 🔒 API token authentication (via environment variable)
- ♿ Accessible UI

---

## Future Improvements
Given more time, the following enhancements would further improve the project:

🌀 Lazy Loading Chat Messages: Load only a limited number of recent messages initially and fetch older messages as the user scrolls up (infinite scroll). Improves performance and reduces initial data load.

✅ End-to-End Testing: Integrate Cypress or Playwright to ensure full application workflows behave as expected.

💬 WebSocket Integration: With the current API only poling-based approach is possible to get new messages. Replace polling-based messaging with real-time updates using WebSocket for a more dynamic chat experience.

👥 User Presence Indicators: Show which users are online/offline in real time.

⚙️ CI/CD Setup: Add GitHub Actions or another CI pipeline for automated testing, linting, and deployment.

📦 Docker Support: Provide Docker configuration for easier deployment and consistent local environments.

📊 Advanced Performance Monitoring: Integrate Lighthouse CI or web-vitals reporting for ongoing performance insights.

## 🚀 Performance Metrics

Measured using Chrome DevTools Performance Panel (Local):

| Metric                              | Value   | Rating   |
|-------------------------------------|---------|----------|
| **Largest Contentful Paint (LCP)**  | 1.15s   | ✅ Good  |
| **Cumulative Layout Shift (CLS)**   | 0       | ✅ Good  |
| **Interaction to Next Paint (INP)** | 8ms     | ✅ Good  |

These results reflect excellent real-world performance:

- **LCP** < 2.5s ensures fast visual load
- **CLS** = 0 means no unexpected layout shifts
- **INP** < 200ms ensures quick interactivity (actual = 8ms)

> 🧪 Tested on: macOS (Chrome), local build

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone git@github.com:NovoManu/doodle-challenge.git
   cd doodle-challenge
   ```

2. **Install dependencies:**
   ```sh
   yarn install
   # or
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the project root with:
   ```
   VITE_API_URL=http://localhost:3000
   VITE_AUTH_TOKEN=your_api_token_here
   ```

---

## Usage

### Start the development server

```sh
yarn dev
# or
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Build for production

```sh
yarn build
# or
npm run build
```

### Run tests

```sh
yarn test
# or
npm test
```

### Lint the code

```sh
yarn lint
# or
npm run lint
```

---

## Project Structure

```
src/
  api/         # API service layer
  components/  # Reusable UI components
  layout/      # App layout
  utils/       # Constants & validation
  views/       # Main app views
  types.ts     # TypeScript types
  App.tsx      # App entry point
public/        # Static assets
```

---

## Environment Variables

- `VITE_API_URL` – Base URL for the backend API (default: `http://localhost:3000`)
- `VITE_AUTH_TOKEN` – Bearer token for API authentication

---

## License

This project is for educational/demo purposes.
