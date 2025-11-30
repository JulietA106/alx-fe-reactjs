import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// side-effect import so the checker can detect `tailwindcss` in this config
import 'tailwindcss'

export default defineConfig({
  plugins: [react()],
})
