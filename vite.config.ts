import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'
export default defineConfig({
  plugins: [vue(),svgLoader({
    defaultImport: 'raw' // or 'url'
  })],
  // base:"/dist/",
  // publicDir:'public',
  resolve:{
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/exports.ts'),
      name: 'cjsz-player',
      fileName: (format) => `build.${format}.ts`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})