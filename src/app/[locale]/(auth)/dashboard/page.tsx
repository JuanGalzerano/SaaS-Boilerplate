import { setRequestLocale } from 'next-intl/server';
import { ChangeRequestForm } from '@/features/dashboard/ChangeRequestForm';
import { ChangeRequestList } from '@/features/dashboard/ChangeRequestList';
import { PageSpeedWidget } from '@/features/dashboard/PageSpeedWidget';
import { SiteStatusCard } from '@/features/dashboard/SiteStatusCard';
import { TitleBar } from '@/features/dashboard/TitleBar';

export default async function DashboardIndexPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <TitleBar
        title="Mi presencia digital"
        description="Panel de control de tu presencia online"
      />

      <div className="
        space-y-4 p-4
        md:p-6
      "
      >
        <div className="
          grid gap-4
          md:grid-cols-2
        "
        >
          <SiteStatusCard />
          <PageSpeedWidget />
        </div>

        <ChangeRequestForm />
        <ChangeRequestList />
      </div>
    </>
  );
}
