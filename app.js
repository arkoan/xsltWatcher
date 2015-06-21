"use strict";
var fs = require('fs');
var _ = require('lodash');
var exec = require('child_process').exec;

//console.error('arguments:', process.execArgv);

var args = process.argv;
var sourceIndex = _.indexOf(args, '-s') + 1;
var transformIndex = _.indexOf(args, '-t') + 1;
var resultIndex = _.indexOf(args, '-r') + 1;

if (sourceIndex === 0 || transformIndex === 0 || resultIndex === 0) {
	return console.error('missing argument.');
}

function executeXsltTransform(source, transform, result) {
	console.log('xsltproc --output ' + result + ' ' + transform + ' ' + source);
	exec('xsltproc --output ' + result + ' ' + transform + ' ' + source);
}

var sourceFile = process.argv[sourceIndex];
var transformFile = process.argv[transformIndex];
var resultFile = process.argv[resultIndex];
console.log('Local path is          : ' + __dirname + '/' + sourceFile);
console.log('The source file is     : ', sourceFile);
console.log('The transform file is  : ', transformFile);
console.log('The result file is     : ', resultFile);


fs.watchFile(__dirname + '/' + sourceFile, function() {
	console.log('Source file %s has changed', sourceFile);
	executeXsltTransform(sourceFile, transformFile, resultFile);
});

fs.watchFile(__dirname + '/' + transformFile, function() {
	console.log('XSLT file %s has changed', transformFile);
	executeXsltTransform(sourceFile, transformFile, resultFile);
});