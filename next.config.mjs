import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: '/andreani-docs', // Cambia esto al nombre de tu repositorio
  assetPrefix: '/andreani-docs/', // Asegúrate de que coincida con el basePath
};

export default withMDX(config);
