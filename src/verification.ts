const verification = {
  Reg: {
    HTTP_URL: /^((https|http)?:\/\/)/, // 校验http url
    MOBILE: /^((\+86)|(86))?(1[3|4|5|7|8][0-9]\d{8})$/, // 手机号码
    CAR: /^[\u4E00-\u9FA5]{1}[a-zA-Z]{1}[a-zA-Z0-9]{5}$/, // 车牌号
    MAIL: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/, // 邮箱
    TEL: /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/, // 固话
    DECIMAL: /^[0-9]+(\.[0-9]+)?$/, // 正数带小数
    INTEGER: /^[0-9]*$/, // 正整数
    NEGATIVE: /^-[0-9]*$/, // 负整数
    NUMBER: /^-?[0-9]+(\.[0-9]+)?$/, // 所有数字
  },

  checkDecimal(value: string) {
    // 校验正数带小数
    if (value) {
      if (!this.Reg.DECIMAL.test(value)) {
        return '数字格式有误';
      } else {
        return 'success';
      }
    } else {
      return '不能为空';
    }
  },
  checkInteger(value: string) {
    // 校验正整数
    if (value) {
      if (!this.Reg.INTEGER.test(value)) {
        return '数字格式有误';
      } else {
        return 'success';
      }
    } else {
      return '不能为空';
    }
  },
  checkNegative(value: string) {
    // 校验负整数
    if (value) {
      if (!this.Reg.NEGATIVE.test(value)) {
        return '数字格式有误';
      } else {
        return 'success';
      }
    } else {
      return '不能为空';
    }
  },
  checkNumber(value: string) {
    // 校验数字
    if (value) {
      if (!this.Reg.NUMBER.test(value)) {
        return '数字格式有误';
      } else {
        return 'success';
      }
    } else {
      return '不能为空';
    }
  },
  checkHttp(value: string) {
    // 校验HTTP_URL
    if (value) {
      if (!this.Reg.HTTP_URL.test(value)) {
        return 'HTTP_URL格式有误';
      } else {
        return 'success';
      }
    } else {
      return '不能为空';
    }
  },
  checkMobile(value: string) {
    // 校验手机号
    if (value) {
      if (!this.Reg.MOBILE.test(value)) {
        return '手机号码格式有误';
      } else {
        return 'success';
      }
    } else {
      return '不能为空';
    }
  },
  checkTel(value: string) {
    // 校验固话
    if (value) {
      if (!this.Reg.TEL.test(value)) {
        return '电话号码格式有误';
      } else {
        return 'success';
      }
    } else {
      return '不能为空';
    }
  },
  checkMail(value: string) {
    // 校验邮箱
    if (value) {
      if (!this.Reg.MAIL.test(value)) {
        return '邮箱格式有误';
      } else {
        return 'success';
      }
    } else {
      return '不能为空';
    }
  },
  checkCar(value: string) {
    // 校验车牌号
    if (value) {
      if (!this.Reg.CAR.test(value)) {
        return '车牌号格式有误';
      } else {
        return 'success';
      }
    } else {
      return '不能为空';
    }
  },
  checkID(e: string): string {
    // 校验身份证
    const Errors = ['success', '身份证号码位数不正确', '身份证号码校验错误'];

    e = e.toUpperCase();
    if (!/(^\d{15}$)|(^\d{17}(\d|X)$)/.test(e)) {
      return Errors[1];
    }
    let t;
    let n;
    t = e.length;
    if (t === 15) {
      n = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
      const r = e.match(n)!;
      const i = new Date(r[2] + '/' + r[3] + '/' + r[4]);
      const s = i.getFullYear() === Number(r[2]) && i.getMonth() + 1 === Number(r[3]) && i.getDate() === Number(r[4]);
      if (!s) {
        return Errors[2];
      } else {
        return Errors[0];
      }
    }
    if (t === 18) {
      n = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})(\d|X)$/);
      const r = e.match(n)!;
      const i = new Date(r[2] + '/' + r[3] + '/' + r[4]);
      const s = i.getFullYear() === Number(r[2]) && i.getMonth() + 1 === Number(r[3]) && i.getDate() === Number(r[4]);
      if (!s) {
        return Errors[2];
      } else {
        let o;
        const u = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        const a = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
        let f = 0;
        let l;
        for (l = 0; l < 17; l++) {
          f += Number(e.substr(l, 1)) * u[l];
        }
        o = a[f % 11];
        if (o !== e.substr(17, 1)) {
          return Errors[2];
        }
        return Errors[0];
      }
    }
    return Errors[2];
  },
  checkBank(bankno: string) {
    // 银行卡格式校验
    const Errors = [
      'success',
      '银行卡号长度必须在16到19之间',
      '银行卡号必须全为数字',
      '银行卡号开头不符合规范',
      '银行卡号校验失败',
    ];
    if (bankno.length < 16 || bankno.length > 19) {
      return Errors[1];
    }
    // 开头6位
    const strBin =
      '10,18,19,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99'; // 加了一个19
    if (!strBin.includes(bankno.substring(0, 2))) {
      return Errors[3];
    }
    const lastNum = bankno.substr(bankno.length - 1, 1); // 取出最后一位（与luhm进行比较）

    const first15Num = bankno.substr(0, bankno.length - 1); // 前15或18位
    const newArr = [];
    for (let i = first15Num.length - 1; i > -1; i--) {
      // 前15或18位倒序存进数组
      newArr.push(first15Num.substr(i, 1));
    }
    const arrJiShu = []; // 奇数位*2的积 <9
    const arrJiShu2 = []; // 奇数位*2的积 >9

    const arrOuShu = []; // 偶数位数组
    for (let j = 0; j < newArr.length; j++) {
      if ((j + 1) % 2 === 1) {
        // 奇数位
        if (Number(newArr[j]) * 2 < 9) {
          arrJiShu.push(Number(newArr[j]) * 2);
        } else {
          arrJiShu2.push(Number(newArr[j]) * 2);
        }
      } else {
        // 偶数位
        arrOuShu.push(newArr[j]);
      }
    }

    const jishuChild1 = []; // 奇数位*2 >9 的分割之后的数组个位数
    const jishuChild2 = []; // 奇数位*2 >9 的分割之后的数组十位数
    for (let h = 0; h < arrJiShu2.length; h++) {
      jishuChild1.push(Number(String(arrJiShu2[h])) % 10);
      jishuChild2.push(Number(String(arrJiShu2[h])) / 10);
    }

    let sumJiShu = 0; // 奇数位*2 < 9 的数组之和
    let sumOuShu = 0; // 偶数位数组之和
    let sumJiShuChild1 = 0; // 奇数位*2 >9 的分割之后的数组个位数之和
    let sumJiShuChild2 = 0; // 奇数位*2 >9 的分割之后的数组十位数之和
    let sumTotal = 0;
    for (let m = 0; m < arrJiShu.length; m++) {
      sumJiShu = sumJiShu + Number(String(arrJiShu[m]));
    }

    for (let n = 0; n < arrOuShu.length; n++) {
      sumOuShu = sumOuShu + Number(arrOuShu[n]);
    }

    for (let p = 0; p < jishuChild1.length; p++) {
      sumJiShuChild1 = sumJiShuChild1 + Number(String(jishuChild1[p]));
      sumJiShuChild2 = sumJiShuChild2 + Number(String(jishuChild2[p]));
    }
    // 计算总和
    sumTotal = sumJiShu + sumOuShu + sumJiShuChild1 + sumJiShuChild2;

    // 计算Luhm值
    const k = sumTotal % 10 === 0 ? 10 : sumTotal % 10;
    const luhm = 10 - k;
    if (String(lastNum) === String(luhm)) {
      return Errors[0];
    } else {
      return Errors[4];
    }
  },
};

export default verification;
