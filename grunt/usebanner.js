module.exports = function (grunt, options) {

	return {
		screenCSS: {
			options: {
				position: 'top',
				banner: '<%= banner %>',
				linebreak: true
			},
			files: {
				src: [ '<%= distPath %>/<%= assetDir %>/css/*.css' ]
			}
		}
	};

};
