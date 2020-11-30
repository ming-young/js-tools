import typer from './typer.js'
/**
 * 包含关系
 * @param {any} obj 数据源
 * @param {any} values 判断目标
 * @param {string} key obj为对象数组用
 */
function has (obj, values, key) {
	let valueType = typer(values)

	switch (typer(obj)) {
		case 'object':
			return valueType === 'string'
				? obj.hasOwnProperty(values)
				: values.some(o => obj.hasOwnProperty(o))
		case 'array':
			if (key) {
				return obj.some(o => valueType === 'array'
					? has(values, o[key])
					: o[key] === values
				)
			} else {
				return valueType === 'array'
					? values.some(o => obj.indexOf(o) !== -1)
					: obj.indexOf(values) !== -1
			}
		case 'string':
			return valueType === 'array'
				? values.some(o => obj.indexOf(o) !== -1)
				: obj.indexOf(values) !== -1
		default:
			return false
	}
}

export default has
