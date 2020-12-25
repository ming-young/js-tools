import typer from '../normalFunction/typer';
/**
 * 图片压缩
 * @param {DOMObject|string} img dom对象、图片链接、base64
 * @param {number} percent 压缩比例 0-1
 * @returns {promise|string}
 */
function imageCompress(image: string | any, percent: number): Promise<string> | string {
  if (typer(image) === 'string') {
    return new Promise((resolve, reject) => {
      const $img = document.createElement('img');
      $img.src = image;
      $img.onload = () => resolve(compress($img, percent));
      $img.onerror = (err) => reject(err);
    });
  } else {
    return compress(image, percent);
  }
}

/**
 * 图片压缩
 * @param {DOMObject} img dom对象
 * @param {number} percent 压缩比例 0-1
 */
function compress(image: any, percent: number) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d')!;
  const naturalHeight = image.naturalHeight;
  const naturalWidth = image.naturalWidth;

  // 设置 canvas 宽高
  canvas.setAttribute('width', naturalWidth);
  canvas.setAttribute('height', naturalHeight);
  context.drawImage(image, 0, 0, naturalWidth, naturalHeight);

  return canvas.toDataURL('image/jpeg', +percent.toFixed(4));
}

export default imageCompress;
