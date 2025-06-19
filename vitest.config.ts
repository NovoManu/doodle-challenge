import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    include: ["src/**/*.test.tsx", "src/**/*.test.ts", "src/**/*.spec.tsx", "src/**/*.spec.ts"]
  },
});
