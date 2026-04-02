/**
 * Next.js configuration.
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    // output: 'export' enables static HTML export (replaces `next export` CLI command)
    output: 'export',
};

export default nextConfig;
