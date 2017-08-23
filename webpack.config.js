module.exports = {
	devtool:'eval-source-map',
//	{
//		source-map:在一个单独的文件中生成一个完整的source-map,
//		cheap-module-source-map:在一个单独的文件中生成一个source-map.错误只能定位到行,而不能定位到具体的符号,
//		eval-source-map:在输出文件中生成完整的sourcemap,这样肯定会影响运行速度,并且有一定的安全隐患.建议开发阶段使用,
//		cheap-module-eval-scource-map:sourcemap和打包的文件同行显示,没有列映射
//	},
	entry:__dirname + '/app/app.js',
	output:{
		path:__dirname + '/public',
		filename:'bundle.js'
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
			use:[{
				loader:'style-loader'
			},{
				loader:'css-loader'
			}]
		}]
	}
};
