module.exports = function(grunt) {

  // Initialize config.
  grunt.initConfig({
    pkg: require('./package.json'),
    meta: {
      port: '8080',
      serverPath: './server.js',
      dirs: {
        root: '.',
        public: './public',
        css: './public/css',
        images: './public/img',
        js: './public/js',
        sass: './sass',
      }
    }
  });

  // Load per-task config from separate files.
  grunt.loadTasks('./grunt');

  // Register alias tasks.
  // grunt.registerTask('build',
  //   'Build site files for testing or deployment.',
  //   ['jshint', 'clean', 'jade:prod', 'requirejs:prod', 'stylus:prod']);

  // grunt.registerTask('deploy',
  //   'Deploy site via gh-pages.',
  //   ['build', 'gh-pages']);

  grunt.registerTask('dev',
    'Start an express webserver on localhost.',
    ['express']);

  grunt.registerTask('compileAssets', []);


  // grunt.registerTask('default', ['dev']);
  grunt.registerTask('default', ['concurrent']);
};