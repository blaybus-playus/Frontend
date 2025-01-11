import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "DoStep",
  description: "두핸즈 사내앱",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
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
