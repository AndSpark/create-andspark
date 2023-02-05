import type { RouteRecordRaw } from 'vue-router'

let routes: RouteRecordRaw[] = []

const moduleRoutes = import.meta.glob('../../pages/**/*.route.ts', {
	eager: true,
	import: 'default',
})

Object.keys(moduleRoutes)
	.map(k => moduleRoutes[k as string] as RouteRecordRaw | RouteRecordRaw[])
	.filter(Boolean)
	.forEach(k => (routes = routes.concat(k)))

export { routes }
