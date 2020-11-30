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
export declare function object2Params(obj: Options, keepEmpty?: boolean): string;
export default object2Params;
