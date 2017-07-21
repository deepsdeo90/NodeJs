var fs = require('fs');
fs.readFile('test.txt',function(err,data){
	if(err){console.log('Error in reading file');}
	setTimeout(()=>{
		console.log(data.toString())
	},1000);
});
console.log("End of read file")