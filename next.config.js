const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  sassOptions: {
    includePaths: [path.join(__dirname, '/styles/global.scss')],
  },
  env: {
    API_URL: process.env.API_URL,
    IMG_URL: process.env.IMG_URL,
    STATIC: process.env.STATIC,
    ROUTE: process.env.ROUTE,
  },
  images: {
    loader: 'imgix',
    path: 'https://yourlink.com',
  },
};

module.exports = nextConfig;
