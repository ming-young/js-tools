/**
 * 扫码枪：开始 暂停 继续
 */

let scanEvent, status

export default {
	/**
	 * 注册扫码枪监听器
	 * @param target DOM选择器
	 * @param cb 成功的回调函数
	 * @return undefined
	 */
	start (targetEl, cb = res => {}) {
		if (status === 'on') return // 已经启动了

		status = 'on'
		var interval = 100 // 输入阈值,单位毫秒，低于此阈值为扫描枪输入
		var target = !targetEl ? null : document.querySelector(targetEl) // 目标扫描输入对象。如果没有则扫描只回调
		var value, preValue, isScan, startTime
		var timeoutHandler

		let callbackFn = val => cb(val)

		function accept (code) {
			value = ''
			if (code && code >= 20 && code <= 126) {
				// 可打印字符
				preValue = String.fromCharCode(code)
			} else {
				preValue = ''
			}
			isScan = false
			startTime = new Date().getTime()
		}

		function scan (code, skip) {
			isScan = true
			!skip && (value += String.fromCharCode(code))
			startTime = new Date().getTime()

			// 在这里起一个定时任务，观察是否还有输入，如果在一定时间没有输入，则认为扫描结束
			if (timeoutHandler) {
				clearTimeout(timeoutHandler)
				timeoutHandler = false
			}
			timeoutHandler = setTimeout(() => {
				// 超时则认为扫码结束，可以回调了
				if (target) target.value = value
				cb(value)
				reset() // 从扫码状态转换到reset状态
			}, interval + 5)
		}

		function reset () {
			value = ''
			isScan = false
			startTime = undefined
			if (timeoutHandler) {
				clearTimeout(timeoutHandler)
				timeoutHandler = false
			}
		}

		accept() // 进入accept状态
		scanEvent = function (evt) {
			if (!target && document.querySelectorAll(document.activeElement).is('input')) return
			if (!evt.ctrlKey) { // 只针对普通打字
				var code = evt.which
				// 首先要识别是扫描还是普通打字。对普通打字忽略
				if (startTime && new Date().getTime() - startTime < interval) {
					if (code === 13 || code === 9) { // 回车或者TAB
						// 阻止默认的行为和冒泡，扫描枪有个奇怪的行为，会触发一个click事件
						evt.stopPropagation()
						evt.preventDefault()
						if (target) target.value = preValue + value
						callbackFn(preValue + value)
						reset() // 回到reset状态
					} else if (code === 127) {
						// 忽略掉删除键
						reset()
					} else if (code < 20) {
						// 忽略掉不能打印的字符，但仍保持扫码状态
						scan(code, true)
					} else {
						scan(code) // 进入扫码状态
					}
				} else {
					if (isScan) {
						// 先前是扫码模式，这里突然变慢了则认为扫码结束
						if (target) target.value = value
						callbackFn(preValue + value)
						reset() // 从扫码状态转换到reset状态
					} else {
						accept(code) // 保持accept状态
					}
				}
			}
		}
		document.addEventListener('keydown', scanEvent)
	},

	// 暂时停止监听
	stop () {
		status = 'off'
		document.removeEventListener('keydown', scanEvent)
	},

	// 恢复监听
	resume () {
		if (status === 'on') return
		status = 'on'
		document.addEventListener('keydown', scanEvent)
	}
}
