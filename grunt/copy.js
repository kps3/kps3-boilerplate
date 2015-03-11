module.exports = function (grunt, options) {

	return {
		assets: {
			files: [{
				expand: true,
				cwd: '<%= sourcePath %>/<%= assetDir %>/',
				src: ['**', '!scss/**'],
				dest: '<%= distPath %>/<%= assetDir %>/'
			}]
		}
	};

};
