'use strict';

module.exports = function(grunt) {

  var sassIncludePaths = [].concat(
    require('bourbon-neat').includePaths,
    require('include-media').includePath
  );

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
    styleDir: 'styles',
    scriptDir: 'scripts',
    imageDir: 'images',
    fontDir: 'fonts',

    watch: {
      js: {
        files: '<%= sourcePath %>/<%= assetDir %>/<%= scriptDir %>/*.js',
        tasks: ['copy:scripts', 'uglify:js']
      },
      jsPlugins: {
        files: ['<%= sourcePath %>/<%= assetDir %>/<%= scriptDir %>/vendor/**/*.js', '!<%= sourcePath %>/<%= assetDir %>/<%= scriptDir %>/vendor/min/*.js'],
        tasks: ['copy:scripts', 'uglify:jsPlugins']
      },
      images: {
        files: '<%= sourcePath %>/<%= assetDir %>/<%= imageDir %>/**/*.{png,jpg,jpeg,gif,webp,svg}',
        tasks: ['copy:images']
      },
      fonts: {
        files: '<%= sourcePath %>/<%= assetDir %>/<%= fontDir %>/**/*.{eot,svg,ttf,woff}',
        tasks: ['copy:fonts']
      },
      sass: {
        files: '<%= sourcePath %>/<%= assetDir %>/<%= styleDir %>/**/*.scss',
        tasks: ['sass', 'autoprefixer', 'usebanner']
      },
      html: {
        files: '<%= sourcePath %>/<%= templateDir %>/**/*.hbs',
        tasks: ['assemble']
      }
    },

    autoprefixer: {
      dist: {
        files: [{
          src: ['<%= distPath %>/<%= assetDir %>/<%= styleDir %>/main.css'],
          dest: '<%= distPath %>/<%= assetDir %>/<%= styleDir %>/main.css'
        }]
      }
    },

    sass: {
      options: {
        includePaths: sassIncludePaths,
        outputStyle: 'compressed',
        sourceMap: true
      },
      dist: {
        files: [{
          src: ['<%= sourcePath %>/<%= assetDir %>/<%= styleDir %>/main.scss'],
          dest: '<%= distPath %>/<%= assetDir %>/<%= styleDir %>/main.css'
        }]
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
          cwd: '<%= distPath %>/<%= assetDir %>/<%= scriptDir %>',
          src: '*.js',
          dest: '<%= distPath %>/<%= assetDir %>/<%= scriptDir %>/min'
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
          '<%= distPath %>/<%= assetDir %>/<%= scriptDir %>/vendor/min/plugins.js': [
            '<%= distPath %>/<%= assetDir %>/<%= scriptDir %>/vendor/**/*.js',
            '!<%= distPath %>/<%= assetDir %>/<%= scriptDir %>/vendor/min/*.js'
          ]
        }
      }
    },

    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '<%= banner %>',
          linebreak: true
        },
        files: {
          src: [ '<%= distPath %>/<%= assetDir %>/<%= styleDir %>/*.css' ]
        }
      }
    },

    assemble: {
      options: {
        assets: '<%= distPath %>/<%= assetDir %>',
        layoutdir: '<%= sourcePath %>/<%= templateDir %>/layouts',
        partials: ['<%= sourcePath %>/<%= templateDir %>/components/**/*.hbs'],
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
      fonts: {
        files: [{
          expand: true,
          cwd: '<%= sourcePath %>/<%= assetDir %>/<%= fontDir %>/',
          src: ['**'],
          dest: '<%= distPath %>/<%= assetDir %>/<%= fontDir %>/'
        }]
      },
      images: {
        files: [{
          expand: true,
          cwd: '<%= sourcePath %>/<%= assetDir %>/<%= imageDir %>/',
          src: ['**'],
          dest: '<%= distPath %>/<%= assetDir %>/<%= imageDir %>/'
        }]
      },
      scripts: {
        files: [{
          expand: true,
          cwd: '<%= sourcePath %>/<%= assetDir %>/<%= scriptDir %>/',
          src: ['**'],
          dest: '<%= distPath %>/<%= assetDir %>/<%= scriptDir %>/'
        }]
      }
    },

    clean: {
      dist: ['<%= distPath %>/**/*', '!<%= distPath %>/.gitignore']
    }
  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', [
    'clean',
    'copy',
    'uglify',
    'sass',
    'autoprefixer',
    'assemble',
    'usebanner'
  ]);
};
