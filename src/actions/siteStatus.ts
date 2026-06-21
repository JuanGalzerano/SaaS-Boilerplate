'use server';

import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { db } from '@/libs/DB';
import { clientSiteSchema } from '@/models/Schema';

export async function toggleSiteStatus(siteId: number, currentStatus: boolean) {
  const { userId, orgId, orgRole } = await auth();
  if (!userId || !orgId || orgRole !== 'org:admin') {
    throw new Error('No autorizado — se requiere rol de administrador');
  }

  await db
    .update(clientSiteSchema)
    .set({ isActive: !currentStatus })
    .where(eq(clientSiteSchema.id, siteId));

  revalidatePath('/dashboard');
}
