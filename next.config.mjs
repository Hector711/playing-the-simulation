import { fileURLToPath } from 'url';
import path from 'path';

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
    remotePatterns: [{ hostname: 'i.ibb.co', protocol: 'https' }],
  },
};

export default nextConfig;
