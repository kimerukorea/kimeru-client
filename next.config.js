/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["zjiploxydrjwjnbstxib.supabase.co", "freepngimg.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
