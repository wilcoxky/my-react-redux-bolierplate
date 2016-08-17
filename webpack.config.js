var webpack = require('webpack');

module.exports = {
  entry: [
    // Dev server and hot replacement
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    // Regular entry
    './src/index.js',
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  // Webpack-dev-server config
  devServer: {
    contentBase: './dist',
    hot: true,
    // Back anbd forth arrows work
    historyApiFallback: true,
  },
  // Needed for old browser support
  plugins: [
    // Basically adds 'fetch' to the global scale
    new webpack.ProvidePlugin({
    	'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
  ],
  eslint: {
    configFile: './.eslintrc',
  },
};
