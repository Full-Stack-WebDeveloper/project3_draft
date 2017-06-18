module.exports = {
	enter: "./src/Main.js", 
	output: {
		filename: "public/bundle.js"
	}, 

	module: {
		loaders: [ 
			{
				test: /\.jsx?$/, 
				include: /app/, 
				loader: "babel-loader", 
				query: {
					preset: ["react", "es2016"]
				}
			}
		]
	}, 

	devtool: "eval-source-map"
}