import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://unvisr.kr"),
  title: {
    default: "오영준 | Operations & Business Development",
    template: "%s | 오영준",
  },
  description:
    "오영준의 랜딩 페이지입니다. Resume와 Portfolio로 빠르게 이동할 수 있습니다.",
  openGraph: {
    title: "오영준 | Operations & Business Development",
    description:
      "오영준의 랜딩 페이지입니다.",
    images: ["/opengraph-image"],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "오영준 | Operations & Business Development",
    description:
      "오영준의 랜딩 페이지입니다.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="text-foreground bg-background antialiased">{children}</body>
    </html>
  );
}
