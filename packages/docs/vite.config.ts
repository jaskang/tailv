import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc' // you can also use @vitejs/plugin-react-swc
import mdx from '@mdx-js/rollup'
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    {enforce: 'pre',...mdx(
    )  },
    react(),
  ],
  resolve: {
    alias: {
      '@zonda/react': resolve(__dirname, '../react/src'),
    },
  },
})
