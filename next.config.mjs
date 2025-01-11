/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = withPWA({
  dest: 'public', // PWA 관련 파일이 저장될 디렉토리
  register: true, // PWA 등록
  skipWaiting: true, // 대기 중인 SW 활성화
  reactStrictMode: true,
});

export default nextConfig;
