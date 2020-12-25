import has from '../normalFunction/has';
import typer from '../normalFunction/typer';
/**
 * 号码格式化
 * @param {string|number} phone 号码
 */
function formatPhone(phone: string) {
  if (!has(['string'], typer(phone))) {
    return phone;
  }
  if (phone.match(/^(\d|\s)+/g)) {
    phone = phone.match(/^(\d|\s)+/g)![0];
  } else {
    phone = '';
  }

  // 过滤出有效部分
  if (has(phone, ' ')) {
    phone = phone.replace(/\s/g, '');
  }
  if (phone.length > 11) {
    phone = phone.substring(0, 11);
  }

  const numList = phone.split('');
  if (numList.length > 3) {
    numList.splice(3, 0, ' ');
  }
  if (numList.length > 8) {
    numList.splice(8, 0, ' ');
  }

  return numList.join('');
}

export default formatPhone;
