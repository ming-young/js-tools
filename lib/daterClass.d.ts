/**
 * 日期扩展类
 * @example new Dater()
 */
declare class Dater {
  [props: string]: any;
  rawDate: Date;
  /**
   * 构造器
   * @param {string|number|undefined} value 初始化时间
   */
  constructor(value: string | number | Date);
  get year(): number;
  get month(): number;
  get week(): number;
  get date(): number;
  get hour(): number;
  get minute(): number;
  get second(): number;
  get timestamp(): number;
  /**
   * 按日期等级获取天数
   * @param {String} level 等级，支持'month','year'.
   */
  getDays(level?: string): number;
  /**
   * 日期操作[加]
   * @example new Dater().add(10, 'date')今天加10天
   * @param {number} value 添加数字
   * @param {string} level 等级
   */
  add(value: any, level: string): Dater;
  /**
   * 日期操作[减]
   * @param {number} value 减去level
   * @param {string} level 等级
   */
  subtract(value: number, level: string): Dater;
  /**
   * 日期差
   * @param {string|number|date} date 对比日期
   */
  diff(date: string | number | Date, level: string): string | undefined;
  /**
   * 日期格式化
   * @example {string} 'YYYY-MM-DD HH:mm:SS'
   * @param {string} template 日期输出格式
   * [年] YYYY-2018 YY-18
   * [月] MM-02 M-2
   * [日] DD-08 D-8
   * [时] HH-02 H-2
   * [分] mm-02 m-2
   * [秒] SS-02 S-2
   * [时间戳] X-1410715640.579 x-1410715640579
   */
  format(template?: string): string | number;
}
export default Dater;
