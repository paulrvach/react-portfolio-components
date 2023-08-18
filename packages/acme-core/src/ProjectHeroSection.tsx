import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@utils';

const projectHeroSectionVariants = cva({});

export interface ProjectHeroSectionProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof projectHeroSectionVariants> {
  // href?: string;
}

const ProjectHeroSection = (props: ProjectHeroSectionProps) => {
  return <div>ProjectHeroSection</div>;
};

export { ProjectHeroSection, projectHeroSectionVariants };
