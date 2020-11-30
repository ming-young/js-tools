"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var has_1 = require("./has");
var typer_1 = require("./typer");
/**
 * 号码格式化
 * @param {string|number} phone 号码
 */
function formatPhone(phone) {
    if (!has_1.default(['string'], typer_1.default(phone))) {
        return phone;
    }
    if (phone.match(/^(\d|\s)+/g)) {
        phone = phone.match(/^(\d|\s)+/g)[0];
    }
    else {
        phone = '';
    }
    // 过滤出有效部分
    if (has_1.default(phone, ' ')) {
        phone = phone.replace(/\s/g, '');
    }
    if (phone.length > 11) {
        phone = phone.substring(0, 11);
    }
    var numList = phone.split('');
    if (numList.length > 3) {
        numList.splice(3, 0, ' ');
    }
    if (numList.length > 8) {
        numList.splice(8, 0, ' ');
    }
    return numList.join('');
}
exports.default = formatPhone;
