# Cataloga — Sistema de catálogos digitales para negocios

**Cataloga** convierte los productos de un negocio en una experiencia de compra
premium: un link, una marca, pedidos por WhatsApp y métricas en tiempo real.

Este repositorio contiene el proyecto comercial completo:

1. **Landing de marketing** (`/`) — página comercial con hero, métricas,
   funcionalidades, proceso, testimonios, precios y FAQ.
2. **Catálogo demo interactivo** (`/catalogo`) — catálogo representativo
   *«Casa Lum · Muebles de autor»* con filtros, búsqueda, fichas de producto y
   consulta directa por WhatsApp. Es la demo que se muestra a clientes
   potenciales.

> Diseño editorial a medida · 100% vectorial (SVG) · Next.js 14 + Tailwind CSS ·
> desplegado en Vercel.

---

## Demo

| Página     | Ruta         | Qué muestra                                  |
| ---------- | ------------ | -------------------------------------------- |
| Marketing  | `/`          | Página comercial del sistema Cataloga         |
| Catálogo   | `/catalogo`  | Catálogo demo Casa Lum (colección OI 2026)   |

## Planes (pago único, en CUP)

| Plan         | Precio       | Base de datos | Incluye                                                     |
| ------------ | ------------ | ------------- | ----------------------------------------------------------- |
| **Básico**   | 16,000 CUP   | No            | 1 catálogo básico, hasta 25 productos, funciones esenciales  |
| **Premium**  | 36,000 CUP   | No            | Catálogo completo (hasta 300 productos), diseño a medida, analítica |
| **Empresarial** | 56,000 CUP | **Sí**        | Todo Premium + base de datos en la nube, panel de administración, API |

> Los planes Básico y Premium no incluyen base de datos: las actualizaciones las
> realiza el equipo. El plan Empresarial añade base de datos, panel propio y
> actualizaciones en tiempo real.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS 3** con design system propio (paleta cálida, Fraunces + Inter)
- **SVG artesanal**: logo, escena hero, mockups, sello, texturas, avatares y
  9 ilustraciones de producto — todo vectorial y escalable
- **Sin dependencias de UI**: componentes a medida, animaciones ligeras
  (IntersectionObserver, CSS) y `prefers-reduced-motion` respetado
- **Supabase-ready**: `lib/supabase.ts` + `supabase/schema.sql` para convertir
  la demo en un sistema multi-tenant (catálogos por negocio, analítica de
  eventos, panel de administración)

## Estructura

```
app/
  layout.tsx            # Tipografías (Fraunces/Inter), metadata, OG image
  page.tsx              # Landing de marketing
  catalogo/page.tsx     # Catálogo demo (Casa Lum)
  opengraph-image.tsx   # Imagen social generada (1200×630)
  icon.svg              # Favicon vectorial
components/
  SiteNav.tsx · SiteFooter.tsx · Logo.tsx · Reveal.tsx · icons.tsx
  CatalogClient.tsx     # Filtros, búsqueda, modal de detalle, WhatsApp
  sections/             # Hero, Stats, Features, HowItWorks, Showcase…
data/catalog.ts         # Productos del catálogo demo
lib/supabase.ts         # Capa de datos preparada para Supabase
public/products/        # 9 ilustraciones SVG de producto
public/art/             # Hero, mockups, banner, texturas, sello
public/avatars/         # Retratos SVG de testimonios
supabase/schema.sql     # Esquema multi-tenant + seed «Casa Lum»
```

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy

```bash
npm run build
npm start
```

El proyecto está pensado para **Vercel** (soporte nativo de Next.js):

```bash
vercel --prod
```

## Personalización

- **Marca**: paleta y tipografías en `tailwind.config.ts` + `app/globals.css`;
  logotipo en `components/Logo.tsx` y `app/icon.svg`.
- **Productos del catálogo**: `data/catalog.ts` (y `supabase/schema.sql` si se
  conecta la base de datos).
- **WhatsApp**: número en `components/CatalogClient.tsx` (`WA_NUMBER`) o variable
  `NEXT_PUBLIC_WHATSAPP_NUMBER`.

## Roadmap «sistema»

- [x] Landing comercial + catálogo demo
- [x] Diseño vectorial completo (logo, iconos, ilustraciones, OG)
- [x] Capa de datos con fallback local
- [ ] Conexión en vivo a Supabase (esquema incluido)
- [ ] Panel de administración por negocio (multi-tenant)
- [ ] Analítica de eventos (vistas, clics, consultas)

---

Hecho con obsesión por el detalle — **Studio Lexair**
