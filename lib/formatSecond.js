'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * 秒格式化
 * @param {number} value 格式化数据
 * @param {string} level 格式化等级
 * @param {number} fixed 小数位
 */
function formatSecond(value, level, fixed) {
  if (fixed === void 0) {
    fixed = 0;
  }
  var map = {
    minute: 60,
    hour: 3600,
    date: 24 * 3600,
    week: 7 * 24 * 3600,
    month: 30 * 24 * 3600,
    year: 365 * 24 * 3600,
  };
  if (!map[level] || isNaN(value)) {
    console.error('[Utils/formatSecound]Error: 输入错误或输出格式错误！');
    return;
  }
  return Number(value / map[level]).toFixed(fixed);
}
exports.default = formatSecond;
