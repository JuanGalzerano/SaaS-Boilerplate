import { cn } from '@/utils/Helpers';

export const Section = (props: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}) => (
  <div className={cn('@container px-3 py-16', props.className)}>
    {(props.title || props.subtitle || props.description) && (
      <div className="mb-12">
        {props.subtitle && (
          <div className="mb-4 flex items-center gap-2">
            <span className="size-1.5 animate-dot-pulse rounded-full bg-verde" />
            <span className="
              text-xs font-semibold tracking-widest text-ink uppercase
            "
            >
              {props.subtitle}
            </span>
          </div>
        )}
        {props.title && (
          <div className="
            text-[clamp(26px,4vw,38px)] font-extrabold tracking-tight text-ink
          "
          >
            {props.title}
          </div>
        )}
        {props.description && (
          <div className="mt-3 max-w-md text-base font-light text-ink-muted">{props.description}</div>
        )}
      </div>
    )}
    <div className="mx-auto max-w-5xl">{props.children}</div>
  </div>
);
