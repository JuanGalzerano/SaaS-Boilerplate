import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Features } from '@/templates/Features';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { Navbar } from '@/templates/Navbar';

type IndexProps = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: 'JG Asistencia Digital — Presencia digital para comercios y emprendedores',
  description: 'Llevamos comercios y emprendedores al mundo digital: página web propia, WhatsApp Business, Google Maps, redes sociales y más. Primera reunión sin costo.',
};

export default async function Index(props: IndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}
