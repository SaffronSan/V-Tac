// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/V-Tac/' : '/'
});
