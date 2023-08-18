import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@utils';

const projectCardVariants = cva({});

export interface ProjectCardProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof projectCardVariants> {
  // href?: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  return <div>ProjectCard</div>;
};

export { ProjectCard, projectCardVariants };
