'use server';

import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { db } from '@/libs/DB';
import { changeRequestSchema } from '@/models/Schema';

export async function createChangeRequest(title: string, description: string) {
  const { userId, orgId } = await auth();
  if (!userId || !orgId) {
    throw new Error('No autorizado');
  }

  if (!title.trim() || !description.trim()) {
    throw new Error('Título y descripción son requeridos');
  }

  await db.insert(changeRequestSchema).values({
    orgId,
    userId,
    title: title.trim(),
    description: description.trim(),
    status: 'pending',
  });

  revalidatePath('/dashboard');
}
