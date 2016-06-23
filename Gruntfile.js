module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                src: [
                    'src/js/app.js',
                    'src/js/factory/**/*.js',
                    'src/js/directive/**/*.js',
                    'src/js/controller/**/*.js'
                ],
                dest: 'public/js/<%= pkg.name %>.min.js'
            }
        },
        concat: {
            options: {
                separator: "\n;\n",
            },
            dist: {
                src: [
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/angular/angular.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js'
                ],
                dest: 'public/js/lib.min.js'
            },
        },
        copy: {
            main: {
                expand: true,
                cwd: 'src',
                src: 'index.html',
                dest: 'public/'
            },
            json: {
                expand: true,
                cwd: 'json',
                src: '**/*.json',
                dest: 'public/json/'
            },
            css: {
                expand: true,
                cwd: 'src/css',
                src: '**/*.css',
                dest: 'public/css/'
            },
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/',
                src: '*',
                dest: 'public/bootstrap'
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
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', ['copy', 'concat', 'uglify']);
    grunt.registerTask('default', ['watch']);
}