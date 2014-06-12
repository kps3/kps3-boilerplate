/*jshint node: true */

module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		banner: '/** \n' +
			' * Automatically Generated - DO NOT EDIT \n' +
			' * <%= pkg.name %> / v<%= pkg.version %> / <%= grunt.template.today("yyyy-mm-dd") %> \n' +
			' */ \n\n',

		sourcePath: 'src',
		distPath: 'dist',
		templateDir: 'templates',
		assetDir: 'assets',

		watch: {
			js: {
				files: '<%= sourcePath %>/<%= assetDir %>/js/*.js',
				tasks: ['uglify:js', 'copy:assets']
			},
			jsPlugins: {
				files: ['<%= sourcePath %>/<%= assetDir %>/js/vendor/**/*.js', '!<%= sourcePath %>/<%= assetDir %>/js/vendor/min/*.js'],
				tasks: ['uglify:jsPlugins', 'copy:assets']
			},
			sass: {
				files: '<%= sourcePath %>/<%= assetDir %>/scss/**/*.scss',
				tasks: ['compass:dist', 'usebanner', 'copy:assets']
			},
			css: {
				files: '<%= sourcePath %>/<%= assetDir %>/css/**/*.css',
				options: {
					livereload: true
				}
			},
			html: {
				files: '<%= sourcePath %>/<%= templateDir %>/**/*.hbs',
				tasks: ['assemble', 'prettify:dist']
			}
		},

		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},

		uglify: {
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
		},

		smushit: {
			dist: {
				src:  ['<%= sourcePath %>/<%= assetDir %>/img/**/*.png', '<%= sourcePath %>/<%= assetDir %>/img/**/*.jpg'],
				dest: '<%= distPath %>/<%= assetDir %>/img'
			}
		},

		usebanner: {
			screenCSS: {
				options: {
					position: 'top',
					banner: '<%= banner %>',
					linebreak: true
				},
				files: {
					src: [ '<%= sourcePath %>/<%= assetDir %>/css/screen.css' ]
				}
			}
		},

		assemble: {
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
		},

		copy: {
			assets: {
				files: [{
					expand: true,
					cwd: '<%= sourcePath %>/<%= assetDir %>/',
					src: ['**', '!scss/**'],
					dest: '<%= distPath %>/<%= assetDir %>/'
				}]
			}
		},

		prettify: {
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
		}

	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-prettify');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-smushit');
	grunt.loadNpmTasks('assemble');

	grunt.registerTask('default', ['uglify', 'compass', 'usebanner', 'assemble', 'prettify:dist', 'copy:assets']);

};
