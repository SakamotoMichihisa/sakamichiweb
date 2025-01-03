import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  // Astro の SSR 設定
  output: 'server', // または 'hybrid'
  
  // Node アダプターを指定
  adapter: netlify(),       // Netlify用アダプター
});