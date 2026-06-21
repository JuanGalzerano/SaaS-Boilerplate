import type { Metadata } from 'next';
import { SignUp } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';

type SignUpPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: SignUpPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'SignUp',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function SignUpPage(props: SignUpPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const clerkAppearance = {
    variables: {
      colorPrimary: '#52BE80',
      colorBackground: '#FAFAF8',
      fontFamily: 'Space Grotesk, system-ui, sans-serif',
      borderRadius: '12px',
    },
  };

  return (
    <SignUp path={getI18nPath('/sign-up', locale)} appearance={clerkAppearance} />
  );
};
