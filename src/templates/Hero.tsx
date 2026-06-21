import { AppConfig } from '@/utils/AppConfig';

export const Hero = () => (
  <section className="
    bg-linear-to-br from-slate-900 to-blue-950 py-28 text-white
  "
  >
    <div className="mx-auto max-w-4xl px-4 text-center">
      <div className="
        mb-8 inline-flex items-center gap-2 rounded-full border border-white/20
        bg-white/10 px-4 py-1.5 text-sm text-blue-200
      "
      >
        <span className="size-2 animate-pulse rounded-full bg-green-400" />
        Primera reunión sin costo · Respuesta en menos de 24 hs
      </div>

      <h1 className="
        text-4xl font-extrabold tracking-tight
        sm:text-5xl
        lg:text-6xl
      "
      >
        Llevamos comercios y emprendedores
        {' '}
        <span className="text-blue-300">al mundo digital</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
        Página web propia, WhatsApp Business, Google Maps, redes sociales y más.
        Todo integrado y pensado para que tus clientes te encuentren y te elijan.
      </p>

      <div className="
        mt-10 flex flex-col items-center justify-center gap-4
        sm:flex-row
      "
      >
        <a
          href="#planes"
          className="
            rounded-lg bg-blue-600 px-8 py-3 font-semibold transition-colors
            hover:bg-blue-500
          "
        >
          Ver planes
        </a>
        <a
          href={`${AppConfig.whatsapp}?text=Hola!%20Me%20gustar%C3%ADa%20consultar%20sobre%20la%20primera%20reuni%C3%B3n%20sin%20costo`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-lg border border-white/30 px-8 py-3 font-semibold
            transition-colors
            hover:bg-white/10
          "
        >
          Primera reunión sin costo →
        </a>
      </div>
    </div>
  </section>
);
