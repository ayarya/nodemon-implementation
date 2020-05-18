#!/usr/bin/env node

const chokidar = require('chokidar');
const debounce = require('lodash.debounce');

const start = debounce(() => {
	console.log('Starting User program');
}, 100);
chokidar
	.watch('.')
	.on('add', start)
	.on('change', () => {
		console.log('File changed');
	})
	.on('unlink', () => {
		console.log('file unlinked');
	});
