import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { db } from '@/libs/DB';
import { clientSiteSchema } from '@/models/Schema';
import { ToggleSiteButton } from './ToggleSiteButton';

export const SiteStatusCard = async () => {
  const { orgId, orgRole } = await auth();
  if (!orgId) {
    return null;
  }

  const [site] = await db
    .select()
    .from(clientSiteSchema)
    .where(eq(clientSiteSchema.orgId, orgId));

  const isAdmin = orgRole === 'org:admin';

  if (!site) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold text-slate-900">Estado del sitio</h3>
        <p className="mt-2 text-sm text-slate-500">
          {isAdmin
            ? 'No hay sitio configurado para esta organización aún.'
            : 'Tu sitio está siendo preparado. Juan estará en contacto pronto.'}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-900">Estado del sitio</h3>
        <span
          className={`
            inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs
            font-medium
            ${
    site.isActive
      ? 'bg-green-100 text-green-700'
      : `bg-slate-100 text-slate-500`
    }
          `}
        >
          <span
            className={`
              size-1.5 rounded-full
              ${
    site.isActive ? 'bg-green-500' : 'bg-slate-400'
    }
            `}
          />
          {site.isActive ? 'Activo' : 'Inactivo'}
        </span>
      </div>

      <a
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-3 block truncate text-sm font-medium text-blue-600
          hover:text-blue-800
        "
      >
        {site.url}
      </a>

      <p className="mt-1 text-sm text-slate-500">
        Plan:
        {' '}
        <span className="font-medium capitalize">{site.plan}</span>
      </p>

      {isAdmin && (
        <div className="mt-4">
          <ToggleSiteButton siteId={site.id} isActive={site.isActive} />
        </div>
      )}
    </div>
  );
};
