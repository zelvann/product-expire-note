/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/api/list',
        permanent: false
      }
    ]
  }
};

export default nextConfig;
