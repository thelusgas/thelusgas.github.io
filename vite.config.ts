import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@core', replacement: path.resolve(__dirname, 'src/core') },
      {
        find: '@i18n',
        replacement: path.resolve(__dirname, 'src/i18n'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      { find: '@store', replacement: path.resolve(__dirname, 'src/store') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
    ],
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
});
