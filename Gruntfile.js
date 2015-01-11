module.exports = function(grunt) {
	'use strict';

	// Load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Project configuration
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),

		meta: {
			banner: '/**\n' +
				'* <%= pkg.title %> - v<%= pkg.version %>\n' +
				'* <%= pkg.homepage %>\n' +
				'*\n' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> 10up\n' +
				'* Licensed under the GPLv2+ license.\n' +
				'*/'
		},

		concat: {
			options: {
				stripBanners: true,
				banner: '<%= meta.banner %>'
			},
		},

		jshint: {
			browser: {
				files: {
					src: [
						'assets/js/src/**/*.js',
						'assets/js/test/**/*.js',
					]
				},
				options: {
					jshintrc: '.jshintrc'
				}
			},
			grunt: {
				files: {
					all: [
						'Gruntfile.js'
					]
				},
				options: {
					jshintrc: '.gruntjshintrc'
				}
			}
		},

		uglify: {
			all: {
				files: {
					'assets/js/medicare_com.min.js': 'assets/js/src/medicare_com.js',
				},
				options: {
					banner: '<%= meta.banner %>',
					mangle: {
						except: ['jQuery']
					}
				}
			}
		},

		test: {
			files: [
				'assets/js/test/**/*.js',
				'admin/js/test/**/*.js'
			]
		},

		sass: {
			all: {
				options: {
					banner: '<%= meta.banner %>'
				},
				files: {
					'style.css': 'assets/sass/style.scss',
				}
			}
		},

		watch: {
			sass: {
				files: ['assets/sass/*.scss', 'assets/sass/**/*.scss'],
				tasks: ['sass'],
				options: {
					debounceDelay: 500
				}
			},
			scripts: {
				files: ['assets/js/src/**/*.js', 'assets/js/vendor/**/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					debounceDelay: 500
				}
			}
		},
	} );

	// Debugging why Grunt is so slow to compile Sass
	require('time-grunt')(grunt);

	// Default task
	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass']);

	grunt.util.linefeed = '\n';
};


