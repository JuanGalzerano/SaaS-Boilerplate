import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { clientSiteSchema } from '../src/models/Schema';

async function main() {
  const pool = new Pool({
    connectionString: 'postgresql://postgres:postgres@127.0.0.1:5432/postgres',
  });

  const db = drizzle({ client: pool });

  await db.insert(clientSiteSchema).values({
    orgId: 'org_3FSqhLfWoeGu0lUjtGVPJbeT1T7',
    clientName: 'JG Asistencia Digital',
    url: 'https://jgasistenciadigital.com',
    isActive: true,
    plan: 'pro',
  }).onConflictDoNothing();

  console.log('✓ Sitio insertado');
  await pool.end();
}

main().catch(console.error);
