import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "#f6f7f8",
          color: "#171717",
          fontFamily:
            '"Pretendard", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.08em",
            color: "#6c757d",
            marginBottom: 24,
          }}
        >
          OH YOUNGJUN
        </div>
        <div
          style={{
            fontSize: 68,
            lineHeight: 1.1,
            fontWeight: 700,
            maxWidth: 980,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>현장의 병목을 실행 가능한</span>
          <span>구조로 바꿉니다.</span>
        </div>
        <div
          style={{
            marginTop: 30,
            width: 180,
            height: 10,
            borderRadius: 999,
            background: "#ec7d31",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
