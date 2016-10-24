module.exports = function (folder, ext, callback){

  var fs = require('fs');

  var path = require('path');

  fs.readdir(folder, function (err, files) {
    if (err) return callback(err);
    var filelist = [];
    files.forEach(function(file) {
        if (path.extname(file).substr(1) === ext) {
            filelist.push(file);
        }
    })
    callback(null,filelist);
  })
}
