module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                src: [
                    'node_modules/angular/angular.min.js',
                    'src/js/app.js',
                    'src/js/factory/**/*.js',
                    'src/js/directive/**/*.js',
                    'src/js/controller/**/*.js'
                ],
                dest: 'build/js/<%= pkg.name %>.min.js'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'src',
                src: 'index.html',
                dest: 'build/'
            },
            json: {
                expand: true,
                cwd: 'json',
                src: '**/*.json',
                dest: 'build/json/'
            },
            css: {
                expand: true,
                cwd: 'src/css',
                src: '**/*.css',
                dest: 'build/css/'
            }
        },
        watch: {
            scripts: {
                files: [
                    'src/**/*.js',
                    'src/**/*.html',
                    'json/**/*.json',
                    'src/css/**/*.css'
                ],
                tasks: ['dev'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', ['copy:main', 'copy:json', 'copy:css', 'uglify']);
    grunt.registerTask('default', ['watch']);
}