/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const prod = process.env.NODE_ENV === 'production';

const nextConfig = withPWA({
  dest: 'public', // PWA 관련 파일이 저장될 디렉토리
  register: true,
  skipWaiting: true,
  disable: prod ? false : true
});

export default nextConfig;
