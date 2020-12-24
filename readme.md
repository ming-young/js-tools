# JS 工具函数

`JS`中一些常用的工具函数

![js](https://s3-045-shit-itplatform-uat-bjs.s3.cn-north-1.amazonaws.com.cn/it-platform/net-image-26yp5s5.jpeg)

## 安装

npm i xx

## 使用

```javascript
import * as Utils from 'plugins/uitls';
// 或
import { someFunc } from 'plugins/utils';
```

### 客户端类型

```javascript
/**
 * @return {array} 客户端类型 [android], [ios]
 **/
client();
// 使用时可通过`client().includes('android')`来判断是否是匹配的客户端类型
```

### 日期格式化

```javascript
/**
 * @param  {number | string} 预设日期
 * @return {string}
 */
dater(1515226284000); // => DaterClass实例
// 格式化
// [年] YYYY-2018 YY-18
// [月] MM-02 M-2
// [日] DD-08 D-8
// [时] HH-02 H-2
// [分] mm-02 m-2
// [秒] SS-02 S-2
// [时间戳] X-1410715640秒  x-1410715640579毫秒
dater(1515226284000).format('YYYY-MM-DD HH:mm:SS');
```

### 日期扩展类

```javascript
/**
 * @param {number|string} 预设日期
 * @return {string}
 */
let date = new DaterClass(1515226284000); // => Dater实例

/**
 * @param {number} 具体修改数字
 * @param {string} 修改等级,可选(second|minute|hour|date|month|year)
 * @return 新Dater实例，不修改原数据
 */
date.add(3, 'date'); // 时间加三天

/**
 * @param {number} 具体修改数字
 * @param {string} 修改等级,可选(second|minute|hour|date|month|year)
 * @return 新Dater实例，不修改原数据
 */
date.subtract(3, 'date'); // 时间减三天

/**
 * @param {number|string|Dater} 日期字符串|时间戳|Dater实例
 * @param {string} 修改等级,可选(second|minute|hour|date|month|year)
 * @return 两个日期的间隔时间
 */
date.diff(date, 'date'); // 时间差
```

### 去抖动

```javascript
/**
 * @param {function} func 限制触发的函数
 * @param {number} wait 延迟触发时间，单位毫秒
 * @param {object} options 设置
 * [options.leading=false]: 在timeout之前触发
 * [options.maxWait]: func被调用前的最大延迟时间
 * [options.trailing=true]: 在timeout之后触发
 * @returns {function} 新的防误触函数
 */
debounce(func, wait, options);
```

### 文件读取

```javascript
/**
 * @param {file} file 选择的文件
 * @returns {string} base64
 */
fileReader(file);
```

### 首字母大写

```javascript
/**
 * @param {string} 字符串
 * @return {string}
 */
firstUpper('shinho'); // => 'Shinho'
```

### 数字格式化

```javascript
/**
 * @param {number|string} number 需格式化数据
 * @param {number} fixed 小数位
 * @param {boolean} comma 千分符
 * @param {boolean} abs 绝对值
 * @return {string}
 */
formatNum(123, 2); // => '123.00'
formatNum('1,234', 2, false); // => '1234.00'
```

### 号码格式化

```javascript
/**
 * @param {number|string} phone 手机号
 * @return {string}
 */
formatPhone(18121081815); // => '181 2108 1815'
```

### 秒转其他时间

```javascript
/**
 * @param {number} 秒
 * @param {string} 等级
 * @param {number} 保留小数，默认为0
 * @return {string}
 */
formatSecond(1000, 'hour', 2); // => '0.28'
```

### 包含关系

```javascript
/**
 * @param {string|array|object} obj 判断数据
 * @param {string|array} obj 是否包含的对象
 * @param {string} key 对象数组用
 * @return {boolean}
 */
has([1, 2, 3], [1, 4]); // => true
has([{ a: 1 }, { b: 1 }], 1, 'b'); // => true
```

### 数字补零

```javascript
/**
 * @param {number|string} value
 * @param {number} length 结果长度
 * @return {string}
 */
headZero(1, 2); // => '01'
headZero(1, 3); // => '001'
```

### 图片压缩

```javascript
/**
 * @param {file|string} image 图片文件，图片链接，base64
 * @param {number} percent 压缩比例 0 - 1
 * @return {promise|string} 当image为链接和base64返回Promise，为File时返回String
 */
imageCompress(image, percent);
```

### 是否为空

```javascript
/**
 * @param {any} 需判断的数据
 * @return {boolean}
 */
isEmpty(null);
// => true

isEmpty(true);
// => false

isEmpty(1);
// => false

isEmpty([1, 2, 3]);
// => false

isEmpty({ a: 1 });
// => false
```

### 对象转`query string`

```javascript
/**
 * @param {object} object 需要序列的对象
 * @return {string}
 */
object2Params({ a: 1, b: 2 }); // => a=1&b=2
```

### 生成数字区间

```javascript
/**
 * @param {number} start 开始数字
 * @param {number} end 结束数字
 * @returns {array} 数字数组
 */
range(1, 3); // => [1, 2, 3]
```

### 设置 REM

```javascript
import { remSetting } from 'xsy-plugins/utils';

/**
 * @params {Number} designWidth 设计稿宽度，默认值 750
 */
remSetting(750);
```

::: tip
使用此插件后，转换规则为 `1rem = 10px`, 设计稿字体 `30px` 则 `3rem`。
:::

### 打印机模板

> 使用`VUE`的模板引擎，`VUE`单文件组件 + `Props` = `HTML`

```html
<!-- ./template.vue -->
<template lang="pug"> div h1(v-for="item in list") {{item}} </template>

<script>
  export default {
    props: {
      list: Array,
    },
  };
</script>
```

```javascript
// js
import Vue from 'vue';
import { renderTemplate } from 'xsy-plugins/utils';
import PrintTemplate from './template.vue';

const data = { list: [1, 2] };
const { outerHTML, innerHTML } = renderTemplate(PrintTemplate, props, Vue).$el;
// innerHTML => <h1>1</h1><h1>2</h1>
// outerHTML => <div><h1>1</h1><h1>2</h1></div>
```

### 扫码枪

```javascript
/**
 * @param {object} options 设置
 * [options.delayConfirm=100]: 扫码输入隔100毫秒确认输入完毕
 * [options.immediate]: 是否立即进入监听扫码状态
 * [options.showDebugLog=false]: 是否显示扫码输入日志
 * @returns {object} 扫码监听实例
 */
import { ScanListener } from 'xsy-plugins/utils';

const scanner = new ScanListener({
  // 延迟确认输入
  delayConfirm: 100,
  // 是否立即进入监听
  immediate: true,
  // 是否显示日志
  showDebugLog: false,
  // 扫码结果检查正则
  resultCheckReg: /^\d{5,}$/,
  // 扫码结果回调
  success(result) {
    console.log(result);
  },
});

// 开始监听
scanner.start();
// 停止监听
scanner.stop();
```

### 中文简码(拼音首字母)

```javascript
/**
 * @param {string} 需转的汉字字符串
 * @param {boolean} 输出大小写[默认大写]
 */
simpleSpell('我爱中国'); // => WAZG
simpleSpell('我爱中国', true); // => wazg
```

### 节流

```javascript
/**
 * @param {function} func 限制触发的函数
 * @param {number} wait 延迟触发时间，单位毫秒
 * @param {object} options 设置
 * [options.leading=false]: 在timeout之前触发
 * [options.maxWait]: func被调用前的最大延迟时间
 * [options.trailing=true]: 在timeout之后触发
 * @returns {function} 新的防误触函数
 */
throttle(func, wait, options);
```

### 获取数据类型

```javascript
/**
 * @param {any} value
 * @return {string}
 */

typer(null); // => 'null'
typer(Symbol(1)); // => 'symbol'
typer(new Set()); // => 'set'
```

### 表单校验

```javascript
import { verification } from 'xsy-pluginx/utils';

/**
 * @param {any} 需验证数据
 * @return {string} 有效返回'success'，无效返回错误信息
 **/
verification.checkDecimal(value); // 校验正数带小数
verification.checkInteger(value); // 校验正整数
verification.checkNegative(value); // 校验负整数
verification.checkNumber(value); // 校验数字
verification.checkHttp(value); // 校验HTTP_URL
verification.checkMobile(value); // 校验手机号
verification.checkTel(value); // 校验固话
verification.checkMail(value); // 校验邮箱
verification.checkCar(value); // 校验车牌号
verification.checkID(value); // 校验身份证
verification.checkBank(value); // 校验银行卡
```
