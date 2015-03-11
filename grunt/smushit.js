module.exports = function (grunt, options) {

	return {
		dist: {
			src:  ['<%= sourcePath %>/<%= assetDir %>/img/**/*.png', '<%= sourcePath %>/<%= assetDir %>/img/**/*.jpg'],
			dest: '<%= distPath %>/<%= assetDir %>/img'
		}
	};

};
