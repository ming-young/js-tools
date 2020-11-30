import has from '../utils/has'
import typer from '../utils/typer'
/**
 * 手机号码过滤器
 * @returns {string} 181 2108 1815
 * @param {string|number} value 手机号
 */
export function phone (value) {
	if (!has('string,number', typer(value))) return value

	value = value.match(/^(\d|\s)+/g) || ''
	value = String(value)
	// 过滤出有效部分
	if (has(value, ' ')) value = value.replace(/\s/g, '')
	if (value.length > 11) value = value.substring(0, 11)

	const numList = value.split('')
	if (numList.length > 3) numList.splice(3, 0, ' ')
	if (numList.length > 8) numList.splice(8, 0, ' ')
	return numList.join('')
}

export default phone
