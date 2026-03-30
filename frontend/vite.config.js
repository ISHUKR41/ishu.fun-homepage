import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@sections': path.resolve(__dirname, './src/components/sections'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@animations': path.resolve(__dirname, './src/animations'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom')) return 'vendor-react';
          if (id.includes('node_modules/react') && !id.includes('react-dom')) return 'vendor-react';
          if (id.includes('node_modules/framer-motion')) return 'vendor-motion';
          if (id.includes('node_modules/recharts') || id.includes('node_modules/d3')) return 'vendor-charts';
          if (id.includes('node_modules/@phosphor-icons')) return 'vendor-icons';
          if (id.includes('node_modules/gsap')) return 'vendor-gsap';
          if (id.includes('node_modules/three') || id.includes('node_modules/@react-three')) return 'vendor-three';
          if (id.includes('node_modules/lenis')) return 'vendor-lenis';
        },
      },
    },
    target: 'es2020',
  },
  server: {
    port: 3000,
    open: true,
  },
});
