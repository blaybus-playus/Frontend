export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="flex justify-center items-center w-full h-[48px] bg-gray-500"><span>상단 영역</span></div>
        <div>{children}</div>
      </body>
    </html>
  );
}