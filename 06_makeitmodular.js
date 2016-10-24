var mymodules = require('./06_mymodules.js');

var folder = process.argv[2];
var ext = process.argv[3];

mymodules(folder,ext,function(err, data){
  if (err) {
    console.log(err);
    return;
  } else {
    data.forEach(function(file){
      console.log(file);
    });
  }
})
