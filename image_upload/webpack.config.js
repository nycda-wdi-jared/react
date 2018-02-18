module.exports = {
  devtool: 'inline-source-map',
  entry: './client/app/app.jsx',
  output: {
      path: __dirname,
      filename: './client/public/bundle/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /app/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  }
};
