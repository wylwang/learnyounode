var net = require("net");
var server = net.createServer(function (socket) {
  var date = new Date();
  var strYear = date.getFullYear();
  var strMonth = "";
  var strDate = "";
  var strHours = "";
  var strMinutes = "";
  if (date.getMonth() < 9) {
    strMonth = "0" + date.getMonth() + 1;
  } else {
    strMonth = date.getMonth() + 1;
  }
  if (date.getDate() < 10) {
    strDate = "0" + date.getDate();
  } else {
    strDate = date.getDate();
  }
  if (date.getHours() < 10) {
    strHours = "0" + date.getHours();
  } else {
    strHours = date.getHours();
  }
  if (date.getMinutes() < 10) {
    strMinutes = "0" + date.getMinutes();
  } else {
    strMinutes = date.getMinutes();
  }

  var retTime = strYear + "-" + strMonth + "-" + strDate + " " + strHours + ":" + strMinutes;
  socket.end(retTime);
  socket.unref();
server.listen(process.argv[2]);
  server.close();
});
server.listen(process.argv[2]);
