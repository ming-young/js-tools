import formatNumber from '../utils/formatNumber'
/**
 * 百分比过滤器
 * @param {numer|string} value
 * @param {number} fixed 小数位
 * @param {boolean} abs 绝对值
 */
function percent (value, fixed, abs) {
	return `${formatNumber(value * 100, fixed, false, abs)}％`
}

export default percent
