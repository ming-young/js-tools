/**
 * 文件读取为base64
 * @param {Object} file 文件
 * @returns {String}
 */
declare function fileReader(image: Blob): Promise<string | null | ArrayBuffer>;
export default fileReader;
