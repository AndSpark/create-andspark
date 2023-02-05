export function decoratorMethod(method: any) {
	return function (target: any, key: string, descriptor: PropertyDescriptor) {
		const fn = descriptor.value
		descriptor.value = function (...args: any) {
			const bindFn = fn.bind(this, ...args)
			return method(bindFn, this)
		}
	}
}
