const path = require('path')

module.exports = env => {
  return {
    entry: { main: path.resolve(__dirname, './dist/esm/index.js') },
    output: {
      path: path.resolve(__dirname, './dist/umd'),
      filename: 'index.js',
      library: 'react-tiny-touch',
      libraryTarget: 'umd'
    },
    mode: 'production',
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
    module: {
      rules: [{ test: /\.t|js$/, use: 'babel-loader' }]
    }
  }
}
