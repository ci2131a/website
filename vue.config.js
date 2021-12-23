module.exports = {
	pages: {
    	index: './src/pages/index/main.js',
    	limoncello:'./src/pages/limoncello/main.js'
  }, 
  publicPath: 
    process.env.NODE_ENV === 'production'
    ? '/website/'
    : '/'

}