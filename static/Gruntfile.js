//Gruntfile
module.exports = function(grunt) {

  // requirejs compile options
  var compileOptions = {

      mainConfigFile: './scripts/main.js',
      baseUrl: 'scripts',
      include: ['main'],
      out: './dist/main.min.js',
      removeCombined: false,
      findNestedDependencies: true,

      //Removes console.logs for production
      onBuildWrite: function (moduleName, path, contents) {
          if(/(.*)js\/modules\/(.*)/.test(path)) return contents.replace(/console.log(.*);/g, ';');
          return contents;
      }
  }

  //Initializing the configuration object
  grunt.initConfig({

    // Task configuration
    less: {
        development: {
            options: {
              compress: false,  // no minification in dev
            },
            files: {
              //compiling base.less into styles.css
              "./styles/styles.css":"./styles/base.less"
            }
        },
        production: {
          options: {
            cleancss: true, // minify css
            // compress: true, // minify css
          },
          files: {
            //compiling base.less into main.min.css
            "./dist/main.min.css": "./styles/base.less"
          }
        }
    },
    requirejs: {
        compile: {
            options : compileOptions
        }
    },
    watch: {
        less: {
            // Watch all .less files from the styles directory)
            files: ['./styles/*.less'],
            tasks: ['less'],
            // Reloads the browser
            options: {
              livereload: true  
            }
        },
        requirejs: {
            // Watch only main.js so that we do not constantly recompile the .js files
            files: [ './scripts/main.js' ],
            tasks: [ 'requirejs' ],
            // Reloads the browser
            options: {
              livereload: true  
            }
        }
    }
  });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Task definition
  grunt.registerTask('default', ['less', 'requirejs', 'watch']);

};
