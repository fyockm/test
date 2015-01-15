function titleCase(flag) {
	small = function(word) {
		return (word.length <= 3) ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1);
	};
	return flag.split('-').reduce(function(str, word) {
		return small(str) + ' ' + small(word);
	});
}

function titleCase2(flag) {
	return flag.split('-').map(function(word) {
		return (word.length <= 3) ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1);
	}).join(' ');
}

function tit(str) {
	return str.replace('-', ' ').replace(/\w\S*/g, function(txt) {
		return (txt.length <= 3 ? txt.toUpperCase() : txt[0].toUpperCase() + txt.slice(1));
	});
}

['coffee-script', 'ez-streams', 'syracuse-pdf', 'syracuse-ui'].forEach(function(name) {
	console.log(titleCase(name));
	console.log(titleCase2(name));
	console.log(tit(name));
});
