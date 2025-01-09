import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/common/Header";

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
      <body className="pt-[104px] bg-primary-100">
        <Header />
        <div className="w-full px-[16px]">
          {children}
        </div>
      </body>
    </html>
  );
}
