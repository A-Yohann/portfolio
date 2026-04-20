import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-files',
      closeBundle() {
        copyFileSync('.htaccess', 'dist/.htaccess')
        copyFileSync('contact.php', 'dist/contact.php')
      }
    }
  ],
})