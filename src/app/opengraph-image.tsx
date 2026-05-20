import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0b1020",
          color: "#f8fafc",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid #273244",
            borderRadius: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            padding: "56px",
            width: "100%",
          }}
        >
          <div style={{ color: "#60a5fa", display: "flex", fontSize: 32, fontWeight: 800 }}>
            {profile.target}
          </div>
          <div style={{ display: "flex", fontSize: 82, fontWeight: 900, letterSpacing: 0, lineHeight: 0.95 }}>
            {profile.name}
          </div>
          <div style={{ color: "#c3ccdc", display: "flex", fontSize: 42, lineHeight: 1.2 }}>
            {profile.role} focado em APIs, dados e projetos web.
          </div>
        </div>
      </div>
    ),
    size
  );
}
