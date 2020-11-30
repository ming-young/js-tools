import typer from './typer';

/**
 * 是否为空
 * @param {Any} value 判断的数据
 */
function isEmpty(value: any): boolean {
  const type = typer(value);

  switch (type) {
    case 'object':
      return Object.keys(value).length === 0;
    case 'array':
      return value.length === 0;
    case 'number':
      return !isNaN(value);
    case 'set':
      const list = Array.from(value);
      return list.length === 0;
    case 'map':
      return value.size === 0;
    default:
      return !value;
  }
}

export default isEmpty;
