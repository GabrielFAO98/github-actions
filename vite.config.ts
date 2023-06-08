import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'gabrielfao98.github.io/github-actions/',
  plugins: [react()],
})
