/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Cloud Shell fix
  allowedDevOrigins: [
    '3000-cs-89dcda07-2095-4200-8dad-4b545aef53b9.cs-asia-east1-jnrc.cloudshell.dev'
  ],
  
  // The fix for your image error
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com', // Explicitly allows GitHub raw images
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;