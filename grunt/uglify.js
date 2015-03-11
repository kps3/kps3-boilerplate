module.exports = function (grunt, options) {

	return {
		js: {
			options : {
				banner: '<%= banner %>',
				beautify : {
					ascii_only : true,
					quote_keys: true
				}
			},
			files: [{
				expand: true,
				cwd: '<%= sourcePath %>/<%= assetDir %>/js',
				src: '*.js',
				dest: '<%= sourcePath %>/<%= assetDir %>/js/min'
			}]
		},
		jsPlugins: {
			options : {
				beautify : {
					ascii_only : true,
					quote_keys: true
				}
			},
			files: {
				'<%= sourcePath %>/<%= assetDir %>/js/vendor/min/plugins.js': ['<%= sourcePath %>/<%= assetDir %>/js/vendor/**/*.js', '!<%= sourcePath %>/<%= assetDir %>/js/vendor/min/*.js'],
			}
		}
	};

};
