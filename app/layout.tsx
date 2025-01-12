import type { Metadata } from "next";
import "@/styles/globals.css";
import Providers from "@/components/common/Providers";

export const metadata: Metadata = {
  title: "DoStep",
  description: "두핸즈 사내앱",
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
