/**
 * 扫码枪（只可以用于浏览器端）
 */

class ScanListener {
	constructor (options) {
		// 默认设置
		let defaultOption = {
			// 延迟确认输入
			delayConfirm: 100,
			// 是否立即进入监听
			immediate: true,
			// 是否显示日志
			showDebugLog: false,
			// 扫码结果检查正则
			resultCheckReg: /^\d{5,}$/
		}
		// 数据存储
		this.state = {
			status: 'off',
			result: '',
			timestamp: null,
			timeoutId: null
		}
		// 初始化设置
		this.options = {
			...defaultOption,
			...options
		}

		// 初始化立即开始
		if (this.options.immediate) {
			this.start()
		}
	}

	/**
	 * 重置(重置内容和设置)
	 */
	reset () {
		this.state.result = ''
		this.state.timestamp = 0
	}

	/**
	 * 开始监听扫码事件
	 */
	start () {
		if (this.state.status === 'on') return

		this.state.status = 'on'
		this.addEvent()
		console.log('[ScanListener] scan is running.')
	}

	/**
	 * 停止监听扫码事件
	 */
	stop () {
		if (this.state.status === 'off') return

		this.state.status = 'off'
		this.removeEvent()
		console.log('[ScanListener] scan is stoped.')
	}

	/**
	 * 事件处理
	 */
	eventHandler (evt) {
		// 忽略输入框输入
		if (document.activeElement.tagName === 'INPUT') return

		let code = evt.which
		this.state.result += String.fromCharCode(code)

		// 是否打印日志
		if (this.options.showDebugLog) {
			this.debugLogger()
		}

		this.freshCount()
	}

	/**
	 * 重置倒计时
	 */
	freshCount () {
		// this.state.timestamp = new Date().getTime()

		// 重置计时
		if (this.state.timeoutId) {
			clearTimeout(this.state.timeoutId)
		}

		// 重新计时
		this.state.timeoutId = setTimeout(() => {
			let { resultCheckReg, success } = this.options
			// 匹配数字(会有换行符)
			let result = this.state.result.match(/\d+/)
			result = result ? result[0] : ''
			// 检查是否存在回调，并且是否通过验证
			let valid = resultCheckReg ? resultCheckReg.test(result) : true
			// 调用回调
			if (result && success && valid) success(result)
			this.reset()
		}, this.options.delayConfirm)
	}

	/**
	 * 添加事件
	 */
	addEvent () {
		this.bindHandler = (evt) => this.eventHandler(evt)
		document.addEventListener('keydown', this.bindHandler)
	}

	/**
	 * 去除事件
	 */
	removeEvent () {
		document.removeEventListener('keydown', this.bindHandler)
	}

	/**
	 * 扫码输入日志
	 */
	debugLogger () {
		let current = new Date().getTime()
		console.log('[ScanListener] 键盘输入间隔：', this.state.timestamp ? current - this.state.timestamp : 0, this.state.result)
		this.state.timestamp = current
	}
}

export default ScanListener
