import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { withZephyr } from 'vite-plugin-zephyr';
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), withZephyr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
