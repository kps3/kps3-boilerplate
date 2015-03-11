module.exports = function (grunt, options) {

	return {
		options: {
			indent: 1,
			indent_char: '  ',
			brace_style: 'expand',
			unformatted: ['a', 'code', 'pre']
		},
		dist: {
			expand: true,
			cwd: '<%= distPath %>',
			ext: '.html',
			src: ['*.html'],
			dest: '<%= distPath %>'
		}
	};

};
