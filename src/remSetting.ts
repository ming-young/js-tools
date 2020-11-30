/**
 * 计算HTML节点font-size
 * @params {Object} doc document对象
 * @params {Object} win window对象
 * @params {Number} designWidth 设计稿宽度
 * 设计稿宽度750px 则 1rem = 10px, 设计稿字体 30px 则 3rem
 */
function calculate(designWidth = 750) {
  if (!document || !window) {
    return;
  }

  const docEl = document.documentElement;
  const clientWidth = docEl.clientWidth;

  if (clientWidth === undefined) {
    return;
  }
  docEl.style.fontSize = (10 * clientWidth) / designWidth + 'px';
}

function remSetting(designWidth = 750) {
  window.addEventListener(
    'resize',
    () => {
      calculate(designWidth);
    },
    false,
  );
  calculate(designWidth);
}

export default remSetting;
