/**
 * 获取数据类型
 * @example typer(null) // => 'null'
 * @param {any} value 需要获取类型的数据
 */
function typer(value: any) {
  const type = Object.prototype.toString.call(value);
  return type.slice(8, -1).toLowerCase();
}

export default typer;
