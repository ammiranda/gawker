module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['js/*/*.js', 'js/main.js', 'Gruntfile.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('production', ['requirejs']);
	grunt.registerTask('clean', function() {
		grunt.file.delete()
	})
};