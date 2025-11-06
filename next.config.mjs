/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production-ready: Don't ignore linting and TypeScript errors
  eslint: {
    ignoreDuringBuilds: false, // Enable ESLint during builds
  },
  typescript: {
    ignoreBuildErrors: false, // Enable TypeScript checking during builds
  },
  images: {
    unoptimized: true, // Disable image optimization for static export (GitHub Pages)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
    ],
  },
  output: 'export', // Enable static export for GitHub Pages
  // Note: headers() and compress are not supported in static export
  // Security headers should be configured at the hosting level (GitHub Pages)
  poweredByHeader: false, // Remove X-Powered-By header for security
  reactStrictMode: true,
}

export default nextConfig
