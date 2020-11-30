'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * 获取数据类型
 * @example typer(null) // => 'null'
 * @param {any} value 需要获取类型的数据
 */
function typer(value) {
  var type = Object.prototype.toString.call(value);
  return type.slice(8, -1).toLowerCase();
}
exports.default = typer;
