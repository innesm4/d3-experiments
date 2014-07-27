module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            gitRepoUpdate: {
                command: [
                    'git remote update --prune',
                    'git status'
                ].join('&&'),
                options: {
                    stdout: true
                }
            }
        },
        concat: {
            dist: {
                src: [       
                    'web/assets/js/vendor/d3/d3.min.js',
                    'web/assets/js/global.js'
                ],
                dest: 'web/assets/js/build/production.js',
            }
        },
        uglify: {
            build: {
                src: 'web/assets/js/build/production.js',
                dest: 'web/assets/js/build/production.min.js'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'web/assets/css/global.css': 'web/assets/css/global.scss'
                }
            }
        },
        jshint: {
          myFiles: ['web/assets/js/global.js']
        },
        watch: {
            scripts: {
                files: ['web/assets/js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['web/assets/css/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    require('load-grunt-tasks')(grunt);

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['shell', 'concat', 'uglify', 'sass', 'jshint:myFiles', 'watch']);

};