var http = require("http");

var contents = [];
var finishedFlag = 0;
var tmp;
function getContent (i) {
		tmp = "";
		http.get(process.argv[i + 2], function(response){

			response.on("data", function(data){
				tmp += data.toString();
			});
			response.on("end", function(end){
				finishedFlag++;
				contents[i] = tmp;

				if (finishedFlag === 3) {
					contents.forEach(item => console.log(item));
				} else {
					getContent(i + 1);
				}
			});

		});
}
getContent(0);
