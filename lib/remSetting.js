"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 计算HTML节点font-size
 * @params {Object} doc document对象
 * @params {Object} win window对象
 * @params {Number} designWidth 设计稿宽度
 * 设计稿宽度750px 则 1rem = 10px, 设计稿字体 30px 则 3rem
 */
function calculate(designWidth) {
    if (designWidth === void 0) { designWidth = 750; }
    if (!document || !window) {
        return;
    }
    var docEl = document.documentElement;
    var clientWidth = docEl.clientWidth;
    if (clientWidth === undefined) {
        return;
    }
    docEl.style.fontSize = (10 * clientWidth) / designWidth + 'px';
}
function remSetting(designWidth) {
    if (designWidth === void 0) { designWidth = 750; }
    window.addEventListener('resize', function () {
        calculate(designWidth);
    }, false);
    calculate(designWidth);
}
exports.default = remSetting;
