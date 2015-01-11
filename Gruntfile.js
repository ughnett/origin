module.exports = function(grunt) {
    'use strict';

    // Load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Project configuration
	grunt.initConfig( {
		pkg:    grunt.file.readJSON( 'package.json' ),
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
			admin: {
				src: [
					'admin/js/src/admin.js'
				],
				dest: 'admin/js/admin.js'
			},
			agent_banner: {
				src: [
					'assets/js/src/medicare.cookies.js',
					'assets/js/src/banner.js'
				],
				dest: 'assets/js/banner.js'
			},
			cookies: {
				src: [
					'assets/js/src/medicare.cookies.js'
				],
				dest: 'assets/js/medicare.cookies.js'
			},
			medicare_com: {
				src: [
					'assets/js/src/medicare_com.js',
					'assets/js/vendor/jquery.infinitescroll.js'
				],
				dest: 'assets/js/medicare_com.js'
			},
			referral: {
				src: [
					'assets/js/src/referral.models.js',
					'assets/js/src/referral.views.js',
					'assets/js/src/referral.routers.js'
				],
				dest: 'assets/js/referral.js'
			}
		},
		jshint: {
			browser: {
				files: {
					src: [
						'assets/js/src/**/*.js',
						'assets/js/test/**/*.js',
						'admin/js/src/**/*.js',
						'admin/js/test/**/*.js'
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
					'admin/js/admin.min.js': 'admin/js/admin.js',
					'assets/js/banner.min.js': 'assets/js/banner.js',
					'assets/js/referral.min.js': 'assets/js/referral.js',
					'assets/js/medicare.cookies.min.js': 'assets/js/medicare.cookies.js'
				},
				options: {
					banner: '<%= meta.banner %>',
					mangle: {
						except: ['jQuery', 'Backbone', '_']
					}
				}
			}
		},
		test:   {
			files: [
				'assets/js/test/**/*.js',
				'admin/js/test/**/*.js'
			]
		},

		iconizr: {
			simple: {
				src: ['images/src'],
				dest: 'images/icons'
			},
			options: {
				prefix: 'icon'
			}
		},

		sass:   {
			all: {
				options: {
					banner: '<%= meta.banner %>',
					sourcemap: 'none'
				},
				files: {
					'assets/css/medicare_com.css': 'assets/css/sass/medicare_com.scss',
					'admin/css/admin.css': 'admin/css/sass/admin.scss'
				}
			}
		},
		
		cssmin: {
			options: {
				banner: '<%= meta.banner %>'
			},
			minify: {
				expand: true,
				files: {
					'assets/css/medicare_com.min.css' : ['<banner:meta.wpblock>', 'assets/css/medicare_com.css'],
					'admin/css/admin.min.css' : ['<banner:meta.wpblock>', 'admin/css/admin.css'],
					'assets/css/banner.min.css': ['<banner:meta.wpblock>', 'assets/css/banner.css']
				}
			}
		},

		watch:  {
			sass: {
				files: ['assets/css/sass/*.scss', 'assets/css/sass/**/*.scss', 'admin/css/sass/*.scss'],
				tasks: ['sass', 'cssmin'],
				options: {
					debounceDelay: 500
				}
			},
			scripts: {
				files: ['assets/js/src/**/*.js', 'assets/js/vendor/**/*.js', 'admin/js/src/**/*.js', 'admin/js/vendor/**/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					debounceDelay: 500
				}
			}
		},

		checktextdomain: {
			options:{
				text_domain: 'medicare',
				correct_domain: false, //Will correct missing/variable domains
				keywords: [ //WordPress localisation functions
					'__:1,2d',
					'_e:1,2d',
					'_x:1,2c,3d',
					'esc_html__:1,2d',
					'esc_html_e:1,2d',
					'esc_html_x:1,2c,3d',
					'esc_attr__:1,2d',
					'esc_attr_e:1,2d',
					'esc_attr_x:1,2c,3d',
					'_ex:1,2c,3d',
					'_n:1,2,4d',
					'_nx:1,2,4c,5d',
					'_n_noop:1,2,3d',
					'_nx_noop:1,2,3c,4d'
				]
			},
			files: {
				src:  [
					'**/*.php',
					'!node_modules/**'
				],
				expand: true
			}
		}
	} );

    // Debugging why Grunt is so slow to compile Sass
    require('time-grunt')(grunt);

	// Default task
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass', 'cssmin', 'iconizr']);
	grunt.registerTask('windefault', ['jshint', 'concat', 'uglify', 'sass', 'cssmin']);
    grunt.registerTask('i18n', ['checktextdomain']);

    grunt.util.linefeed = '\n';
};