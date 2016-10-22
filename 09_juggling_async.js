var http = require("http");

var contents = [];
var status = 0;

function getContents(i, callback) {
	contents.push(i);
	http.get(process.argv[i + 2], function(response){
		var str = '';
		response.on("data", function(data){
			str += data.toString();
		});
		response.on("end", function(){
			contents.push(str);
			status += 1;
		});
	});
	} else {

	}
}
