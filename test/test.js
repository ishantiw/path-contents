'use strict';

var expect = require('chai').expect;
var pathContents = require('../index');
var mock = require('mock-fs');



describe('#Check all files and folders', function() {

/* Can also be done using mocks */

  mock({
    'path/to/fake/dir': {
      'some-file.txt': 'This is a testing file',
      'foo': {/* empty directory*/}
    },
    'path/to/test.png': new Buffer([8, 6, 7, 5, 3, 0, 9]),
    'some/other/path': {/* another empty directory */}
  });

    let result = pathContents.getAllContents('test/foo');

    it('checking if there is any such dir', function() {
      expect(result).to.not.equal(null);
      mock.restore();
    }),

    it('check all files', function() {
      let countFiles = result.files.length;
      expect(result.files.length).to.equal(3);
      mock.restore();
    }),

    it('check all the folder/subfolders', function() {
      let countDirs = result.dirs.length;
      expect(result.dirs.length).to.equal(3);
      mock.restore();
    })

  });
