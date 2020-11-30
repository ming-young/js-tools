"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 文件读取为base64
 * @param {Object} file 文件
 * @returns {String}
 */
function fileReader(image) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () { return resolve(reader.result); };
        reader.onerror = function (err) { return reject(err); };
        reader.readAsDataURL(image);
    });
}
exports.default = fileReader;
