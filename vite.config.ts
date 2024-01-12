import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {//路径别名
    alias: {
      '~': resolve(__dirname,'src')
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [//添加插件
      'vue',
      'vue/macros',
      'vue-router'
      ]
    }),
    Components({ /* options */ }),
    WindiCSS(),
  ],
})
