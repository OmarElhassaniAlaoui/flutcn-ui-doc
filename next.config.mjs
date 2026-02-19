import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        // Rewrite all /preview/* paths to the Flutter web app's index.html
        // so Flutter's client-side router can handle them
        source: '/preview/:path*',
        destination: '/preview/index.html',
      },
    ];
  },
};

export default withMDX(config);
