import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,             // Enable global test APIs (like `describe`, `it`)
    environment: 'jsdom',      // Simulate a browser environment
    setupFiles: './src/setupTests.js', // Configure setup files
  }
})
