import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/imgAPI": {
        target: "https://sm.ms/api/v2",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/imgAPI/, ""),
      },
    },
  },
  // router config
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  // less support
  css: {
    preprocessorOptions: {
      less:{
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#ff9900',
          'border-radius-base': '6px'
        }
      }
    }
  },
})
