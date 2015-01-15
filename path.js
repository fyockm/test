var path = require('path');

var tests = [
	__dirname + "/../../../../x3meta",
	path.normalize(__dirname + "/../../../../x3meta"),
	path.join(__dirname, "../../../../x3meta"),
	path.resolve(__dirname + "/../../../../x3meta"),
	path.resolve(__dirname, "../../../../x3meta")
];

tests.forEach(function(test) {
	console.log(test);
});
