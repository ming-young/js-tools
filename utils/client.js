/**
 * 客户端判断
 * @returns ['android', 'ios', 'wechat']
 */

function client () {
	const UA = navigator.userAgent

	let resultArr = []

	if (/Android|Linux|Adr/i.test(UA)) resultArr.push('android')
	if (UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) resultArr.push('ios')
	if (UA.match(/MicroMessenger/i)) resultArr.push('wechat')

	return resultArr
}

export default client
