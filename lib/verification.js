"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var verification = {
    Reg: {
        HTTP_URL: /^((https|http)?:\/\/)/,
        MOBILE: /^((\+86)|(86))?(1[3|4|5|7|8][0-9]\d{8})$/,
        CAR: /^[\u4E00-\u9FA5]{1}[a-zA-Z]{1}[a-zA-Z0-9]{5}$/,
        MAIL: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
        TEL: /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/,
        DECIMAL: /^[0-9]+(\.[0-9]+)?$/,
        INTEGER: /^[0-9]*$/,
        NEGATIVE: /^-[0-9]*$/,
        NUMBER: /^-?[0-9]+(\.[0-9]+)?$/,
    },
    checkDecimal: function (value) {
        // 校验正数带小数
        if (value) {
            if (!this.Reg.DECIMAL.test(value)) {
                return '数字格式有误';
            }
            else {
                return 'success';
            }
        }
        else {
            return '不能为空';
        }
    },
    checkInteger: function (value) {
        // 校验正整数
        if (value) {
            if (!this.Reg.INTEGER.test(value)) {
                return '数字格式有误';
            }
            else {
                return 'success';
            }
        }
        else {
            return '不能为空';
        }
    },
    checkNegative: function (value) {
        // 校验负整数
        if (value) {
            if (!this.Reg.NEGATIVE.test(value)) {
                return '数字格式有误';
            }
            else {
                return 'success';
            }
        }
        else {
            return '不能为空';
        }
    },
    checkNumber: function (value) {
        // 校验数字
        if (value) {
            if (!this.Reg.NUMBER.test(value)) {
                return '数字格式有误';
            }
            else {
                return 'success';
            }
        }
        else {
            return '不能为空';
        }
    },
    checkHttp: function (value) {
        // 校验HTTP_URL
        if (value) {
            if (!this.Reg.HTTP_URL.test(value)) {
                return 'HTTP_URL格式有误';
            }
            else {
                return 'success';
            }
        }
        else {
            return '不能为空';
        }
    },
    checkMobile: function (value) {
        // 校验手机号
        if (value) {
            if (!this.Reg.MOBILE.test(value)) {
                return '手机号码格式有误';
            }
            else {
                return 'success';
            }
        }
        else {
            return '不能为空';
        }
    },
    checkTel: function (value) {
        // 校验固话
        if (value) {
            if (!this.Reg.TEL.test(value)) {
                return '电话号码格式有误';
            }
            else {
                return 'success';
            }
        }
        else {
            return '不能为空';
        }
    },
    checkMail: function (value) {
        // 校验邮箱
        if (value) {
            if (!this.Reg.MAIL.test(value)) {
                return '邮箱格式有误';
            }
            else {
                return 'success';
            }
        }
        else {
            return '不能为空';
        }
    },
    checkCar: function (value) {
        // 校验车牌号
        if (value) {
            if (!this.Reg.CAR.test(value)) {
                return '车牌号格式有误';
            }
            else {
                return 'success';
            }
        }
        else {
            return '不能为空';
        }
    },
    checkID: function (e) {
        // 校验身份证
        var Errors = ['success', '身份证号码位数不正确', '身份证号码校验错误'];
        e = e.toUpperCase();
        if (!/(^\d{15}$)|(^\d{17}(\d|X)$)/.test(e)) {
            return Errors[1];
        }
        var t;
        var n;
        t = e.length;
        if (t === 15) {
            n = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
            var r = e.match(n);
            var i = new Date(r[2] + '/' + r[3] + '/' + r[4]);
            var s = i.getFullYear() === Number(r[2]) && i.getMonth() + 1 === Number(r[3]) && i.getDate() === Number(r[4]);
            if (!s) {
                return Errors[2];
            }
            else {
                return Errors[0];
            }
        }
        if (t === 18) {
            n = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})(\d|X)$/);
            var r = e.match(n);
            var i = new Date(r[2] + '/' + r[3] + '/' + r[4]);
            var s = i.getFullYear() === Number(r[2]) && i.getMonth() + 1 === Number(r[3]) && i.getDate() === Number(r[4]);
            if (!s) {
                return Errors[2];
            }
            else {
                var o = void 0;
                var u = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                var a = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
                var f = 0;
                var l = void 0;
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
    checkBank: function (bankno) {
        // 银行卡格式校验
        var Errors = [
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
        var strBin = '10,18,19,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99'; // 加了一个19
        if (!strBin.includes(bankno.substring(0, 2))) {
            return Errors[3];
        }
        var lastNum = bankno.substr(bankno.length - 1, 1); // 取出最后一位（与luhm进行比较）
        var first15Num = bankno.substr(0, bankno.length - 1); // 前15或18位
        var newArr = [];
        for (var i = first15Num.length - 1; i > -1; i--) {
            // 前15或18位倒序存进数组
            newArr.push(first15Num.substr(i, 1));
        }
        var arrJiShu = []; // 奇数位*2的积 <9
        var arrJiShu2 = []; // 奇数位*2的积 >9
        var arrOuShu = []; // 偶数位数组
        for (var j = 0; j < newArr.length; j++) {
            if ((j + 1) % 2 === 1) {
                // 奇数位
                if (Number(newArr[j]) * 2 < 9) {
                    arrJiShu.push(Number(newArr[j]) * 2);
                }
                else {
                    arrJiShu2.push(Number(newArr[j]) * 2);
                }
            }
            else {
                // 偶数位
                arrOuShu.push(newArr[j]);
            }
        }
        var jishuChild1 = []; // 奇数位*2 >9 的分割之后的数组个位数
        var jishuChild2 = []; // 奇数位*2 >9 的分割之后的数组十位数
        for (var h = 0; h < arrJiShu2.length; h++) {
            jishuChild1.push(Number(String(arrJiShu2[h])) % 10);
            jishuChild2.push(Number(String(arrJiShu2[h])) / 10);
        }
        var sumJiShu = 0; // 奇数位*2 < 9 的数组之和
        var sumOuShu = 0; // 偶数位数组之和
        var sumJiShuChild1 = 0; // 奇数位*2 >9 的分割之后的数组个位数之和
        var sumJiShuChild2 = 0; // 奇数位*2 >9 的分割之后的数组十位数之和
        var sumTotal = 0;
        for (var m = 0; m < arrJiShu.length; m++) {
            sumJiShu = sumJiShu + Number(String(arrJiShu[m]));
        }
        for (var n = 0; n < arrOuShu.length; n++) {
            sumOuShu = sumOuShu + Number(arrOuShu[n]);
        }
        for (var p = 0; p < jishuChild1.length; p++) {
            sumJiShuChild1 = sumJiShuChild1 + Number(String(jishuChild1[p]));
            sumJiShuChild2 = sumJiShuChild2 + Number(String(jishuChild2[p]));
        }
        // 计算总和
        sumTotal = sumJiShu + sumOuShu + sumJiShuChild1 + sumJiShuChild2;
        // 计算Luhm值
        var k = sumTotal % 10 === 0 ? 10 : sumTotal % 10;
        var luhm = 10 - k;
        if (String(lastNum) === String(luhm)) {
            return Errors[0];
        }
        else {
            return Errors[4];
        }
    },
};
exports.default = verification;
