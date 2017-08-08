'use strict';
const common = require('../common');
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const example = path.join(common.fixturesDir, 'x.txt');

const expTypeError = common.expectsError('ERR_INVALID_ARG_TYPE', TypeError);

assert.doesNotThrow(function() {
  fs.createReadStream(example, undefined);
});
assert.doesNotThrow(function() {
  fs.createReadStream(example, null);
});
assert.doesNotThrow(function() {
  fs.createReadStream(example, 'utf8');
});
assert.doesNotThrow(function() {
  fs.createReadStream(example, {encoding: 'utf8'});
});

assert.throws(function() {
  fs.createReadStream(example, 123);
}, expTypeError);
assert.throws(function() {
  fs.createReadStream(example, 0);
}, expTypeError);
assert.throws(function() {
  fs.createReadStream(example, true);
}, expTypeError);
assert.throws(function() {
  fs.createReadStream(example, false);
}, expTypeError);
