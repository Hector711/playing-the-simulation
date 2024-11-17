import { fileURLToPath } from 'url';
import path from 'path';

import bundleAnalyzer from '@next/bundle-analyzer';
export const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.ignoreWarnings = [
      (warning) =>
        warning.message.includes('legacy JS API is deprecated'),
    ];
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
    additionalData: `@use "@/styles/_variables.scss" as *;`,
  },
  images: {
    remotePatterns: [
      { hostname: 'i.ibb.co', protocol: 'https' },
      { hostname: 'assets.skool.com', protocol: 'https' }
    ],
  },
};

export default withBundleAnalyzer(nextConfig)