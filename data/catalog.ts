export type Product = {
  id: string;
  name: string;
  category: "Salón" | "Comedor" | "Iluminación" | "Decoración" | "Exterior";
  price: number;
  blurb: string;
  description: string;
  badge?: "Nuevo" | "Top ventas" | "Edición limitada";
  materials: string;
  dimensions: string;
  finishes: string[];
  art: string;
  tint: string;
};

export const categories = [
  "Todo",
  "Salón",
  "Comedor",
  "Iluminación",
  "Decoración",
  "Exterior",
] as const;

export const products: Product[] = [
  {
    id: "sofa-liria",
    name: "Sofá Liria",
    category: "Salón",
    price: 1290,
    blurb: "Sofá modular de tres plazas en lino arena.",
    description:
      "El sofá Liria combina líneas suaves con un asiento profundo pensado para tardes largas. Su estructura de madera de eucalipto certificada y sus cojines de espuma de alta resiliencia lo convierten en el centro de cualquier salón.",
    badge: "Top ventas",
    materials: "Lino 100% natural, espuma HR, eucalipto certificado FSC",
    dimensions: "220 × 92 × 78 cm · asiento 48 cm",
    finishes: ["Arena", "Terracota", "Verde salvia"],
    art: "/products/sofa-liria.svg",
    tint: "#F6E7DE",
  },
  {
    id: "sillon-bruma",
    name: "Sillón Bruma",
    category: "Salón",
    price: 640,
    blurb: "Sillón lounge de bouclé con patas de roble.",
    description:
      "Un abrazo de bouclé sobre patas de roble macizo. Bruma está diseñado para leer, conversar o no hacer nada con estilo: su respaldo curvo sostiene la espalda y su asiento mullido invita a quedarse.",
    materials: "Bouclé de poliéster reciclado, roble macizo",
    dimensions: "78 × 80 × 84 cm · asiento 42 cm",
    finishes: ["Crudo", "Gris humo", "Mantequilla"],
    art: "/products/sillon-bruma.svg",
    tint: "#F4EDE4",
  },
  {
    id: "lampara-arco",
    name: "Lámpara Arco",
    category: "Iluminación",
    price: 289,
    blurb: "Lámpara de arco en latón mate con cúpula de lino.",
    description:
      "Una curva de latón mate que dibuja luz donde la necesitas. Ideal sobre mesas de lectura o rincones de salón: su brazo articulado permite dirigir la luz sin mover la base.",
    badge: "Nuevo",
    materials: "Latón con acabado mate, cúpula de lino, mármol de base",
    dimensions: "Alto 165 cm · alcance 95 cm · cable 2.2 m",
    finishes: ["Latón mate", "Negro tinta"],
    art: "/products/lampara-arco.svg",
    tint: "#F7EDDC",
  },
  {
    id: "mesa-perla",
    name: "Mesa Perla",
    category: "Comedor",
    price: 870,
    blurb: "Mesa de comedor en roble macizo para 6.",
    description:
      "Roble macizo con acabado aceite natural que realza la veta. El tablero redondeado suaviza el paso y sus patas cónicas aportan ligereza visual sin sacrificar estabilidad.",
    materials: "Roble europeo macizo, aceite natural de bajo VOC",
    dimensions: "180 × 90 × 75 cm · tablero 3.2 cm",
    finishes: ["Roble natural", "Roble tostado"],
    art: "/products/mesa-perla.svg",
    tint: "#F1E7D8",
  },
  {
    id: "jarron-duna",
    name: "Jarrón Duna",
    category: "Decoración",
    price: 120,
    blurb: "Jarrón cerámico esmaltado, torneado a mano.",
    description:
      "Cada pieza de Duna se torno a mano y se esmalta en hornos de leña, por lo que ninguna es igual a otra. Su silueta escultórica aguanta ramos altos o se luce sola.",
    badge: "Edición limitada",
    materials: "Cerámica de alta temperatura, esmalte mate reactivo",
    dimensions: "Ø 18 cm × alto 32 cm",
    finishes: ["Arena", "Arcilla", "Marfil"],
    art: "/products/jarron-duna.svg",
    tint: "#F6E7DE",
  },
  {
    id: "espejo-solar",
    name: "Espejo Solar",
    category: "Decoración",
    price: 210,
    blurb: "Espejo de pared con marco de latón cepillado.",
    description:
      "Un sol geométrico para tus paredes. El marco de latón cepillado proyecta un cálido halo de luz alrededor del espejo, ampliando visualmente cualquier estancia.",
    materials: "Latón cepillado, espejo de 5 mm con bisel",
    dimensions: "Ø 80 cm · profundidad 3.5 cm",
    finishes: ["Latón", "Cobre envejecido"],
    art: "/products/espejo-solar.svg",
    tint: "#F7EDDC",
  },
  {
    id: "estanteria-cima",
    name: "Estantería Cima",
    category: "Salón",
    price: 540,
    blurb: "Estantería modular en nogal americano.",
    description:
      "Cuatro baldas de nogal sobre estructura de acero pavonado. Cima crece contigo: añade módulos, combina alturas y convierte el desorden en una composición.",
    materials: "Nogal americano, acero pavonado",
    dimensions: "160 × 32 × 190 cm",
    finishes: ["Nogal", "Negro tinta"],
    art: "/products/estanteria-cima.svg",
    tint: "#F1E7D8",
  },
  {
    id: "silla-nube",
    name: "Silla Nube",
    category: "Comedor",
    price: 190,
    blurb: "Silla tapizada en terciopelo verde musgo.",
    description:
      "Terciopelo de tacto sedoso sobre un asiento envolvente y patas torneadas. Nube funciona igual de bien en la mesa del comedor que en el tocador del dormitorio.",
    materials: "Terciopelo de algodón, espuma HR, haya torneada",
    dimensions: "48 × 54 × 82 cm · asiento 46 cm",
    finishes: ["Verde musgo", "Terracota", "Azul noche"],
    art: "/products/silla-nube.svg",
    tint: "#EDEFE7",
  },
  {
    id: "maceta-terra",
    name: "Maceta Terra",
    category: "Exterior",
    price: 95,
    blurb: "Maceta de barro cocido con plato incluido.",
    description:
      "Barro cocido de grano grueso, poroso y vivo: envejece con dignidad en terrazas y patios. Incluye plato a juego y drenaje integrado para plantas felices.",
    materials: "Barro cocido artesanal, esmalte exterior resistente a heladas",
    dimensions: "Ø 34 cm × alto 30 cm",
    finishes: ["Terracota", "Blanco cal", "Verde oliva"],
    art: "/products/maceta-terra.svg",
    tint: "#F6E7DE",
  },
];

export const formatPrice = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
