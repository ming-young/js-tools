"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firstUpper_1 = require("./firstUpper");
var formatSecond_1 = require("./formatSecond");
var headZero_1 = require("./headZero");
/**
 * 日期扩展类
 * @example new Dater()
 */
var Dater = /** @class */ (function () {
    /**
     * 构造器
     * @param {string|number|undefined} value 初始化时间
     */
    function Dater(value) {
        this.rawDate = value ? new Date(value) : new Date();
    }
    Object.defineProperty(Dater.prototype, "year", {
        get: function () {
            return this.rawDate.getFullYear();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dater.prototype, "month", {
        get: function () {
            return this.rawDate.getMonth();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dater.prototype, "week", {
        get: function () {
            return this.rawDate.getDay();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dater.prototype, "date", {
        get: function () {
            return this.rawDate.getDate();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dater.prototype, "hour", {
        get: function () {
            return this.rawDate.getHours();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dater.prototype, "minute", {
        get: function () {
            return this.rawDate.getMinutes();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dater.prototype, "second", {
        get: function () {
            return this.rawDate.getSeconds();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dater.prototype, "timestamp", {
        get: function () {
            return this.rawDate.getTime();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 按日期等级获取天数
     * @param {String} level 等级，支持'month','year'.
     */
    Dater.prototype.getDays = function (level) {
        if (level === void 0) { level = 'month'; }
        switch (level) {
            case 'month':
                return new Date(this.year, this.month + 1, 0).getDate();
            case 'year':
                var _4Times = this.year % 4 === 0;
                var _100Times = this.year % 100 !== 0;
                var _400Times = this.year % 400 === 0;
                return (_4Times && _100Times) || _400Times ? 366 : 365;
            default:
                return 0;
        }
    };
    /**
     * 日期操作[加]
     * @example new Dater().add(10, 'date')今天加10天
     * @param {number} value 添加数字
     * @param {string} level 等级
     */
    Dater.prototype.add = function (value, level) {
        var copyTime = this.timestamp;
        var func = "set" + firstUpper_1.default(level);
        var newDate = new Dater(this.rawDate[func](this[level] + value));
        this.rawDate.setTime(copyTime);
        return newDate;
    };
    /**
     * 日期操作[减]
     * @param {number} value 减去level
     * @param {string} level 等级
     */
    Dater.prototype.subtract = function (value, level) {
        var copyTime = this.timestamp;
        var func = "set" + firstUpper_1.default(level);
        var newDate = new Dater(this.rawDate[func](this[level] + value * -1));
        this.rawDate.setTime(copyTime);
        return newDate;
    };
    /**
     * 日期差
     * @param {string|number|date} date 对比日期
     */
    Dater.prototype.diff = function (date, level) {
        var thisDate = this.timestamp;
        var compare = date instanceof Dater ? date.timestamp : new Date(date).getTime();
        return formatSecond_1.default((thisDate - compare) / 1000, level);
    };
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
    Dater.prototype.format = function (template) {
        if (template === void 0) { template = 'YYYY-MM-DD'; }
        var map = {
            YYYY: this.year,
            YY: String(this.year).slice(-2),
            MM: headZero_1.default(this.month + 1),
            M: this.month + 1,
            DD: headZero_1.default(this.date),
            dd: this.date,
            HH: headZero_1.default(this.hour),
            H: this.hour,
            mm: headZero_1.default(this.minute),
            m: this.minute,
            SS: headZero_1.default(this.second),
            S: this.second,
            X: this.timestamp / 1000,
            x: this.timestamp,
        };
        Object.keys(map).forEach(function (key) {
            template = template.replace(key, map[key]);
        });
        return isNaN(Number(template)) ? template : Number(template);
    };
    return Dater;
}());
exports.default = Dater;
