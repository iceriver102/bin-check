'use strict';
var path = require('path');
var test = require('ava');
var binCheck = require('../');

test('test a binary and return true', function (t) {
	t.plan(1);

	var bin = path.join(__dirname, 'fixtures/optipng-linux');

	if (process.platform === 'darwin') {
		bin = path.join(__dirname, 'fixtures/optipng-osx');
	} else if (process.platform === 'win32') {
		bin = path.join(__dirname, 'fixtures/optipng-win32.exe');
	}

	binCheck(bin).then(function (works) {
		t.assert(works, works);
	});
});
