import '../../../packages/acme-core/global.css';
import React from 'react';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  globalTypes: {
    darkMode: {
      defaultValue: false, // Enable dark mode by default on all stories
    },

    className: {
      defaultValue: 'dark', // Set your custom dark mode class name
    },
  },

  decorators: [
    (Story) => (
      <div className='dark:dark bg-background w-full p-8 rounded flex items-center justify-center'>
        <Story />
      </div>
    ),
  ],
};

export default preview;
