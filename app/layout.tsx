import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DoStep",
  description: "다음 단계로 계속 나아가자",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
