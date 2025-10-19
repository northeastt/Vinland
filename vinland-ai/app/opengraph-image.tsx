import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
          color: "#e6e6e6",
          position: "relative",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif",
        }}
      >
        {/* subtle gold radial */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(800px 400px at 50% 0%, rgba(245, 215, 110, 0.18), rgba(0,0,0,0) 60%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 20 }}>
          {/* Apple-like glyph */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 0 1px rgba(245,215,110,0.08) inset",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 34, height: 34, background: "#F5D76E", borderRadius: 8 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 92, fontWeight: 700 }}>
              <span style={{ color: "#F5D76E" }}>Vinland</span> AI
            </div>
            <div style={{ marginTop: 8, fontSize: 28, color: "#bbbbbb" }}>
              Small steps, serene progress.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}


