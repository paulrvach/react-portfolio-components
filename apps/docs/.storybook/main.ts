import { dirname, join } from 'path';
import { mergeConfig } from 'vite';
const path = require('path');

export default {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('storybook-tailwind-dark-mode'),
  ],
  framework: getAbsolutePath('@storybook/react-vite'),

  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add storybook-specific dependencies to pre-optimization
      // optimizeDeps: {
      //   include: ['storybook-addon-designs'],
      // },

      resolve: {
        alias: [
          {
            find: '@acme/core',
            replacement: path.resolve(
              __dirname,
              '../../../packages/acme-core/'
            ),
          },
        ],
      },
    });
  },

  docs: {
    autodocs: true,
  },
};

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
