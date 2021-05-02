const basePath = process.env.NODE_ENV === 'production' ? '/react-lib' : ''

module.exports = {
  future: {
    webpack5: true
  },
  basePath,
  assetPrefix: `${basePath}/`
}
