'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * 数字格式化
 * @param {number|sting} numb 需格式化数据
 * @param {number} fixed 小数位
 * @param {boolean} comma 千分符
 * @param {boolean} abs 绝对值
 */
function formatNumber(numb, fixed, comma, absolute) {
  if (fixed === void 0) {
    fixed = 0;
  }
  if (comma === void 0) {
    comma = false;
  }
  if (absolute === void 0) {
    absolute = false;
  }
  var reg = /\B(?=(\d{3})+(?!\d))/g;
  var num = 0;
  // 处理后端返回带千分符情况
  if (isNaN(numb)) {
    num = Number(String(numb).replace(/,/g, ''));
    if (isNaN(num)) {
      return '-';
    }
  } else {
    num = Number(numb);
  }
  if (absolute) {
    num = Math.abs(num);
  }
  num = num.toFixed(fixed);
  if (comma) {
    num = num.replace(reg, ',');
  }
  return num;
}
exports.default = formatNumber;
