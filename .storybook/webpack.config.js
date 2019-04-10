const path = require('path')
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin')

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(tsx?|ts?)$/,
    use: [
      'babel-loader',
      {
        loader: 'react-docgen-typescript-loader',
        options: {
          propFilter: prop => {
            if (prop.parent == null) {
              return true
            }
            // Filter out props which type definition is placed in react package
            return prop.parent.fileName.indexOf('node_modules/@types/react') < 0
          }
        }
      }
    ]
  })
  config.plugins.push(new TSDocgenPlugin())
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
