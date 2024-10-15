const path = require("path")
const HTMLPlugin =require("html-webpack-plugin")
module.exports = {
  mode: "development",
  output: {
    clean:true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpeg|png|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"]]
          }
        }
      }
    ]
  },

  plugins: [
    new HTMLPlugin({
      // title:"Hello Webpack"
      template:"./src/index.html"
    })
  ],
  devtool:"inline-source-map"
}