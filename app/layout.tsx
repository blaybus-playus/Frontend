import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/common/Header";
import BottomTab from "@/components/common/BottomTab/BottomTab";

export const metadata: Metadata = {
  title: "DoStep",
  description: "다음 단계로 계속 나아가자",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="relative bg-primary-100 pt-[104px]">
        <Header />
        <div className="w-auto mx-[16px] bg-white">
          {children}
        </div>
        <BottomTab />
      </body>
    </html>
  );
}
