import type { Metadata } from "next";
import CatalogClient from "@/components/CatalogClient";

export const metadata: Metadata = {
  title: "Catálogo de referencia · Casa Lum",
  description:
    "Explora el catálogo de referencia de Casa Lum, creado por Cataloga: filtros, fichas de producto y pedidos por WhatsApp. La muestra del nivel de trabajo que recibe tu negocio.",
};

export default function CatalogoPage() {
  return <CatalogClient />;
}
