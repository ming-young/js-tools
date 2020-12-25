interface Options {
  [props: string]: any;
  [props: number]: any;
}

/**
 * 对象转 Query String Parameter
 * @param {Object} object 参数对象
 * @param {Boolean} keepEmpty 空值是否保持转换
 * @returns {String}
 */
export function object2Params(obj: Options, keepEmpty: boolean = false): string {
  const objectList = [];

  for (const key in obj) {
    if (!obj[key] && !keepEmpty) {
      continue;
    }
    objectList.push(`${key}=${obj[key]}`);
  }

  return objectList.join('&');
}

export default object2Params;
