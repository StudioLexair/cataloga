/**
 * Capa de datos de Vitrina.
 *
 * El catálogo demo funciona 100% con datos locales (`data/catalog.ts`) para que
 * la demo nunca dependa de la red. Este módulo deja preparada la conexión con
 * Supabase para convertir el proyecto en un sistema multi-tenant real
 * (catálogos por negocio, panel de administración, analítica de eventos…).
 *
 * Pasos para activarlo:
 * 1. Crea un proyecto en https://supabase.com y copia URL + anon key.
 * 2. Copia `.env.example` a `.env.local` y rellena las variables.
 * 3. Ejecuta el esquema de `supabase/schema.sql` en el SQL editor.
 * 4. Cambia `SOURCE` a "supabase" en tu página de catálogo.
 */

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const isSupabaseConfigured = Boolean(
  SUPABASE_URL && SUPABASE_ANON_KEY
);

export type CatalogRow = {
  id: string;
  business_slug: string;
  name: string;
  category: string;
  price: number;
  blurb: string;
  description: string;
  badge: string | null;
  materials: string | null;
  dimensions: string | null;
  finishes: string[] | null;
  art_url: string | null;
  tint: string | null;
};

/**
 * Catálogo público de un negocio, vía PostgREST (sin SDK: cero dependencias).
 * Devuelve `null` si Supabase no está configurado o no responde,
 * para que la UI pueda caer a datos locales.
 */
export async function fetchCatalog(
  businessSlug: string
): Promise<CatalogRow[] | null> {
  if (!isSupabaseConfigured) return null;

  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/catalog_items?business_slug=eq.${encodeURIComponent(
        businessSlug
      )}&order=sort_order.asc`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return null;
    return (await res.json()) as CatalogRow[];
  } catch {
    return null;
  }
}

/**
 * Evento de analítica (vista de producto, clic de WhatsApp…).
 * Inserta en la tabla `catalog_events` sin bloquear la UI.
 */
export async function trackEvent(
  event: string,
  payload: Record<string, unknown> = {}
): Promise<void> {
  if (!isSupabaseConfigured) return;

  try {
    await fetch(`${SUPABASE_URL}/rest/v1/catalog_events`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ event, payload }),
    });
  } catch {
    /* analytics nunca debe romper la demo */
  }
}
