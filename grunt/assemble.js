module.exports = function (grunt, options) {

	return {
		options: {
			assets: '<%= distPath %>/<%= assetDir %>',
			layoutdir: '<%= sourcePath %>/<%= templateDir %>/layouts',
			partials: ['<%= sourcePath %>/<%= templateDir %>/partials/**/*.hbs'],
			flatten: true,
		},
		site: {
			options: {
				layout: 'default.hbs'
			},
			src: ['<%= sourcePath %>/<%= templateDir %>/*.hbs'],
			dest: '<%= distPath %>'
		}
	};

};
