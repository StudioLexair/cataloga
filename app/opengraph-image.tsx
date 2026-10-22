import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cataloga — Catálogos digitales que venden por ti";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#FBF7F1",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -160,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "#E9B7A4",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: -180,
            width: 420,
            height: 420,
            borderRadius: 210,
            background: "#C75D3B",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 170,
            bottom: 90,
            width: 190,
            height: 260,
            borderRadius: 24,
            background: "#FBF7F1",
            border: "6px solid #1A1410",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: 999,
              background: "#B08D55",
              display: "flex",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 14,
              background: "#1A1410",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#C75D3B",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            C
          </div>
          <div
            style={{
              fontSize: 30,
              letterSpacing: 8,
              fontWeight: 700,
              color: "#1A1410",
              display: "flex",
            }}
          >
            CATALOGA
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.02,
              color: "#1A1410",
              maxWidth: 700,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Catálogos digitales</span>
            <span style={{ fontStyle: "italic", color: "#C75D3B" }}>
              que venden por ti
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#4A4038",
              display: "flex",
            }}
          >
            Un link. Tu marca. Ventas 24/7.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 22,
            color: "#6B5F54",
            letterSpacing: 2,
          }}
        >
          <span>+320 CATÁLOGOS</span>
          <span>·</span>
          <span>SETUP EN 48H</span>
          <span>·</span>
          <span>SIN COMISIONES</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
