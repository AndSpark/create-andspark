import { Injectable } from 'injection-js'
import { StorageData, StorageKey } from './storage.type'

@Injectable()
export class LocalStorageService {
	get<T extends StorageKey>(key: T): StorageData[T] | undefined {
		const item = localStorage.getItem(key)
		if (item) {
			const val = JSON.parse(item)
			if (val.expire < Date.now()) {
				return val.value
			}
			localStorage.removeItem(key)
			return undefined
		}
		return undefined
	}

	set<T extends StorageKey>(key: T, value: StorageData[T], expire = 0): boolean {
		const data = JSON.stringify({
			value,
			expire: expire ? Date.now() + expire : 0,
		})
		localStorage.setItem(key, data)

		return true
	}

	has<T extends StorageKey>(key: T): boolean {
		return !!this.get(key)
	}

	remove<T extends StorageKey>(key: T) {
		localStorage.removeItem(key)
	}

	clear() {
		localStorage.clear()
	}
}
