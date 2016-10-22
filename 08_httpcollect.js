var http = require("http");

var url = process.argv[2];
http.get(url, function(response){
	var total = "";
	response.on("data",function(data){
		total += data.toString();
	});
	response.on("end",function(){
		console.log(total.length);
		console.log(total);
	});
})
