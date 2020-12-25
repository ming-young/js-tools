/**
 * 首字母大写
 * @example firstUpper('woolson') // => 'Woolson'
 * @param {string} string 需转换的字符串
 */
function firstUpper(str: string) {
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1).toLowerCase()}`;
}

export default firstUpper;
