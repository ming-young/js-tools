import Dater from './daterClass';

/**
 * 日期对象构造器
 * @param {date|string} date 需转日期
 */
function dater(date: number | Date | string): Dater {
  return new Dater(date);
}

export default dater;
