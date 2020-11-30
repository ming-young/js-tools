import freeGlobal from './freeGlobal.js'

/** Detect free variable `self`. */
const freeSelf = typeof self === 'object' && self !== null && self.Object === Object && self

/** Used as a reference to the global object. */
const root = freeGlobal || freeSelf || Function('return this')() // eslint-disable-line

export default root
