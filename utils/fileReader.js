/**
 * 文件读取为base64
 * @param {Object} file 文件
 * @returns {String}
 */
function fileReader (image) {
	return new Promise((resolve, reject) => {
		let reader = new FileReader()
		reader.onload = () => resolve(reader.result)
		reader.onerror = (err) => reject(err)
		reader.readAsDataURL(image)
	})
}

export default fileReader
