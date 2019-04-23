const path = require("path");

module.exports = {
  entry: "./src/client/App.jsx",
  output: {
    path: path.resolve(__dirname, "src/public"),
    filename: "application.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: __dirname + "/src/public/",
    inline: true,
    port: 8080,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  }
};
