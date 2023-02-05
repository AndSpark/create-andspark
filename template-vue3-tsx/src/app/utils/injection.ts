import { Provider, ReflectiveInjector } from 'injection-js'
import { getCurrentInjector } from 'vue3-oop'

export const resolveInstance = (provider: Provider) => {
	const resolvedProviders = ReflectiveInjector.resolve([provider])
	const injector = ReflectiveInjector.fromResolvedProviders(resolvedProviders, getCurrentInjector())

	return injector.get(provider)
}

export const resolveInstances = (providers: Provider[]) => {
	const resolvedProviders = ReflectiveInjector.resolve(providers)
	const injector = ReflectiveInjector.fromResolvedProviders(resolvedProviders, getCurrentInjector())

	return providers.map(v => injector.get(v))
}
