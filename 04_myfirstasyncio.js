var fs = require('fs');

var str = fs.readFile(process.argv[2], 'utf8', function countLines(err, fileContents) {
  if (!err) {
    var arr = fileContents.split('\n');
    console.log(arr.length - 1);
  }
});
