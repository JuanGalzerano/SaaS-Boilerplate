import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { Env } from '@/libs/Env';

export async function GET(request: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');
  if (!url) {
    return NextResponse.json({ error: 'URL requerida' }, { status: 400 });
  }

  try {
    const apiUrl = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
    apiUrl.searchParams.set('url', url);
    apiUrl.searchParams.set('strategy', 'mobile');
    ['performance', 'seo', 'accessibility', 'best-practices'].forEach(c =>
      apiUrl.searchParams.append('category', c),
    );
    if (Env.PAGESPEED_API_KEY) {
      apiUrl.searchParams.set('key', Env.PAGESPEED_API_KEY);
    }

    const res = await fetch(apiUrl.toString(), { next: { revalidate: 3600 } });
    if (!res.ok) {
      return NextResponse.json({ error: 'Error al obtener métricas' }, { status: 502 });
    }

    const data = await res.json();
    const cats = data.lighthouseResult?.categories;

    return NextResponse.json({
      performance: Math.round((cats?.performance?.score ?? 0) * 100),
      seo: Math.round((cats?.seo?.score ?? 0) * 100),
      accessibility: Math.round((cats?.accessibility?.score ?? 0) * 100),
      bestPractices: Math.round((cats?.['best-practices']?.score ?? 0) * 100),
      fetchedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
