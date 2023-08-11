import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      // 'outDir': './types'
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'react-mount',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `${format}/index.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-dom/client', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
