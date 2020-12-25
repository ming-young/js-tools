/**
 * 文件读取为base64
 * @param {Object} file 文件
 * @returns {String}
 */
function fileReader(image: Blob): Promise<string | null | ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(image);
  });
}

export default fileReader;
