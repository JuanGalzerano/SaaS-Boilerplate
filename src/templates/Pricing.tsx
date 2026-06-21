import { AppConfig } from '@/utils/AppConfig';

const WaIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const plans = [
  {
    id: 'starter',
    badge: 'Starter',
    badgeClass: 'bg-verde-light text-verde-dark',
    name: 'Presencia básica',
    description: 'Para quienes todavía no tienen ninguna presencia online y quieren dar el primer paso.',
    featured: false,
    ctaLabel: 'Quiero más información',
    ctaMessage: 'Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20plan%20Starter%20%E2%80%94%20Presencia%20b%C3%A1sica',
    groups: [
      { cat: 'Página web', items: ['Página web informativa de una sola página', 'Asesoría de identidad visual para tu perfil'] },
      { cat: 'WhatsApp Business', items: ['Asesoría para la configuración y mensajes automáticos'] },
      { cat: 'Google Business', items: ['Optimización de Google Business y Google Maps'] },
    ],
  },
  {
    id: 'pro',
    badge: 'Pro — Más elegido',
    badgeClass: 'bg-verde text-white',
    name: 'Presencia completa',
    description: 'Tu negocio online de verdad: web profesional, clientes que llegan solos y todo conectado.',
    featured: true,
    highlight: 'Sitio web conectado directo a tu WhatsApp — los clientes te escriben con un clic',
    ctaLabel: 'Quiero más información',
    ctaMessage: 'Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20plan%20Pro%20%E2%80%94%20Presencia%20completa',
    groups: [
      { cat: 'Página web', items: ['Web multipágina con identidad visual adaptada a tu rubro', 'Formulario de contacto con envío instantáneo a WhatsApp'] },
      { cat: 'WhatsApp Business', items: ['Asesoría para configurar mensajes automáticos personalizados para tu rubro'] },
      { cat: 'Google Maps', items: ['Optimización avanzada + recomendaciones de SEO local para aparecer primero'] },
    ],
  },
  {
    id: 'personalizado',
    badge: 'Personalizado',
    badgeClass: 'bg-ink text-white',
    name: 'A tu medida',
    description: '¿Necesitás algo que no entra en ningún plan? Diseñamos juntos una solución específica para tu negocio.',
    featured: false,
    ctaLabel: 'Hablemos de tu proyecto',
    ctaMessage: 'Hola%2C%20necesito%20algo%20personalizado.%20%C2%BFPodemos%20hablar%3F',
    groups: [
      { cat: 'Diagnóstico', items: ['Diagnóstico inicial gratuito', 'Presupuesto sin compromiso'] },
      { cat: 'Servicios', items: ['Combinación de servicios a medida', 'Soporte definido según el proyecto'] },
      { cat: 'A futuro', items: ['Escalable según las necesidades de tu negocio'] },
    ],
  },
];

export const Pricing = () => (
  <section id="planes" className="border-b border-black/10 bg-cream py-20">
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-12">
        <div className="mb-4 flex items-center gap-2">
          <span className="size-1.5 animate-dot-pulse rounded-full bg-verde" />
          <span className="
            text-xs font-semibold tracking-widest text-ink uppercase
          "
          >
            Planes
          </span>
        </div>
        <h2 className="
          text-[clamp(26px,4vw,38px)] font-extrabold tracking-tight text-ink
        "
        >
          Elegí tu nivel de presencia digital
        </h2>
        <p className="mt-3 max-w-md text-base font-light text-ink-muted">
          Tres planes pensados para distintos momentos del negocio. Sin precios ocultos, sin letras chicas.
        </p>
      </div>

      <div className="
        grid grid-cols-1 gap-4
        md:grid-cols-3
      "
      >
        {plans.map(plan => (
          <div
            key={plan.id}
            className={`
              relative flex flex-col gap-5 rounded-2xl border p-7 transition-all
              ${
          plan.featured
            ? 'animate-featured-glow border-2 border-verde'
            : `
              border-black/10
              hover:-translate-y-1 hover:border-black/20 hover:shadow-lg
            `
          }
            `}
          >
            <div className="flex flex-col gap-3">
              <span className={`
                w-fit rounded-full px-3 py-1 text-xs font-medium tracking-wide
                ${plan.badgeClass}
              `}
              >
                {plan.badge}
              </span>
              <div>
                <div className="
                  text-[22px] font-extrabold tracking-tight text-ink
                "
                >
                  {plan.name}
                </div>
                <div className="mt-2 text-sm/relaxed font-light text-ink-muted">
                  {plan.description}
                </div>
              </div>
              {plan.featured && 'highlight' in plan && (
                <div className="
                  rounded-xl border border-verde/25 bg-verde-light px-4 py-3
                  text-sm font-medium text-verde-dark
                "
                >
                  {plan.highlight}
                </div>
              )}
            </div>

            <div className="h-px bg-black/10" />

            <div className="grow space-y-4">
              {plan.groups.map(g => (
                <div key={g.cat}>
                  <p className="
                    mb-2 text-[10px] font-semibold tracking-widest text-ink-hint
                    uppercase
                  "
                  >
                    {g.cat}
                  </p>
                  <ul className="space-y-2">
                    {g.items.map(item => (
                      <li
                        key={item}
                        className="
                          flex items-start gap-2.5 text-sm font-light
                          text-ink-muted
                        "
                      >
                        <span className="
                          mt-1.5 size-1.5 shrink-0 rounded-full bg-verde
                        "
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="h-px bg-black/10" />

            <a
              href={`${AppConfig.whatsapp}?text=${plan.ctaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative flex items-center justify-center gap-2 overflow-hidden
                rounded-xl px-4 py-3.5 text-sm font-medium text-white
                transition-opacity
                hover:opacity-90
                ${
          plan.id === 'personalizado' ? 'bg-ink' : 'bg-verde'
          }
              `}
            >
              <WaIcon />
              {plan.ctaLabel}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
