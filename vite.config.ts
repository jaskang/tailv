import react from '@vitejs/plugin-react-swc'
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:[
      { find: '@', replacement: resolve(__dirname, 'src') },
    ]
  }
})
