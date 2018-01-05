const path = require("path");

module.exports = {
  entry: "./src/client/App.jsx",
  output: {
    path: path.resolve(__dirname, "src/public"),
    filename: "application.js",
  },
  devServer: {
    contentBase: __dirname + "/src/public/",
    inline: true,
    port: 8080,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}
