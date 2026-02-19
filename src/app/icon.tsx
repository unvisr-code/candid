import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ec7d31 0%, #e86427 100%)",
          borderRadius: "8px",
          color: "white",
          fontSize: 17,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          fontFamily: "sans-serif",
        }}
      >
        YJ
      </div>
    ),
    { ...size },
  );
}
