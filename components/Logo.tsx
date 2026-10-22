import type { SVGProps } from "react";

export function LogoMark({
  size = 40,
  ...p
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      {...p}
    >
      <rect width="64" height="64" rx="16" fill="#1A1410" />
      <path
        d="M32 12c-9 0-16 6.6-16 16.8V44a2.5 2.5 0 0 0 2.5 2.5h27A2.5 2.5 0 0 0 48 44V28.8C48 18.6 41 12 32 12Z"
        fill="#C75D3B"
      />
      <path
        d="M32 18c-5.6 0-10 4.1-10 10.4V40h20V28.4C42 22.1 37.6 18 32 18Z"
        fill="#FBF7F1"
      />
      <path d="M26 40h12v6.5H26z" fill="#B08D55" />
      <circle cx="32" cy="27" r="3.4" fill="#C75D3B" />
    </svg>
  );
}

export function LogoLockup({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3 group">
      <LogoMark
        size={38}
        className="transition-transform duration-300 group-hover:-rotate-6"
      />
      <span
        className={`font-display text-[19px] font-semibold tracking-[0.28em] ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        VITRINA
      </span>
    </a>
  );
}
