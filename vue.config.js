module.exports = {
	pages: {
    	index: './src/pages/index/main.js',
    	limon:'./src/pages/limon/main.js'
  }, 
  publicPath: 
    process.env.NODE_ENV === 'production'
    ? '/website/'
    : '/'

}