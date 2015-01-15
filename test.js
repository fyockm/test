#!/usr/bin/env node
// var fs = require('fs');
// ['browser','static','style'].forEach(fs.mkdir);
// fs.writeFile('task.js', '#!/usr/bin/env node\n', { mode: 0775 });

var validate = function (git_repo) {
  return git_repo ? git_repo.split('/').length == 2 : false;
};

console.log(validate(process.argv[2]));
