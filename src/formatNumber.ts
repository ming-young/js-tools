/**
 * 数字格式化
 * @param {number|sting} numb 需格式化数据
 * @param {number} fixed 小数位
 * @param {boolean} comma 千分符
 * @param {boolean} abs 绝对值
 */
function formatNumber(numb: number, fixed: number = 0, comma: boolean = false, absolute: boolean = false): string {
  const reg = /\B(?=(\d{3})+(?!\d))/g;
  let num: number | string = 0;

  // 处理后端返回带千分符情况
  if (isNaN(numb)) {
    num = Number(String(numb).replace(/,/g, ''));
    if (isNaN(num)) {
      return '-';
    }
  } else {
    num = Number(numb);
  }

  if (absolute) {
    num = Math.abs(num);
  }

  num = num.toFixed(fixed);
  if (comma) {
    num = num.replace(reg, ',');
  }

  return num;
}

export default formatNumber;
