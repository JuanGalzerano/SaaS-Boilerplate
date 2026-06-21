import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { db } from '@/libs/DB';
import { Env } from '@/libs/Env';
import { clientSiteSchema } from '@/models/Schema';

type Scores = {
  performance: number;
  seo: number;
  accessibility: number;
  bestPractices: number;
};

async function fetchPageSpeed(url: string): Promise<Scores | null> {
  try {
    const apiUrl = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
    apiUrl.searchParams.set('url', url);
    apiUrl.searchParams.set('strategy', 'desktop');
    ['performance', 'seo', 'accessibility', 'best-practices'].forEach(c =>
      apiUrl.searchParams.append('category', c),
    );
    if (Env.PAGESPEED_API_KEY) {
      apiUrl.searchParams.set('key', Env.PAGESPEED_API_KEY);
    }

    const res = await fetch(apiUrl.toString(), { next: { revalidate: 3600 } });
    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    const cats = data.lighthouseResult?.categories;
    return {
      performance: Math.round((cats?.performance?.score ?? 0) * 100),
      seo: Math.round((cats?.seo?.score ?? 0) * 100),
      accessibility: Math.round((cats?.accessibility?.score ?? 0) * 100),
      bestPractices: Math.round((cats?.['best-practices']?.score ?? 0) * 100),
    };
  } catch {
    return null;
  }
}

const ScoreCircle = ({ score, label }: { score: number; label: string }) => {
  const color
    = score >= 90
      ? 'text-green-600'
      : score >= 50
        ? 'text-yellow-500'
        : 'text-red-500';

  return (
    <div className="text-center">
      <p className={`
        text-3xl font-extrabold
        ${color}
      `}
      >
        {score}
      </p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
};

export const PageSpeedWidget = async () => {
  const { orgId } = await auth();
  if (!orgId) {
    return null;
  }

  const [site] = await db
    .select()
    .from(clientSiteSchema)
    .where(eq(clientSiteSchema.orgId, orgId));

  if (!site) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold text-slate-900">Rendimiento del sitio</h3>
        <p className="mt-2 text-sm text-slate-500">
          Disponible una vez que tu sitio esté configurado.
        </p>
      </div>
    );
  }

  const scores = await fetchPageSpeed(site.url);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-slate-900">Rendimiento del sitio</h3>
        <span className="text-xs text-slate-400">Desktop · PageSpeed</span>
      </div>

      {scores
        ? (
            <div className="grid grid-cols-4 gap-4">
              <ScoreCircle score={scores.performance} label="Velocidad" />
              <ScoreCircle score={scores.seo} label="SEO" />
              <ScoreCircle score={scores.accessibility} label="Accesib." />
              <ScoreCircle score={scores.bestPractices} label="Prácticas" />
            </div>
          )
        : (
            <p className="text-sm text-slate-400">
              No se pudieron obtener las métricas. Intentá más tarde.
            </p>
          )}

      <p className="mt-4 text-xs text-slate-400">
        Puntuación de 0–100. Verde ≥ 90, amarillo ≥ 50, rojo &lt; 50.
      </p>
    </div>
  );
};
