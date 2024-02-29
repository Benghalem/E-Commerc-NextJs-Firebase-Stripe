/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //images: ["i.ibb.co", "image.pexeple.com", "lh3.googleusercontent.com"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        /*  port: '',
        pathname: '/account123/**', */
      },
      {
        protocol: "https",
        hostname: "image.pexeple.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
