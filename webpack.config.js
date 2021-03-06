const path = require('path');
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {loader: 'babel-loader', options: {presets: ['react', 'env']}},
          {loader: 'ts-loader'},
        ],
      },
      {
        test: /\.css$/,
        loader:
          'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]',
      },
    ],
  },
};
