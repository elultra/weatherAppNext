/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: "/index",
                destination: "/pages",
            },
        ];
    },
};

module.exports = nextConfig;
