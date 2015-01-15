var url = require('url');


var redirUrl = url.format({
	protocol: (false) ? 'https' : 'http',
	host: 'fyock:8124',
	pathname: '/bundles/sage-exchange/redirect',
	search: 'id=' + 'kasdfnionsadi3no09n3i0n'
});

console.log(redirUrl);
