import firstUpper from './firstUpper';
import formatSecond from './formatSecond';
import headZero from './headZero';

/**
 * 日期扩展类
 * @example new Dater()
 */
class Dater {
  [props: string]: any;
  rawDate: Date;
  /**
   * 构造器
   * @param {string|number|undefined} value 初始化时间
   */
  constructor(value: string | number | Date) {
    this.rawDate = value ? new Date(value) : new Date();
  }

  get year() {
    return this.rawDate.getFullYear();
  }

  get month() {
    return this.rawDate.getMonth();
  }

  get week() {
    return this.rawDate.getDay();
  }

  get date() {
    return this.rawDate.getDate();
  }

  get hour() {
    return this.rawDate.getHours();
  }

  get minute() {
    return this.rawDate.getMinutes();
  }

  get second() {
    return this.rawDate.getSeconds();
  }

  get timestamp() {
    return this.rawDate.getTime();
  }

  /**
   * 按日期等级获取天数
   * @param {String} level 等级，支持'month','year'.
   */
  getDays(level: string = 'month') {
    switch (level) {
      case 'month':
        return new Date(this.year, this.month + 1, 0).getDate();
      case 'year':
        const _4Times = this.year % 4 === 0;
        const _100Times = this.year % 100 !== 0;
        const _400Times = this.year % 400 === 0;
        return (_4Times && _100Times) || _400Times ? 366 : 365;
      default:
        return 0;
    }
  }

  /**
   * 日期操作[加]
   * @example new Dater().add(10, 'date')今天加10天
   * @param {number} value 添加数字
   * @param {string} level 等级
   */
  add(value: any, level: string) {
    const copyTime = this.timestamp;
    const func = `set${firstUpper(level)}`;
    const newDate = new Dater(this.rawDate[func](this[level] + value));
    this.rawDate.setTime(copyTime);
    return newDate;
  }

  /**
   * 日期操作[减]
   * @param {number} value 减去level
   * @param {string} level 等级
   */
  subtract(value: number, level: string) {
    const copyTime = this.timestamp;
    const func = `set${firstUpper(level)}`;
    const newDate = new Dater(this.rawDate[func](this[level] + value * -1));
    this.rawDate.setTime(copyTime);
    return newDate;
  }

  /**
   * 日期差
   * @param {string|number|date} date 对比日期
   */
  diff(date: string | number | Date, level: string) {
    const thisDate = this.timestamp;
    const compare = date instanceof Dater ? date.timestamp : new Date(date).getTime();

    return formatSecond((thisDate - compare) / 1000, level);
  }

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
  format(template: string = 'YYYY-MM-DD') {
    const map: {
      [props: string]: any;
    } = {
      YYYY: this.year,
      YY: String(this.year).slice(-2),
      MM: headZero(this.month + 1),
      M: this.month + 1,
      DD: headZero(this.date),
      dd: this.date,
      HH: headZero(this.hour),
      H: this.hour,
      mm: headZero(this.minute),
      m: this.minute,
      SS: headZero(this.second),
      S: this.second,
      X: this.timestamp / 1000,
      x: this.timestamp,
    };

    Object.keys(map).forEach((key) => {
      template = template.replace(key, map[key]);
    });

    return isNaN(Number(template)) ? template : Number(template);
  }
}

export default Dater;
