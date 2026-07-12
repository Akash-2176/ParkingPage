import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const runtime = "edge";
export const alt = "Ezura Arc — Creative Technology Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0E0F14",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg,#FF7A4E,#ED3F0F)",
            }}
          />
          <div style={{ fontSize: 32, fontWeight: 700 }}>Ezura Arc</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
            We craft dreams into{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#FF7A4E,#ED3F0F)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              reality
            </span>
          </div>
          <div style={{ fontSize: 30, color: "#8A90A0", maxWidth: 760 }}>
            Creative technology studio — design, engineering, brand & AI.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#8A90A0" }}>
          <span>ezuraarc.com</span>
          <span>Where dreams are crafted to reality</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
