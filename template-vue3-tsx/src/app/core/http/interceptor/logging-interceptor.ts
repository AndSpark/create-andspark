import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Injectable } from 'injection-js'
import AbstractInterceptor, { AxiosRequest } from './abstract-interceptor'

@Injectable()
export default class LoggingInterceptor implements AbstractInterceptor {
	interceptor(
		request: AxiosRequestConfig<any>,
		next: AxiosRequest
	): Promise<AxiosResponse<any, any>> {
		console.time(request.url)
		return next(request)
			.then(res => {
				console.timeEnd(request.url)
				return res
			})
			.catch(err => {
				console.timeEnd(request.url)
				return err
			})
	}
}
