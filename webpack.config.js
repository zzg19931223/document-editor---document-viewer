const path = require("path")
const webpack = require("webpack")
var CopyWebpackPlugin = require("copy-webpack-plugin")
var HtmlWebpackPlugin = require("html-webpack-plugin")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
	mode: "development",
	entry: "./index.tsx",
	output: {
		path: path.resolve(__dirname, "build")
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"]
	},
	devServer: {
		port: 8080,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)$/,
				loader: "babel-loader",
				exclude: [/node_modules/]
			},
			{
				test: /\.(scss|css|sass)$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
							implementation: require("sass"),
							// See https://github.com/webpack-contrib/sass-loader/issues/804
							webpackImporter: false,
							sassOptions: {
								includePaths: ["./node_modules"]
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: "index.html"
		})
		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		{
		// 			from: "public",
		// 			to: "public"
		// 		}
		// 	]
		// })
	]
}
