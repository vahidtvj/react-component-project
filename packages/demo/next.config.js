const basePath =
  process.env.NODE_ENV === 'production' ? '/react-component-project' : ''

module.exports = {
  future: {
    webpack5: true
  },
  basePath,
  assetPrefix: `${basePath}/`
}
