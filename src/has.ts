import typer from './typer';
/**
 * 包含关系
 * @param {any} obj 数据源
 * @param {any} values 判断目标
 * @param {string} key obj为对象数组用
 */
function has(obj: any, values: any, key?: string) {
  const valueType = typer(values);

  switch (typer(obj)) {
    case 'object':
      return valueType === 'string' ? obj.hasOwnProperty(values) : values.some((o: any) => obj.hasOwnProperty(o));
    case 'array':
      if (key) {
        return obj.some((o: any) => (valueType === 'array' ? has(values, o[key]) : o[key] === values));
      } else {
        return valueType === 'array' ? values.some((o: any) => obj.includes(o)) : obj.includes(values);
      }
    case 'string':
      return valueType === 'array' ? values.some((o: any) => obj.includes(o)) : obj.includes(values);
    default:
      return false;
  }
}

export default has;
