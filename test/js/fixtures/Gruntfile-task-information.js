'use strict';

const write = process.stdout.write.bind(process.stdout);

function log(str) {
  write(str + '\n', 'utf8');
}

module.exports = function(grunt) {

  require('../../../src/index')(grunt, {
    beforeEach(args) {
      log(JSON.stringify(args));
    }
  });

  grunt.initConfig({});

  grunt.registerTask('plugin_tester', () => {
    grunt.log.writeln('Plugin is printing');
  });
};
