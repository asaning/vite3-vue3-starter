import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
      '#': join(__dirname, 'types')
    }
  }
})
