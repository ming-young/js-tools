import Pinyin from 'tiny-pinyin'

/**
 * 获取汉字简拼(拼音首字母)
 * @param {string} str 需转汉字
 * @param {boolean} lowercase 小写(默认大写)
 */
export default function simpleSpell (str, lowercase = false) {
	// 中文正则
	let chineseReg = /[\u4e00-\u9fa5]+/
	return str.split('').map(o => {
		if (chineseReg.test(o)) {
			return getSimplePinyin(o, lowercase)
		} else {
			return o.toUpperCase()
		}
	}).join('')
}

/**
 * 获取汉字拼音首字母
 * @param {string} chinese 需转汉字
 * @param {boolean} lowercase 小写(默认大写)
 */
export function getSimplePinyin (chinese, lowercase = false) {
	return Pinyin.convertToPinyin(chinese, '-', lowercase)
		.split('-')
		.map(o => o.slice(0, 1))
		.join('')
}
