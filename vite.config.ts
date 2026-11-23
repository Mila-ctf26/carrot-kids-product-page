import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/carrot-kids-product-page/',
  plugins: [tailwindcss()],
})