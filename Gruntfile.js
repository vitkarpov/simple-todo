module.exports = function(grunt) {

  var appLibsPath = 'app/libs/';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // concatenate all js files into the only one
    concat: {
      options: {
        separator: ';\n'
      },
      dist: {
        src: [ 
          appLibsPath + 'jquery.js', 
          appLibsPath + 'underscore.js', 
          appLibsPath + 'backbone.js', 
          appLibsPath + 'localstorage.js',
          appLibsPath + 'handlebars.js',
          'app/templates.js',
          'app/models/*.js',
          'app/collections/*.js',
          'app/views/*.js',
          'app/router.js',
          'app/app.js'
        ],
        dest: 'build/<%= pkg.name %>.js'
      }
    },

    // make it as lightweight as possible
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> — <%= pkg.author %> (<%= pkg.email %>) <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'build/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    //precompile handlebars template into JST
    handlebars: {
      compile: {
        options: {
          separator: '\n',
          namespace: 'app.templates',
          node: true,
          processName: function(filePath) {
            return filePath.split('/').pop().replace('.hbs', '');
          }
        },
        files: {
          'app/templates.js': ['app/templates/*.hbs']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.registerTask('build', ['handlebars', 'concat', 'uglify']);
  grunt.registerTask('default', ['handlebars', 'concat']);

}