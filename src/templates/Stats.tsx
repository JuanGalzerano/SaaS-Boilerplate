const stats = [
  {
    value: '97%',
    label: 'de los consumidores busca negocios locales online antes de visitar',
  },
  {
    value: '3 seg',
    label: 'es lo que tarda alguien en decidir si confía en un negocio digital',
  },
  {
    value: '76%',
    label: 'de quienes buscan algo cercano visitan el negocio ese mismo día',
  },
  {
    value: '+40%',
    label: 'más consultas reciben los negocios con perfil de Google optimizado',
  },
];

export const Stats = () => (
  <section id="porque" className="bg-slate-50 py-20">
    <div className="mx-auto max-w-5xl px-4">
      <div className="mb-12 text-center">
        <p className="
          mb-2 text-sm font-bold tracking-widest text-blue-600 uppercase
        "
        >
          ¿Por qué importa?
        </p>
        <h2 className="text-3xl font-bold text-slate-900">
          Lo que cambia cuando tu negocio está online
        </h2>
        <p className="mt-3 text-slate-500">
          Cada día sin presencia digital es una oportunidad que va a la competencia.
        </p>
      </div>

      <div className="
        grid grid-cols-2 gap-8
        md:grid-cols-4
      "
      >
        {stats.map(stat => (
          <div key={stat.value} className="text-center">
            <p className="text-4xl font-extrabold text-blue-700">{stat.value}</p>
            <p className="mt-2 text-sm/snug text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
