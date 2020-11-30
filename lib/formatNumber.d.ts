/**
 * 数字格式化
 * @param {number|sting} numb 需格式化数据
 * @param {number} fixed 小数位
 * @param {boolean} comma 千分符
 * @param {boolean} abs 绝对值
 */
declare function formatNumber(numb: number, fixed?: number, comma?: boolean, absolute?: boolean): string;
export default formatNumber;
