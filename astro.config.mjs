import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://legal.kdix.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
