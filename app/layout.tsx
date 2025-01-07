import type { Metadata } from "next";
import "@/css/globals.css";

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
        <div className="flex justify-center items-center w-full h-[48px] bg-gray-500"><span>상단 영역</span></div>
        {children}
      </body>
    </html>
  );
}
