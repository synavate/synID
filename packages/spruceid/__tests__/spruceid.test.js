'use strict';

const spruceid = require('..');
const assert = require('assert').strict;

assert.strictEqual(spruceid(), 'Hello from spruceid');
console.info('spruceid tests passed');
