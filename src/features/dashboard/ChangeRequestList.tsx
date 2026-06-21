import { auth } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import { db } from '@/libs/DB';
import { changeRequestSchema } from '@/models/Schema';

const STATUS_CONFIG: Record<string, { label: string; className: string }> = {
  pending: { label: 'Pendiente', className: 'bg-yellow-100 text-yellow-700' },
  in_progress: { label: 'En progreso', className: 'bg-blue-100 text-blue-700' },
  done: { label: 'Completado', className: 'bg-green-100 text-green-700' },
};

export const ChangeRequestList = async () => {
  const { orgId } = await auth();
  if (!orgId) {
    return null;
  }

  const requests = await db
    .select()
    .from(changeRequestSchema)
    .where(eq(changeRequestSchema.orgId, orgId))
    .orderBy(desc(changeRequestSchema.createdAt))
    .limit(10);

  if (requests.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold text-slate-900">Solicitudes anteriores</h3>
        <p className="mt-2 text-sm text-slate-500">
          No hay solicitudes aún. Usá el formulario de arriba para pedir un cambio.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="mb-4 font-semibold text-slate-900">Solicitudes anteriores</h3>
      <ul className="space-y-3">
        {requests.map((req) => {
          const s = STATUS_CONFIG[req.status] ?? STATUS_CONFIG.pending!;
          return (
            <li
              key={req.id}
              className="
                flex items-start justify-between gap-3 rounded-lg bg-slate-50
                p-3
              "
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-slate-800">{req.title}</p>
                <p className="mt-0.5 text-xs text-slate-400">
                  {req.createdAt.toLocaleDateString('es-AR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <span
                className={`
                  shrink-0 rounded-full px-2 py-0.5 text-xs font-medium
                  ${s.className}
                `}
              >
                {s.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
