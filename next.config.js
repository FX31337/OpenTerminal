/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  assetPrefix: process.env.BASE_PATH,
  basePath: process.env.BASE_PATH,
  distDir: process.env.BUILD_PATH,
  images: {
    loader: 'akamai',
    path: '',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client.
    staticFolder: '/static',
  },
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side.
  },
}

module.exports = nextConfig
