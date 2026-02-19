import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://candid.unvisr.kr"),
  title: {
    default: "오영준 | Recruiting Consultant",
    template: "%s | 오영준",
  },
  description:
    "AI 커리어 플랫폼 BD, 스타트업 창업, B2B CX 경험을 바탕으로 채용 컨설팅에 임합니다.",
  openGraph: {
    title: "오영준 | Recruiting Consultant",
    description:
      "채용 시장을 이해하고, 사람과 조직을 연결하는 채용 컨설턴트 오영준입니다.",
    images: [
      "https://cdn.midjourney.com/812c9f15-835a-404f-b8ea-d282416d911d/0_3.png",
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "오영준 | Recruiting Consultant",
    description:
      "채용 시장을 이해하고, 사람과 조직을 연결하는 채용 컨설턴트 오영준입니다.",
    images: [
      "https://cdn.midjourney.com/812c9f15-835a-404f-b8ea-d282416d911d/0_3.png",
    ],
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "vjxjuigw7w");`,
          }}
        />
      </head>
      <body className="text-foreground bg-background antialiased">{children}</body>
    </html>
  );
}
