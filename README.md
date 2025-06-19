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
