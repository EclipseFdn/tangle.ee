const path = require('path')

module.exports = {
  webpack: (input) => {
    const config = { ...input }
    config.resolve.alias['@animations'] = path.join(__dirname, './lib/animations')
    config.resolve.alias['@components'] = path.join(__dirname, './lib/components')
    config.resolve.alias['@sections'] = path.join(__dirname, './lib/sections')
    config.resolve.alias['@style'] = path.join(__dirname, './lib/style')
    return config
  }
}
