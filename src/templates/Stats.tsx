const stats = [
  { value: '97%', label: 'de los consumidores busca negocios locales online antes de visitar' },
  { value: '3 seg', label: 'es lo que tarda alguien en decidir si confía en un negocio digital' },
  { value: '76%', label: 'de quienes buscan algo cercano visitan el negocio ese mismo día' },
  { value: '+40%', label: 'más consultas reciben los negocios con perfil de Google optimizado' },
];

export const Stats = () => (
  <section
    id="porque"
    className="border-b border-black/10 bg-cream-surface py-20"
  >
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-12">
        <div className="mb-4 flex items-center gap-2">
          <span className="size-1.5 animate-dot-pulse rounded-full bg-verde" />
          <span className="
            text-xs font-semibold tracking-widest text-ink uppercase
          "
          >
            ¿Por qué importa?
          </span>
        </div>
        <h2 className="
          text-[clamp(26px,4vw,38px)] font-extrabold tracking-tight text-ink
        "
        >
          Lo que cambia cuando tu negocio está online
        </h2>
        <p className="mt-3 max-w-md text-base font-light text-ink-muted">
          Cada día sin presencia digital es una oportunidad que va a la competencia.
        </p>
      </div>

      <div className="
        grid grid-cols-2 gap-8 text-center
        md:grid-cols-4
      "
      >
        {stats.map(s => (
          <div key={s.value}>
            <p className="
              text-[clamp(32px,4vw,44px)] leading-none font-extrabold text-verde
            "
            >
              {s.value}
            </p>
            <p className="mt-2 text-sm/relaxed font-light text-ink-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
