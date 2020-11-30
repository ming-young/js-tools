import date from './date'
import number from './number'
import phone from './phone'
import money from './money'
import percent from './percent'

function install (Vue) {
	Vue.filter('date', date)
	Vue.filter('number', number)
	Vue.filter('phone', phone)
	Vue.filter('money', money)
	Vue.filter('percent', percent)
}

export default {
	install,
	date,
	number,
	phone,
	money,
	percent
}
