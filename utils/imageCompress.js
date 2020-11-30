import typer from './typer.js'
/**
 * 图片压缩
 * @param {DOMObject|string} img dom对象、图片链接、base64
 * @param {number} percent 压缩比例 0-1
 * @returns {promise|string}
 */
function imageCompress (image, percent) {
	if (typer(image) === 'string') {
		return new Promise((resolve, reject) => {
			let $img = document.createElement('img')
			$img.src = image
			$img.onload = () => resolve(compress($img, percent))
			$img.onerror = (err) => reject(err)
		})
	} else {
		return compress(image, percent)
	}
}

/**
 * 图片压缩
 * @param {DOMObject} img dom对象
 * @param {number} percent 压缩比例 0-1
 */
function compress (image, percent) {
	let canvas = document.createElement('canvas')
	let context = canvas.getContext('2d')
	let naturalHeight = image.naturalHeight
	let naturalWidth = image.naturalWidth

	// 设置 canvas 宽高
	canvas.setAttribute('width', naturalWidth)
	canvas.setAttribute('height', naturalHeight)
	context.drawImage(image, 0, 0, naturalWidth, naturalHeight)

	return canvas.toDataURL('image/jpeg', +percent.toFixed(4))
}

export default imageCompress
