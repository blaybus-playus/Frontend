/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = withPWA({
  dest: 'public', // PWA 관련 파일이 저장될 디렉토리
});

export default nextConfig;
