/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: process.env.PROD ? false : true,
    images: {
        domains: ['images.pexels.com'],
    },
    output: 'standalone',
}

module.exports = nextConfig
