import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: { "process.env": {} },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      exclude: ['src/main.ts', '**/stories/**', '**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp,storybook}/**', '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*']

    },
  },
})
