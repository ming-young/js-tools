/**
 * 图片压缩
 * @param {DOMObject|string} img dom对象、图片链接、base64
 * @param {number} percent 压缩比例 0-1
 * @returns {promise|string}
 */
declare function imageCompress(image: string | any, percent: number): Promise<string> | string;
export default imageCompress;
