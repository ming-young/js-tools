'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * 首字母大写
 * @example firstUpper('woolson') // => 'Woolson'
 * @param {string} string 需转换的字符串
 */
function firstUpper(str) {
  return '' + str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}
exports.default = firstUpper;
