-- ============================================================
-- Vitrina · Esquema multi-tenant para el sistema de catálogos
-- Ejecutar en el SQL Editor de Supabase.
-- ============================================================

-- Negocios (cada cliente de Vitrina)
create table if not exists businesses (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  logo_url text,
  theme jsonb default '{}'::jsonb,
  whatsapp text,
  created_at timestamptz default now()
);

-- Catálogos (colecciones de un negocio)
create table if not exists catalogs (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references businesses(id) on delete cascade,
  slug text not null,
  title text not null,
  season text,
  published boolean default true,
  unique (business_id, slug)
);

-- Productos
create table if not exists catalog_items (
  id uuid primary key default gen_random_uuid(),
  catalog_id uuid not null references catalogs(id) on delete cascade,
  business_slug text not null,
  sort_order int default 0,
  name text not null,
  category text not null,
  price numeric(10,2) not null default 0,
  blurb text,
  description text,
  badge text,
  materials text,
  dimensions text,
  finishes jsonb default '[]'::jsonb,
  art_url text,
  tint text default '#F4EDE4'
);

create index if not exists idx_items_business on catalog_items (business_slug);

-- Analítica ligera
create table if not exists catalog_events (
  id bigint generated always as identity primary key,
  event text not null,
  payload jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

-- RLS: lectura pública del catálogo publicado
alter table businesses enable row level security;
alter table catalogs enable row level security;
alter table catalog_items enable row level security;
alter table catalog_events enable row level security;

create policy "public read businesses" on businesses
  for select using (true);

create policy "public read catalogs" on catalogs
  for select using (published);

create policy "public read items" on catalog_items
  for select using (true);

create policy "public insert events" on catalog_events
  for insert with check (true);

-- ============================================================
-- Seed del catálogo demo "Casa Lum"
-- ============================================================
insert into businesses (slug, name, whatsapp) values
  ('casa-lum', 'Casa Lum', '15551234567')
on conflict (slug) do nothing;

insert into catalogs (business_id, slug, title, season)
select id, 'oi-2026', 'Colección Otoño/Invierno 2026', 'Otoño/Invierno 2026'
from businesses where slug = 'casa-lum'
on conflict do nothing;

insert into catalog_items (catalog_id, business_slug, sort_order, name, category, price, blurb, badge, materials, dimensions, finishes, art_url, tint)
select c.id, 'casa-lum', s.sort_order, s.name, s.category, s.price, s.blurb, s.badge, s.materials, s.dimensions, s.finishes::jsonb, s.art_url, s.tint
from catalogs c
join businesses b on b.id = c.business_id
cross join (values
  (1, 'Sofá Liria', 'Salón', 1290, 'Sofá modular de tres plazas en lino arena.', 'Top ventas', 'Lino 100% natural, espuma HR, eucalipto FSC', '220 × 92 × 78 cm', '["Arena","Terracota","Verde salvia"]', '/products/sofa-liria.svg', '#F6E7DE'),
  (2, 'Sillón Bruma', 'Salón', 640, 'Sillón lounge de bouclé con patas de roble.', null, 'Bouclé reciclado, roble macizo', '78 × 80 × 84 cm', '["Crudo","Gris humo","Mantequilla"]', '/products/sillon-bruma.svg', '#F4EDE4'),
  (3, 'Lámpara Arco', 'Iluminación', 289, 'Lámpara de arco en latón mate con cúpula de lino.', 'Nuevo', 'Latón mate, lino, mármol', 'Alto 165 cm', '["Latón mate","Negro tinta"]', '/products/lampara-arco.svg', '#F7EDDC'),
  (4, 'Mesa Perla', 'Comedor', 870, 'Mesa de comedor en roble macizo para 6.', null, 'Roble europeo, aceite natural', '180 × 90 × 75 cm', '["Roble natural","Roble tostado"]', '/products/mesa-perla.svg', '#F1E7D8'),
  (5, 'Jarrón Duna', 'Decoración', 120, 'Jarrón cerámico esmaltado, torneado a mano.', 'Edición limitada', 'Cerámica alta temperatura', 'Ø 18 cm × 32 cm', '["Arena","Arcilla","Marfil"]', '/products/jarron-duna.svg', '#F6E7DE'),
  (6, 'Espejo Solar', 'Decoración', 210, 'Espejo de pared con marco de latón cepillado.', null, 'Latón cepillado, espejo 5 mm', 'Ø 80 cm', '["Latón","Cobre envejecido"]', '/products/espejo-solar.svg', '#F7EDDC'),
  (7, 'Estantería Cima', 'Salón', 540, 'Estantería modular en nogal americano.', null, 'Nogal, acero pavonado', '160 × 32 × 190 cm', '["Nogal","Negro tinta"]', '/products/estanteria-cima.svg', '#F1E7D8'),
  (8, 'Silla Nube', 'Comedor', 190, 'Silla tapizada en terciopelo verde musgo.', null, 'Terciopelo de algodón, haya', '48 × 54 × 82 cm', '["Verde musgo","Terracota","Azul noche"]', '/products/silla-nube.svg', '#EDEFE7'),
  (9, 'Maceta Terra', 'Exterior', 95, 'Maceta de barro cocido con plato incluido.', null, 'Barro cocido artesanal', 'Ø 34 cm × 30 cm', '["Terracota","Blanco cal","Verde oliva"]', '/products/maceta-terra.svg', '#F6E7DE')
) as s(sort_order, name, category, price, blurb, badge, materials, dimensions, finishes, art_url, tint)
where b.slug = 'casa-lum' and c.slug = 'oi-2026'
on conflict do nothing;
