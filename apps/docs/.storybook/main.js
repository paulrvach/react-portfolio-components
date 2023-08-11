const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here

    return {
      ...config,
      resolve: {
        alias: {
          '@acme/core': path.resolve(__dirname, '../../../packages/acme-core/'),
          '@ui': path.resolve(__dirname, '../../../packages/acme-core/src'),
          '@utils': path.resolve(__dirname, '../../../packages/acme-utils/src/index.tsx'),
        },
      },
    };
  },
};
