module.exports = function(grunt) {

  grunt.config('shell', {
    nodemon: {
      command: 'nodemon server.js',
    },
    options: {
      stdout: true
    }
  });

  grunt.loadNpmTasks('grunt-shell');

};
