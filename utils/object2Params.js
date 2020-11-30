/**
 * 对象转 Query String Parameter
 * @param {Object} object 参数对象
 * @param {Boolean} keepEmpty 空值是否保持转换
 * @returns {String}
 */
export function object2Params (object, keepEmpty = false) {
	let objectList = []

	for (let key in object) {
		if (!object[key] && !keepEmpty) {
			continue
		}
		objectList.push(`${key}=${object[key]}`)
	}

	return objectList.join('&')
}

export default object2Params
