declare const verification: {
  Reg: {
    HTTP_URL: RegExp;
    MOBILE: RegExp;
    CAR: RegExp;
    MAIL: RegExp;
    TEL: RegExp;
    DECIMAL: RegExp;
    INTEGER: RegExp;
    NEGATIVE: RegExp;
    NUMBER: RegExp;
  };
  checkDecimal(value: string): 'success' | '数字格式有误' | '不能为空';
  checkInteger(value: string): 'success' | '数字格式有误' | '不能为空';
  checkNegative(value: string): 'success' | '数字格式有误' | '不能为空';
  checkNumber(value: string): 'success' | '数字格式有误' | '不能为空';
  checkHttp(value: string): 'success' | '不能为空' | 'HTTP_URL格式有误';
  checkMobile(value: string): 'success' | '不能为空' | '手机号码格式有误';
  checkTel(value: string): 'success' | '不能为空' | '电话号码格式有误';
  checkMail(value: string): 'success' | '不能为空' | '邮箱格式有误';
  checkCar(value: string): 'success' | '不能为空' | '车牌号格式有误';
  checkID(e: string): string;
  checkBank(bankno: string): string;
};
export default verification;
