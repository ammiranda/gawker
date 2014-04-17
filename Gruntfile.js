module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['js/*/*.js', 'js/main.js', 'Gruntfile.js'],
			options: {
				
			}
		}
	})
}