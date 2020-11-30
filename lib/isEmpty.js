'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var typer_1 = require('./typer');
/**
 * 是否为空
 * @param {Any} value 判断的数据
 */
function isEmpty(value) {
  var type = typer_1.default(value);
  switch (type) {
    case 'object':
      return Object.keys(value).length === 0;
    case 'array':
      return value.length === 0;
    case 'number':
      return !isNaN(value);
    case 'set':
      var list = Array.from(value);
      return list.length === 0;
    case 'map':
      return value.size === 0;
    default:
      return !value;
  }
}
exports.default = isEmpty;
