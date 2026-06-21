import { AppConfig } from '@/utils/AppConfig';

const checkIcon = (
  <svg className="mt-0.5 size-4 shrink-0 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Presencia básica',
    description: 'Para quienes todavía no tienen ninguna presencia online y quieren dar el primer paso.',
    featured: false,
    ctaLabel: 'Quiero más información',
    ctaMessage: 'Hola!%20Me%20interesa%20el%20plan%20Starter%20de%20JG%20Asistencia%20Digital',
    features: [
      'Página web informativa de una sola página',
      'Asesoría de identidad visual para tu perfil',
      'Configuración de WhatsApp Business con mensajes automáticos',
      'Optimización de Google Business y Google Maps',
      'Videollamada incluida',
      'Encuentro presencial en CABA',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    subtitle: 'Presencia completa',
    description: 'Tu negocio online de verdad: web profesional, clientes que llegan solos y todo conectado.',
    featured: true,
    badge: 'Más elegido',
    ctaLabel: 'Quiero más información',
    ctaMessage: 'Hola!%20Me%20interesa%20el%20plan%20Pro%20de%20JG%20Asistencia%20Digital',
    features: [
      'Web multipágina con identidad visual adaptada a tu rubro',
      'Sitio conectado directo a tu WhatsApp — los clientes escriben con un clic',
      'Formulario de contacto con envío instantáneo a WhatsApp',
      'Mensajes automáticos personalizados para tu rubro',
      'Optimización avanzada + recomendaciones de SEO local',
      'Videollamada incluida',
      'Encuentro presencial en CABA',
    ],
  },
  {
    id: 'personalizado',
    name: 'Personalizado',
    subtitle: 'A tu medida',
    description: '¿Necesitás algo que no entra en ningún plan? Diseñamos juntos una solución específica para tu negocio.',
    featured: false,
    ctaLabel: 'Hablemos de tu proyecto',
    ctaMessage: 'Hola!%20Me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto%20personalizado%20de%20presencia%20digital',
    features: [
      'Diagnóstico inicial gratuito',
      'Presupuesto sin compromiso',
      'Combinación de servicios a medida',
      'Soporte definido según el proyecto',
      'Escalable según las necesidades de tu negocio',
      'Videollamada incluida',
    ],
  },
];

export const Pricing = () => (
  <section id="planes" className="py-20">
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-12 text-center">
        <p className="
          mb-2 text-sm font-bold tracking-widest text-blue-600 uppercase
        "
        >
          Planes
        </p>
        <h2 className="text-3xl font-bold text-slate-900">
          Elegí tu nivel de presencia digital
        </h2>
        <p className="mt-3 text-slate-500">
          Tres planes pensados para distintos momentos del negocio. Sin precios ocultos, sin letras chicas.
        </p>
      </div>

      <div className="
        grid grid-cols-1 gap-6
        md:grid-cols-3
      "
      >
        {plans.map(plan => (
          <div
            key={plan.id}
            className={`
              relative flex flex-col rounded-2xl border p-6
              ${
          plan.featured
            ? 'border-blue-500 shadow-lg shadow-blue-100'
            : 'border-slate-200'
          }
            `}
          >
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="
                  rounded-full bg-blue-600 px-3 py-1 text-xs font-bold
                  text-white
                "
                >
                  {plan.badge}
                </span>
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              <p className="text-sm font-medium text-blue-600">{plan.subtitle}</p>
              <p className="mt-3 text-sm text-slate-500">{plan.description}</p>
            </div>

            <ul className="mt-6 grow space-y-2">
              {plan.features.map(feature => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  {checkIcon}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={`${AppConfig.whatsapp}?text=${plan.ctaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                mt-8 block rounded-lg px-4 py-3 text-center text-sm
                font-semibold transition-colors
                ${
          plan.featured
            ? `
              bg-blue-600 text-white
              hover:bg-blue-500
            `
            : `
              border border-slate-300 text-slate-700
              hover:bg-slate-50
            `
          }
              `}
            >
              {plan.ctaLabel}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
