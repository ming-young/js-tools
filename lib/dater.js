"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var daterClass_1 = require("./daterClass");
/**
 * 日期对象构造器
 * @param {date|string} date 需转日期
 */
function dater(date) {
    return new daterClass_1.default(date);
}
exports.default = dater;
