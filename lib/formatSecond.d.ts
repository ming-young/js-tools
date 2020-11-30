/**
 * 秒格式化
 * @param {number} value 格式化数据
 * @param {string} level 格式化等级
 * @param {number} fixed 小数位
 */
declare function formatSecond(value: number, level: string, fixed?: number): string | undefined;
export default formatSecond;
