import withPWAFactory from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type" }
        ],
      },
    ];
  }
};

// PWA 설정과 함께 Next.js 설정을 내보냅니다.
const withPWA = withPWAFactory({
  dest: 'public',                             // 빌드 시 생성될 Service Worker / manifest 등 폴더
  register: true,                             // SW 자동 등록
  skipWaiting: true,                          // 새 SW가 생기면 즉시 activate
  disable: process.env.NODE_ENV === 'development', // 개발환경에서 PWA 비활성화
});

export default withPWA(nextConfig);
