const path = require('path');

module.exports = {
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.frontend.json'),
          },
        },
        exclude: /node_modules/,
      },
      // ... other rules for different file types
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // ... any resolve configurations
  },
  // ... other configurations
};
