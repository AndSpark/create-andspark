import { Injectable } from 'injection-js'
import { watch } from 'vue'
import { injectService, Mut, VueService } from 'vue3-oop'
import { LocalStorageService } from '../storage/storage.service'

export type Theme = 'light' | 'dark' | 'system'

@Injectable()
export default class ThemeService extends VueService {
	@Mut() themeValue: Exclude<Theme, 'system'> = 'light'
	@Mut() theme: Theme = 'light'
	localStorageService = injectService(LocalStorageService)

	constructor() {
		super()

		watch(
			() => this.themeValue,
			theme => {
				document.body.classList.toggle('dark', theme === 'dark')
			}
		)

		const theme = this.localStorageService?.get('theme')
		if (!theme || theme === 'system') {
			this.switchSystem()
		} else {
			this.switchTheme(theme)
		}
	}

	switchTheme(theme: Theme) {
		this.theme = theme
		this.localStorageService?.set('theme', this.theme)
		if (theme === 'system') {
			this.switchSystem()
		} else {
			this.themeValue = theme
		}
	}

	switchSystem() {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
		this.themeValue = prefersDark.matches === true ? 'dark' : 'light'
		prefersDark.addEventListener('change', e => {
			this.themeValue = prefersDark.matches === true ? 'dark' : 'light'
		})
	}
}
