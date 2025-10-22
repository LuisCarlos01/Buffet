/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações básicas para produção
  typescript: {
    ignoreBuildErrors: false,
  },

  // Configurações de imagem otimizadas para Vercel
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Configurações de compilação
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
