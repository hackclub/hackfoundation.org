const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  images: {
    formats: ['image/webp'],
    deviceSizes: [384, 640, 828, 1200],
    imageSizes: [256, 384, 512],
    minimumCacheTTL: 3600
  },
  swcMinify: true
})
