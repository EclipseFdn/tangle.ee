const path = require('path')
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: (input) => {
    const config = { ...input }
    config.resolve.alias['@animations'] = path.join(__dirname, './lib/animations')
    config.resolve.alias['@components'] = path.join(__dirname, './lib/components')
    config.resolve.alias['@sections'] = path.join(__dirname, './lib/sections')
    config.resolve.alias['@style'] = path.join(__dirname, './lib/style')
    return config
  }
})
