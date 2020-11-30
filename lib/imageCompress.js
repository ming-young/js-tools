'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var typer_1 = require('./typer');
/**
 * 图片压缩
 * @param {DOMObject|string} img dom对象、图片链接、base64
 * @param {number} percent 压缩比例 0-1
 * @returns {promise|string}
 */
function imageCompress(image, percent) {
  if (typer_1.default(image) === 'string') {
    return new Promise(function (resolve, reject) {
      var $img = document.createElement('img');
      $img.src = image;
      $img.onload = function () {
        return resolve(compress($img, percent));
      };
      $img.onerror = function (err) {
        return reject(err);
      };
    });
  } else {
    return compress(image, percent);
  }
}
/**
 * 图片压缩
 * @param {DOMObject} img dom对象
 * @param {number} percent 压缩比例 0-1
 */
function compress(image, percent) {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var naturalHeight = image.naturalHeight;
  var naturalWidth = image.naturalWidth;
  // 设置 canvas 宽高
  canvas.setAttribute('width', naturalWidth);
  canvas.setAttribute('height', naturalHeight);
  context.drawImage(image, 0, 0, naturalWidth, naturalHeight);
  return canvas.toDataURL('image/jpeg', +percent.toFixed(4));
}
exports.default = imageCompress;
