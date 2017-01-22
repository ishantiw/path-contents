/**
* Path Contents: A module which takes target path as an argument and returns contents in the form of filesnames and directories
* @author Ishan Tiwari <ishan210788@gmail.com>
*/

'use strict';
let fs = require("fs");
let path = require("path");

let pathContent = [];
let dirNames = [];
let fileNames = [];

/**
   * A function that takes target path as an argument and returns contents in the form of filesnames and directories
   * @param {string}      dir      A string which represents the target path
   * @returns  {Array}    pathContent  An array object which has two arrayObjects, one for directory path and other for path of filenames.
   */

module.exports.getAllContents = function getContents(dir, filelist = []) {

try {
  fs.readdirSync(dir).forEach(file => {
    if(fs.statSync(path.join(dir, file)).isDirectory()) {
      dirNames.push(path.join(dir, file));
      getContents(path.join(dir, file), filelist);
    } else {
      fileNames.push(path.join(dir, file));
    }
  });

  pathContent.push({
    'dirs': dirNames,
    'files': fileNames
  });

  return pathContent[0];
  
} catch(err) {
    return new Error('Error occured: '+err);
  }
}
