#!/usr/bin/env node

var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var catw = require('catw');

var cmd = process.argv[2];
if (cmd === 'build') build({ watch: false });
else if (cmd === 'watch') build({ watch: true });
else usage(1);

function build (opts) {
  var js = opts.watch ? watchify : browserify;
  js('./browser/main.js').bundle()
    .pipe(fs.createWriteStream('static/bundle.js'))
  ;

  var css = catw('style/*.css', { watch: opts.watch });
  css.on('stream', function (stream) {
    stream.pipe(fs.createWriteStream('static/bundle.css'));
  });
}

function usage (code) {
  console.error('usage: ./task.js { build | watch }');
  if (code) process.exit(code);
}
