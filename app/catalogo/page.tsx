import type { Metadata } from "next";
import CatalogClient from "@/components/CatalogClient";

export const metadata: Metadata = {
  title: "Catálogo demo · Casa Lum",
  description:
    "Explora el catálogo representativo de Casa Lum, creado con Cataloga: filtros, fichas de producto y pedidos por WhatsApp. El ejemplo de lo que tu negocio puede tener.",
};

export default function CatalogoPage() {
  return <CatalogClient />;
}
