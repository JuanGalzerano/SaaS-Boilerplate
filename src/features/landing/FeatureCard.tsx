export const FeatureCard = (props: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="
    rounded-2xl border border-black/10 bg-white p-6 transition-all
    hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md
  "
  >
    <div className="
      size-12 rounded-xl bg-verde-light p-2.5
      [&_svg]:size-full [&_svg]:stroke-verde-mid [&_svg]:stroke-[1.8]
    "
    >
      {props.icon}
    </div>
    <div className="mt-4 text-[17px] font-bold text-ink">{props.title}</div>
    <div className="mt-2 text-sm/relaxed font-light text-ink-muted">{props.children}</div>
  </div>
);
