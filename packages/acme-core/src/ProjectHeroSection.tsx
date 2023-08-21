import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@utils';

const projectHeroSectionVariants = cva({});

export interface ProjectHeroSectionProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof projectHeroSectionVariants> {
  // href?: string;
  date: string;
}

const ProjectHeroSection = ({ children }: ProjectHeroSectionProps) => {
  return (
    <div className='text-primary flex flex-col gap-4 items-start my-24'>{children}</div>
  );
};

export interface HeroHeaderProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  icon?: string;
  title: string;
  date: string;
}

const HeroHeader = React.forwardRef<HTMLDivElement, HeroHeaderProps>(
  (
    {
      icon = 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
      title = 'Title Section',
      date = 'March 15, 2023',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          className,
          'flex flex-col justify-start gap-4 whitespace-nowrap'
        )}
        {...props}
      >
        <div className='h-[46px] w-[46px] '>
          <img className='object-fill mb-6' src={icon} alt='none' />
        </div>
        <h1 className='text-xl md:text-4xl leading-6 font-bold mt-0 mb-4 '>
          {title}
        </h1>
        <strong className='pb-4'>{date}</strong>
      </div>
    );
  }
);

export interface ProjectHeroSectionDescriptionProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  position: string;
  responsibilities: string[];
  team: string[];
}

const ProjectHeroSectionDescription = React.forwardRef<
  HTMLDivElement,
  ProjectHeroSectionDescriptionProps
>(({ className, position, responsibilities, team, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(className, 'flex flex-col gap-4 lg:grid lg:grid-flow-col')}
    >
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div className='flex flex-col gap-6'>
        <div>
          <strong className='text-justify tracking-wider'>POSITION</strong>
          <p className='pt-2'>{position}</p>
        </div>
        <div>
          <strong className='text-justify tracking-wider'>
            RESPONSABILITIES
          </strong>
          {responsibilities.map((response) => (
            <p className='pt-2' key={response}>
              {response}
            </p>
          ))}
        </div>
      </div>
      <div>
        <strong className='text-justify tracking-wider'>TEAM</strong>
        {team.map((teammate) => (
          <p className='pt-2' key={teammate}>
            {teammate}
          </p>
        ))}
      </div>
    </div>
  );
});

export {
  ProjectHeroSection,
  HeroHeader,
  projectHeroSectionVariants,
  ProjectHeroSectionDescription,
};
