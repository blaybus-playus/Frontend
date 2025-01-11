import withPWAFactory from 'next-pwa';

const withPWA = withPWAFactory({
  dest: 'public',                             // 빌드 시 생성될 Service Worker / manifest 등 폴더
  register: true,                             // SW 자동 등록
  skipWaiting: true,                          // 새 SW가 생기면 즉시 activate
  disable: process.env.NODE_ENV === 'development', // 개발환경에서 PWA 비활성화
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);