import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@utils';

const socialMediaButtonVariants = cva({});

export interface SocialMediaButtonProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof socialMediaButtonVariants> {
  // href?: string;
}

const SocialMediaButton = (props: SocialMediaButtonProps) => {
  return <div>SocialMediaButton</div>;
};

export { SocialMediaButton, socialMediaButtonVariants };
