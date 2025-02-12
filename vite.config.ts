import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/Hina-web/",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "/src/assets/styles/variables.scss" as *;
        @use "/src/assets/styles/mixins.scss" as *;
        @use "/src/assets/styles/extend.scss" as *;
        @use "/src/assets/styles/buttons.scss" as *;
        `

      }
    }
  }
})
