var server = require('http');

server.get(data, function(response){
  response.setEncoding("utf8");
  response.on("data", function(data){
    print(data);
  })
})
