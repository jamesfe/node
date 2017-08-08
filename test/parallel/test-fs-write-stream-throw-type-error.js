'use strict';
const common = require('../common');
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const expTypeError = common.expectsError('ERR_INVALID_ARG_TYPE', TypeError);

const example = path.join(common.tmpDir, 'dummy');

common.refreshTmpDir();

assert.doesNotThrow(() => {
  fs.createWriteStream(example, undefined);
});

assert.doesNotThrow(() => {
  fs.createWriteStream(example, null);
});

assert.doesNotThrow(() => {
  fs.createWriteStream(example, 'utf8');
});

assert.doesNotThrow(() => {
  fs.createWriteStream(example, {encoding: 'utf8'});
});

assert.throws(() => {
  fs.createWriteStream(example, 123);
}, expTypeError);

assert.throws(() => {
  fs.createWriteStream(example, 0);
}, expTypeError);

assert.throws(() => {
  fs.createWriteStream(example, true);
}, expTypeError);

assert.throws(() => {
  fs.createWriteStream(example, false);
}, expTypeError);
