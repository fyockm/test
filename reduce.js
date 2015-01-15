var launchOut = [{
	code: 0,
	output: 'asdf'
}, {
	code: 70,
	output: 'ERROR'
}];


var launchErr = launchOut.reduce(function(p, c) {
	return {
		code: p.code + c.code,
		output: p.output + c.output
	};
});

console.log(launchErr);
