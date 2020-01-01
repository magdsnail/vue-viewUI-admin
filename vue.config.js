const path = require('path');

const resolve = dir => {
	return path.join(__dirname, dir)
}

module.exports = {
	productionSourceMap: false,
	lintOnSave: false,//process.env.NODE_ENV !== 'production',
	css: {
		loaderOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	},
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('_c', resolve('src/components'))

		config.module
			.rule('vue')
			.test(/\.vue$/)
			.use('iview-loader')
			.loader('iview-loader')
			.options({
				prefix: false
			})
	}
};