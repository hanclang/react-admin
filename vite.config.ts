import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import autoCSSModulePlugin from './plugins/autoCSSModulePlugin'
import mockServer from './plugins/mockServerPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BUILD_ENV === 'github' ? '/react-admin' : '/',
  define: {
    ROUTER_MODE: JSON.stringify(process.env.ROUTER_MODE),
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ['lodash-es'],
          '@ant-design/charts': ['@ant-design/charts'],
          antd: ['antd'],
          dayjs: ['dayjs'],
          'react-dom': ['react-dom'],
          react: ['react'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [
    react(),
    autoCSSModulePlugin(),
    // 默认开启生产环境mock
    mockServer({
      injectFile: path.resolve(process.cwd(), 'src/main.tsx'),
      injectCode: `
          import { mockXHR } from '../mock';
          mockXHR();
        `,
    }),
  ],
})
