import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['preset.ts'],
  sourcemap: true,
  format: ['cjs', 'esm'],
  tsconfig: './tsconfig.node.json',
  dts: true,
  outDir: 'dist',
  external: ['tailwindcss', '@tailwindcss/forms', 'tailwindcss/colors.js'],
  // experimentalDts: true
})
