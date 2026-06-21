import type { Metadata } from 'next';
import { SignIn } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';

type SignInPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: SignInPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function SignInPage(props: SignInPageProps) {
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
    <SignIn path={getI18nPath('/sign-in', locale)} appearance={clerkAppearance} />
  );
};
