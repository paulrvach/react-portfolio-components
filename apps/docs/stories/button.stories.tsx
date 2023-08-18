import { Button, buttonVariants } from '@acme/core';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link', 'solid'],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' },
    }
  },
  args: {
    children: 'Button'
  }
};
export default meta;
type Story = StoryObj<typeof buttonVariants>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  // title: 'Components/Button',
  render: (args) => <Button {...args}/>,
};

