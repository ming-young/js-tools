"use strict";
/**
 * 客户端判断
 * @returns ['android', 'ios', 'wechat']
 */
Object.defineProperty(exports, "__esModule", { value: true });
function client() {
    var UA = navigator.userAgent;
    var resultArr = [];
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
exports.default = client;
