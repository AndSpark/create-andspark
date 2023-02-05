import { Injectable } from 'injection-js'
import { RouterService } from './router.service'
import { routes } from './routes'

@Injectable()
export default class RouterStart {
	constructor(private routerService: RouterService) {
		routerService.initRoutes(routes)
	}
}
