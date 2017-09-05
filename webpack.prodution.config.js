const webpack = require('webpack');
const webpackHtml = require('html-webpack-plugin');
const webpackExactText = require('extract-text-webpack-plugin');
module.exports = {
	devtool:'cheap-module-source-map',
//	{
//		source-map:在一个单独的文件中生成一个完整的source-map,
//		cheap-module-source-map:在一个单独的文件中生成一个source-map.错误只能定位到行,而不能定位到具体的符号,
//		eval-source-map:在输出文件中生成完整的sourcemap,这样肯定会影响运行速度,并且有一定的安全隐患.建议开发阶段使用,
//		cheap-module-eval-scource-map:sourcemap和打包的文件同行显示,没有列映射
//	},
	entry:__dirname + '/app/app.js',
	output:{
		path:__dirname + '/build',
		filename:'bundle-[hash].js'
	},
	devServer:{
		contentBase:'./public',
		port:9888,
		inline:true,
		historyApiFallback:true //不跳转
	},
	module:{
		rules:[{
			test:/\.js(x)?$/,
			use:{
				loader:'babel-loader',
				options:{
					presets:['es2015','react']
				}
			},
			exclude:/node_modules/
		},{
			test:/\.css$/,
			use: webpackExactText.extract({
		          	fallback: 'style-loader',
		          	use:[
		          	{ 
		          		loader: 'css-loader', 
		          		options: { 
		          			importLoaders: 1,
		          			minimize:true,
		          			sourceMap:true,
		          			modules:true
		          		}
		          	},
		          	'postcss-loader'
		          	]
		        })
		},{
			test:/\.(jpg|png|git)$/,
			use:{
				loader:'url-loader',
				options:{
					limit:8192,
					mimetype: 'image/png'
				}
			}
		},{
			test:/\.woff2?|\.ttf|\.eot|\.svg/,
			use:{
				loader:'file-loader'
			}
		}]
	},
	plugins:[
		new webpack.BannerPlugin('copyright zeq_jone@163.com'),
		new webpackHtml({
			template:__dirname + '/app/index.tmpl.html'
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpackExactText('[name].css'),
	],
};
