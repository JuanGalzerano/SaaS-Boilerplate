import { cn } from '@/utils/Helpers';

export const Background = (props: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn('w-full border-b border-black/10 bg-cream-surface', props.className)}>
    {props.children}
  </div>
);
