import formatNumber from '../utils/formatNumber'
/**
 * 货币过滤器
 * @returns {number|string}
 * @param {number|string} value 金额数据
 * @param {number} fixed 小数位
 * @param {boolean} comma 千分位
 * @param {string} symbol 显示货币符号 ¥/$
 */
function money (value, fixed, comma, abs, symbol = '¥') {
	return `${symbol}${formatNumber(value, fixed, comma, abs)}`
}

export default money
