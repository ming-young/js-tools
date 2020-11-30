'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var freeGlobal_1 = require('./freeGlobal');
/** Detect free variable `self`. */
var freeSelf = typeof self === 'object' && self !== null && self.Object === Object && self;
/** Used as a reference to the global object. */
var root = freeGlobal_1.default || freeSelf || Function('return this')(); // eslint-disable-line
exports.default = root;
