/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["zjiploxydrjwjnbstxib.supabase.co", "freepngimg.com"],
    formats: ["image/webp"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
