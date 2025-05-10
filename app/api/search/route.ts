import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// Configuración necesaria para exportación estática
// export const dynamic = 'force-dynamic';
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source);
