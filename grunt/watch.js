module.exports = function (grunt, options) {

	return {
		js: {
			files: '<%= sourcePath %>/<%= assetDir %>/js/*.js',
			tasks: ['uglify:js', 'copy:assets']
		},
		jsPlugins: {
			files: ['<%= sourcePath %>/<%= assetDir %>/js/vendor/**/*.js', '!<%= sourcePath %>/<%= assetDir %>/js/vendor/min/*.js'],
			tasks: ['uglify:jsPlugins', 'copy:assets']
		},
		jsModules: {
			files: ['<%= sourcePath %>/<%= assetDir %>/js/modules/**/*.js', '!<%= sourcePath %>/<%= assetDir %>/js/modules/min/*.js'],
			tasks: ['uglify:jsModules', 'copy:assets']
		},
		sass: {
			files: '<%= sourcePath %>/<%= assetDir %>/scss/**/*.scss',
			tasks: ['compass:dist', 'copy:assets', 'usebanner']
		},
		html: {
			files: '<%= sourcePath %>/<%= templateDir %>/**/*.hbs',
			tasks: ['assemble', 'prettify:dist']
		}
	};

};
