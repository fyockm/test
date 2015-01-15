var https = require('https');
var fs = require('fs');

var syrPath = '/Users/dfyock/Projects/sage/Syracuse';
var sslPath = syrPath + '/lib/node_modules/syracuse-main/lib/ssl/';

var options = {
	host: 'api.sky.peach.com',
	path: '/api/sky/automation/production/sites',
	rejectUnauthorized: false,
	method: 'GET',
	key: fs.readFileSync(sslPath + 'seos.key'),
	cert: fs.readFileSync(sslPath + 'seos.crt')
};

var req = https.request(options, function(res) {
	console.log('statusCode: ', res.statusCode);
	console.log('headers: ', res.headers);

	res.on('data', function(d) {
		process.stdout.write(d);
	});
});

req.end();

req.on('error', function(e) {
	console.error(e);
});
