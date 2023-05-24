import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Comment from "unplugin-vue-components/vite";
import VueMacros from "unplugin-vue-macros";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros.vite({
      plugins: {
        vue: vue({
          // used to use $ref()
          reactivityTransform: true,
          script: {
            defineModel: true,
            propsDestructure: true
          }
        })
      }
    }),
    eslintPlugin(),
    Comment({
      dts: true,
      dirs: ["./src/components"]
    }),
    AutoImport({
      dts: true,
      eslintrc: {
        enabled: true
      },
      include: [
        /\.vue$/,
        /\.vue\?vue/ // .vue
      ],
      imports: ["vue", "vue-router", "pinia"]
    })
  ]
});
