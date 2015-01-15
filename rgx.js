//
//var type = 'models';
//var stype = type.slice(-1) === 's' ? type.slice(0, -1) : type;
//console.log('end', stype);
//var rgx = new RegExp('(.*)-' + stype + '.(js|coffee)$', 'i');
//
//
//console.log(rgx.test('package/articles/server/articles-MODEL.js') ? 'good' : 'bad');

var fsp = require('path');
var rgx = /(.*)\.(_?js)$/;
rgx = /(^[^.].*)\.(_?js)$/;

['test.js', 'test._js', 'test.rb']
	.forEach(function(test) {
		var path = fsp.join(__dirname, test);
		console.log(rgx.test(path));
	});
