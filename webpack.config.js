const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.bundle.js',
		publicPath: '/'
	},
	mode: process.env.NODE_ENV || 'development',
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		alias: {
			'components' : path.resolve(__dirname, 'src/components/'),			
		}
	},
	devServer: {
		static: {
		  directory: path.join(__dirname, 'public'),
		  },
		compress: true,
		port: 3005,
		historyApiFallback: true,
	  },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				type: 'asset'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
	],

}
