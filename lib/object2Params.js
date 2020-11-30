"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.object2Params = void 0;
/**
 * 对象转 Query String Parameter
 * @param {Object} object 参数对象
 * @param {Boolean} keepEmpty 空值是否保持转换
 * @returns {String}
 */
function object2Params(obj, keepEmpty) {
    if (keepEmpty === void 0) { keepEmpty = false; }
    var objectList = [];
    for (var key in obj) {
        if (!obj[key] && !keepEmpty) {
            continue;
        }
        objectList.push(key + "=" + obj[key]);
    }
    return objectList.join('&');
}
exports.object2Params = object2Params;
exports.default = object2Params;
