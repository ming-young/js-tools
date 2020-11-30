'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var typer_1 = require('./typer');
/**
 * 包含关系
 * @param {any} obj 数据源
 * @param {any} values 判断目标
 * @param {string} key obj为对象数组用
 */
function has(obj, values, key) {
  var valueType = typer_1.default(values);
  switch (typer_1.default(obj)) {
    case 'object':
      return valueType === 'string'
        ? obj.hasOwnProperty(values)
        : values.some(function (o) {
            return obj.hasOwnProperty(o);
          });
    case 'array':
      if (key) {
        return obj.some(function (o) {
          return valueType === 'array' ? has(values, o[key]) : o[key] === values;
        });
      } else {
        return valueType === 'array'
          ? values.some(function (o) {
              return obj.includes(o);
            })
          : obj.includes(values);
      }
    case 'string':
      return valueType === 'array'
        ? values.some(function (o) {
            return obj.includes(o);
          })
        : obj.includes(values);
    default:
      return false;
  }
}
exports.default = has;
