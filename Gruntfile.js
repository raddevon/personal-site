var scripts = ['js/jquery-1.9.1.js', 'js/jquery.animate-enhanced.min.js','jquery.easing.min.js', 'js/**/*.js', '!js/scripts.js'];

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        force: true
      },
      all: scripts + ['!js/jquery-1.9.1.js', '!js/jquery.animate-enhanced.min.js', '!jquery.easing.min.js']
    },

    concat: {
      dist: {
        src: scripts,
        dest: 'js/scripts.js'
      }
    },

    uglify: {
      min: {
        files: {
          'js/scripts.js': ['js/scripts.js']
        }
      }
    },

    compass: {
      dev: {
        options: {
          sassDir: 'sass',
          cssDir: 'css'
        }
      },
      production: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production',
          outputStyle: 'compressed',
          force: true
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: scripts,
        tasks: ['jshint', 'concat']
      },
      styles: {
        files: ['sass/**/*.{sass,scss}'],
        tasks: ['compass:dev']
      }
    },

    connect: {
      server: {
        options: {
          port: 8888,
          hostname: '*'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['jshint','concat', 'compass:dev', 'connect:server', 'watch']);
  grunt.registerTask('build', ['jshint', 'compass:production', 'concat', 'uglify']);

};