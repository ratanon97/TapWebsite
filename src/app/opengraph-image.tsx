import { ImageResponse } from "next/og";

export const alt = "Tap Suksumrun - Product Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0A0A0E",
          color: "#E8E4DE",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 700 }}>Tap.</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            <span style={{ marginRight: 20 }}>Turning complexity</span>
            <span style={{ display: "flex" }}>
              <span style={{ marginRight: 20 }}>into</span>
              <span
                style={{
                  backgroundColor: "#92400e",
                  color: "#FDF7FE",
                  padding: "0 16px",
                }}
              >
                clarity.
              </span>
            </span>
          </div>
          <div style={{ marginTop: 40, fontSize: 32, color: "#A8A29E" }}>
            Tap Suksumrun · Product Manager
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
