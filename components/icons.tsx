import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconSparkle = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" />
  </svg>
);

export const IconCatalog = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H19a1 1 0 0 1 1 1v12.5a2.5 2.5 0 0 1-2.5 2.5H5a1 1 0 0 1-1-1V6.5z" />
    <path d="M4 17a2 2 0 0 1 2-2h14" />
    <path d="M8 8h7M8 11h5" />
  </svg>
);

export const IconSearch = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.6-3.6" />
  </svg>
);

export const IconChat = (p: P) => (
  <svg {...base} {...p}>
    <path d="M21 12a8.5 8.5 0 0 1-12.3 7.6L4 21l1.5-4.4A8.5 8.5 0 1 1 21 12z" />
    <path d="M9 11.5c.6 1.8 2 3.2 3.8 3.8l1.4-1.4 2 .5-.4 2c-2.9.5-6.2-1.5-7.8-4.3l2-.4.5-2 1.4 1.4" />
  </svg>
);

export const IconChart = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 20h16" />
    <path d="M7 20v-6M12 20V8M17 20v-9" />
    <path d="M5 9.5l4.5-4 3.5 3L19 3.5" />
  </svg>
);

export const IconSync = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 7h-7a4 4 0 0 0-4 4v1" />
    <path d="M17 4l3 3-3 3" />
    <path d="M4 17h7a4 4 0 0 0 4-4v-1" />
    <path d="M7 20l-3-3 3-3" />
  </svg>
);

export const IconQr = (p: P) => (
  <svg {...base} {...p}>
    <rect x="4" y="4" width="6" height="6" rx="1" />
    <rect x="14" y="4" width="6" height="6" rx="1" />
    <rect x="4" y="14" width="6" height="6" rx="1" />
    <path d="M14 14h3v3h-3zM20 14v2M14 20h2M18 20h2M20 18v2" />
  </svg>
);

export const IconPalette = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-1 1.4-2-.4-1 .2-2 1.3-2H17a4 4 0 0 0 4-4c0-5-4-10-9-10z" />
    <circle cx="7.8" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="11.5" cy="7.5" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="15.8" cy="9" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconGlobe = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.6 2.6 4 5.6 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.6-4-9s1.4-6.4 4-9z" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 2.6v5.8c0 4.4-2.9 7.9-7 9.6-4.1-1.7-7-5.2-7-9.6V5.6L12 3z" />
    <path d="M8.8 12l2.2 2.2 4.2-4.4" />
  </svg>
);

export const IconArrowRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4.5 12.5l4.7 4.7L19.5 7" />
  </svg>
);

export const IconStar = (p: P) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M12 3.2l2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 3.2z" />
  </svg>
);

export const IconMenu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconPlay = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" stroke="none" />
  </svg>
);

export const IconLeaf = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 19C5 10 10 5 20 4c-.8 9.5-5.4 14.2-13 14" />
    <path d="M8 16c2.5-4 5.5-6.6 9-8" />
  </svg>
);

export const IconTruck = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7" />
    <circle cx="7" cy="18.5" r="1.8" />
    <circle cx="17" cy="18.5" r="1.8" />
  </svg>
);

export const IconWhatsApp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...p}>
    <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.7-6.1c-.3-.1-1.5-.8-1.8-.8-.2-.1-.4-.1-.6.1l-.8 1c-.2.2-.3.2-.6.1a6.8 6.8 0 0 1-3.4-3c-.3-.4 0-.5.2-.8l.4-.6c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1 2.1-.2 3.7a12 12 0 0 0 4.6 4.8c1.8.8 2.5.9 3.4.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.6-.5z" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);

export const IconChevronDown = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const IconEye = (p: P) => (
  <svg {...base} {...p}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const IconLayers = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5" />
    <path d="M3 17l9 5 9-5" />
  </svg>
);

export const IconRocket = (p: P) => (
  <svg {...base} {...p}>
    <path d="M13.5 4.5c2.5-1.7 5.2-1.5 6-1.4.1.8.3 3.5-1.4 6l-4.6 4.6-4.2-4.2 4.2-5z" />
    <path d="M9.5 9.5L5 11.2 3.5 16l4.8-1.5M14 14l-1.7 4.5L17 20l1.5-4.5" />
    <circle cx="15.2" cy="8.8" r="1.4" />
  </svg>
);
