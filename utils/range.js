/**
 * 生成数字区间数组
 * @param {number} start 数组开始数字
 * @param {number} end 数组结束数字
 */
function range (start, end) {
	const length = end - start + 1
	return new Array(length).fill(start).map((o, i) => o + i)
}

export default range
