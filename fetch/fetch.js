import axios from 'axios'
import { typer, has } from '../utils'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

export default class Fetch {
	constructor (config) {
		this.config = config
		this.fetchInstance = axios.create(config)
		this.initIntercept()
	}

	get () {
		let config = this.constructArgs(['GET', ...arguments])
		return this.fetchInstance(config)
	}

	post () {
		let config = this.constructArgs(['POST', ...arguments])
		return this.fetchInstance(config)
	}

	put () {
		let config = this.constructArgs(['PUT', ...arguments])
		return this.fetchInstance(config)
	}

	delete () {
		let config = this.constructArgs(['DELETE', ...arguments])
		return this.fetchInstance(config)
	}

	fetch () {
		let config = this.constructArgs([...arguments])
		return this.fetchInstance(config)
	}

	// Vue注入
	install (Vue) {
		Vue.prototype.$get = this.get.bind(this)
		Vue.prototype.$post = this.post.bind(this)
		Vue.prototype.$put = this.put.bind(this)
		Vue.prototype.$delete = this.delete.bind(this)
		Vue.prototype.$fetch = this.fetch.bind(this)
		Vue.prototype.$fetchInstance = this
	}

	// 取消请求
	cancel (message) {
		return source.cancel(message)
	}

	// 判断请求错误是否是取消
	isCancel (err) {
		return axios.isCancel(err)
	}

	// 构建参数
	constructArgs (args) {
		// [{ url, method, options }]
		let config = {}

		switch (true) {
			// [method, url, data, options]
			case isString(args[0]) && isString(args[1]):
				config.method = args[0]
				config.url = args[1]
				config.options = args[3] || {}
				if (has('get,delete', config.method.toLowerCase())) {
					config.params = args[2]
				} else {
					config.data = args[2]
				}
				break

			// [method, { url, data, options }]
			case isString(args[0]) && isObject(args[1]):
				config.method = args[0]
				config.url = args[1].url
				config.options = args[1].options || {}
				if (has('get,delete', config.method.toLowerCase())) {
					config.params = args[1].data
				} else {
					config.data = args[1].data
				}
				break

			// [{ method, url, data, options }]
			case isObject(args[0]):
				config.method = args[0].method
				config.url = args[0].url
				config.options = args[0].options || {}
				if (has('get,delete', config.method.toLowerCase())) {
					config.params = args[0].data
				} else {
					config.data = args[0].data
				}
				break
		}

		// 合并用户设置
		config = {...config, ...config.options}
		// 添加 canceltoken
		config.cancelToken = source.token

		return config
	}

	// 初始化拦截器
	initIntercept () {
		/**
		 * 请求拦截器
		 * 可作用请求前修改请求配置
		 * error 函数可全局处理请求错误
		 */
		this.fetchInstance.interceptors.request.use(
			config => {
				if (this.config.beforeRequest) {
					const conf = this.config.beforeRequest(config, this.config)
					return conf || config
				} else {
					return config
				}
			},
			error => {
				if (this.config.requestError) {
					const err = this.config.requestError(error, this.config)
					return err || Promise.reject(error)
				} else {
					return Promise.reject(error)
				}
			}
		)

		/**
		 * 返回拦截器
		 * 全局处理返回数据验证和数据构造
		 * error 全局处理错误问题
		 */
		this.fetchInstance.interceptors.response.use(
			response => {
				if (this.config.beforeResponse) {
					return this.config.beforeResponse(response, this.config, response.config)
				} else {
					return response
				}
			},
			error => {
				if (this.config.responseError) {
					const err = this.config.responseError(error, this.config)
					return err || Promise.reject(error)
				} else {
					return Promise.reject(error)
				}
			}
		)
	}
}

function isString (data) {
	return typer(data) === 'string'
}

function isObject (data) {
	return typer(data) === 'object'
}
