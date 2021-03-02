// vetur.config.js
/** @type {import('vls').VeturConfig} */
module.exports = {
  // **optional** default: `{}`
  // override vscode settings
  // Notice: It only affects the settings used by Vetur.
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true,
  },
  // **optional** default: `[{ root: './' }]`
  // support monorepos
  projects: [
    './packages/shared', // shorthand for only root.
    './packages/icons', // shorthand for only root.
    './packages/z-docs', // shorthand for only root.
    {
      root: './packages/elenext',
      tsconfig: './tsconfig.json',
    }, // shorthand for only root.
  ],
}
