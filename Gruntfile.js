/*jshint node: true */

module.exports = function(grunt) {
	'use strict';

	var path = require('path');

	require('load-grunt-config')(grunt, {
		// path to task.js files, defaults to grunt dir
		configPath: path.join(process.cwd(), 'grunt'),

		// auto grunt.initConfig
		init: true,

		// data passed into config.  Can use with <%= test %>
		data: {
			pkg: grunt.file.readJSON('package.json'),
			banner: '/** \n' +
				' * Automatically Generated - DO NOT EDIT \n' +
				' * <%= pkg.name %> / v<%= pkg.version %> / <%= grunt.template.today("yyyy-mm-dd") %> \n' +
				' */ \n\n',

			sourcePath: 'src',
			distPath: 'dist',
			templateDir: 'templates',
			assetDir: 'assets',
		},

		// can optionally pass options to load-grunt-tasks.
		// If you set to false, it will disable auto loading tasks.
		loadGruntTasks: {
			pattern: '*',
			config: require('./package.json'),
			scope: 'devDependencies'
		},

		//can post process config object before it gets passed to grunt
		postProcess: function(config) {},

		//allows to manipulate the config object before it gets merged with the data object
		preMerge: function(config, data) {}
	});


};
