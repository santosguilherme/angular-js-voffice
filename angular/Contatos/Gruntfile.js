module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      dist: ['dist/'],
      tmp: ['dist/lib/lib.js', 'dist/js/scripts.js']
    },
	jshint: {
	  all : ['js/**/*.js']
	},
	uglify: {
       dist: {
         src: ['dist/js/scripts.js'],
         dest: 'dist/js/scripts.min.js'
       }
    },
	concat: {
      js: {
         src: ['js/**/*.js'],
         dest: 'dist/js/scripts.js'
       },
       lib: {
         src: ['lib/angular.js', 'lib/angular-route.js', 'lib/angular-sanitize.js'],
         dest: 'dist/lib/lib.js'
       },
       all: {
         src: ['dist/lib/lib.js', 'dist/js/scripts.min.js'],
         dest: 'dist/all.js'
       }
     }
  });
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('dist', ['clean:dist', 'jshint', 'concat:lib', 'concat:js', 'uglify', 'concat:all','clean:tmp']);
}