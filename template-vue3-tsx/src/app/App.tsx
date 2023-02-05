import { Component, VueComponent } from 'vue3-oop'
import { HttpService } from './core/http/http'
import RouterStart from './core/router'
import { LocalStorageService } from './core/storage/storage.service'
import ThemeService from './core/theme/theme.service'

@Component({
	providers: [HttpService, RouterStart, LocalStorageService, ThemeService],
})
export default class App extends VueComponent {
	render() {
		return <div>111</div>
	}
}
