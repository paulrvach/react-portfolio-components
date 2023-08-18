import { CardShowcase, cardShowcaseVariants } from '@acme/core';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@acme/core';

const meta: Meta<typeof cardShowcaseVariants> = {
  title: 'Components/CardShowcase',
  // decorators: [
  //   (Story) => (
  //     <div className='dark:dark bg-background w-full p-8 rounded flex items-center justify-center'>
  //       {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
  //       <Story />
  //     </div>
  //   ),
  // ],
};

export default meta;

export const Default = () => (
  <CardShowcase>
    <ExampleCard />
    <ExampleCard />
    <ExampleCard />
    <ExampleCard />
  </CardShowcase>
);

const ExampleCard: React.FC = () => {
  return (
    <Card className='max-w-sm'>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Lorem ipsum </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col max-h-48 '>
        <img
          alt='img'
          className='rounded-lg overflow-hidden object-cover transition-all duration-1000 hover:object-right-bottom cursor-pointer max-h-24'
          src='https://images.unsplash.com/photo-1682687220211-c471118c9e92'
        />
        <p>
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et.
        </p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
