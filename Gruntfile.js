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
      options: {
        sassDir: 'sass',
        cssDir: 'css'
      },
      dev: {
      },
      production: {
        options: {
          environment: 'production',
          outputStyle: 'compressed',
          force: true
        }
      }
    },

    smushit: {
      images: {
        src: ['img/**/*.{png,jpg,jpeg}']
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

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-smushit');

  // Development task checks and concatenates JS, compiles SASS preserving comments and nesting, runs dev server, and starts watch
  grunt.registerTask('default', ['jshint','concat', 'compass:dev', 'connect:server', 'watch']);
  // Build task builds minified versions of static files
  grunt.registerTask('build', ['jshint', 'compass:production', 'concat', 'uglify', 'smushit']);

};