import dater from '../utils/dater'

/**
 * 日期过滤器
 * @returns {string}
 * @param {string} value 日期
 * @param {string} template 输出格式
 */
function date (value, template) {
	return dater(value).format(template)
}

export default date
