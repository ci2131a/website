module.exports = {
	pages: {
    	index: './src/pages/index/main.js',
    	limoncello:'./src/pages/limoncello/main.js',
    	wlsd:'./src/pages/wlsd/main.js',
    	lbp:'./src/pages/lbp/main.js',
      	faceshield: './src/pages/faceshield/main.js',
      	printing: './src/pages/printing/main.js'
  }, 
  publicPath: 
    process.env.NODE_ENV === 'production'
    ? '/'
    : '/'

}