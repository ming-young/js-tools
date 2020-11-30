import Vue from 'vue'

/**
 * 直接渲染获取vue组件HTML
 * @param {object} Comp VUE组件
 * @param {object} props VUE数据
 */
function renderComponent (Comp, props) {
	const Instance = new Vue({
		render: (h) => h(Comp, {props})
	})
	return Instance.$mount()
}

export default renderComponent
