var http = require("http");

var contents = [];
var finishedFlag = 0;

for (var i = 0; i < 3; i++) {
	if (finishedFlag = 2) {
		console.log(contents[0]);
		console.log(contents[1]);
		console.log(contents[2]);
	} else {
		contents[i] = '';
		http.get(process.argv[i + 2], function(response){
			response.on("data", function(data){
				contents[i] += data.toString();
			});
			response.on("end", function(){
				finishedFlag += 1;
			});
		});
	}
}
