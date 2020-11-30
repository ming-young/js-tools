/**
 * 首字母大写
 * @example firstUpper('woolson') // => 'Woolson'
 * @param {string} string 需转换的字符串
 */
function firstUpper (string) {
	return `${string.slice(0, 1).toUpperCase()}${string.slice(1).toLowerCase()}`
}

export default firstUpper
