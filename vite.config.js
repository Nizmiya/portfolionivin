import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.mp4') || assetInfo.name.endsWith('.mov')) {
            return 'videos/[name][extname]'
          }
          if (assetInfo.name.endsWith('.jpg') || assetInfo.name.endsWith('.jpeg') || assetInfo.name.endsWith('.png')) {
            return 'images/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
}) 