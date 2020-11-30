/**
 * 客户端判断
 * @returns ['android', 'ios', 'wechat']
 */

function client(): string[] {
  const UA = navigator.userAgent;

  const resultArr = [];

  if (/Android|Linux|Adr/i.test(UA)) {
    resultArr.push('android');
  }
  if (UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    resultArr.push('ios');
  }
  if (UA.match(/MicroMessenger/i)) {
    resultArr.push('wechat');
  }

  return resultArr;
}

export default client;
