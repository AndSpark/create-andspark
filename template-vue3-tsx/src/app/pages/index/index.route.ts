import { Injectable } from 'injection-js'
import type { RouteRecord } from 'vue-router'

@Injectable()
export default class IndexRoute implements Partial<RouteRecord> {
	path = '/index'
	component = () => import('./index.page')

	beforeEnter: RouteRecord['beforeEnter'] = (to, from, next) => {
		next()
	}
}
