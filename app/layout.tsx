import type { Metadata } from "next";
import "@/styles/globals.css";
import Providers from "@/components/common/Providers";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

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
      <body className={pretendard.className}>
        <Providers>
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
