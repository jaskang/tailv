import type { UserConfig } from 'vite';
import path from 'path';
// import { lessPlugin } from './scripts/plugins/lessplugin';
const config: UserConfig = {
  outDir: 'build',
  alias: {},
  minify: false
  // plugins: [lessPlugin]
};

export default config;
