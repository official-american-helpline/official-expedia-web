/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/official-expedia-web', // replace with your repo name
  assetPrefix: '/official-expedia-web/'
};

module.exports = nextConfig;