import { Badge, badgeVariants, type BadgeProps } from '@acme/core';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<BadgeProps> = {
  title: 'Components/Badge',
  decorators: [
    (Story) => (
      <div className='dark:dark bg-background w-full p-8 rounded flex items-center justify-center'>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  args: {
    children: 'badge',
  },
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'outline', 'round'],
      control: { type: 'select' },
      default: 'default',
    },
  },
};

export default meta;

export const Default = (args) => <Badge {...args} />;
