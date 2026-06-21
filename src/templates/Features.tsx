import { Background } from '@/components/Background';
import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';

const features = [
  {
    title: 'Página web profesional',
    description: 'Sitio adaptado a tu rubro, con identidad visual propia. Multipágina o de una sola página según lo que tu negocio necesite.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 0h24v24H0z" stroke="none" />
        <circle cx="12" cy="12" r="9" />
        <path d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp Business',
    description: 'Configuración de mensajes automáticos personalizados para tu rubro. Tus clientes siempre reciben una respuesta, incluso fuera del horario laboral.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1H15a.5.5 0 0 0 0 1" />
      </svg>
    ),
  },
  {
    title: 'Google Maps y SEO Local',
    description: 'Optimización avanzada de Google Business para que aparezcas primero cuando alguien busca cerca tuyo. Más visibilidad, más clientes.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M12 21C8 17 5 14 5 10a7 7 0 0 1 14 0c0 4-3 7-7 11z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Identidad visual',
    description: 'Asesoría de imagen para que tu perfil y tu web transmitan profesionalismo desde el primer vistazo. Coherencia visual en todos tus canales.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5M10 14L20 4M15 4h5v5" />
      </svg>
    ),
  },
  {
    title: 'Respuesta en menos de 24 hs',
    description: 'Atención real, sin chatbots. Respondemos rápido y en lenguaje claro, sin tecnicismos. Sabés siempre con quién estás hablando.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 0h24v24H0z" stroke="none" />
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: 'Encuentro presencial en CABA',
    description: 'Nos podemos reunir en persona para entender tu negocio y trabajar juntos desde el principio. También por videollamada si preferís.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" />
      </svg>
    ),
  },
];

export const Features = () => (
  <section id="servicios">
    <Background>
      <Section
        subtitle="Lo que hacemos"
        title="Funcionalidades integradas"
        description="Todo lo que necesitás para tener una presencia digital real y profesional."
      >
        <div className="
          grid grid-cols-1 gap-x-3 gap-y-8
          md:grid-cols-3
        "
        >
          {features.map(f => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title}>
              {f.description}
            </FeatureCard>
          ))}
        </div>
      </Section>
    </Background>
  </section>
);
