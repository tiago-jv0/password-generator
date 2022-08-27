import path from 'path'
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    cache: false
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
}
