import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Injectable } from 'injection-js'
import AbstractInterceptor, { AxiosRequest } from './abstract-interceptor'

@Injectable()
export default class ErrorInterceptor implements AbstractInterceptor {
	interceptor(
		request: AxiosRequestConfig<any>,
		next: AxiosRequest
	): Promise<AxiosResponse<any, any>> {
		return next(request).catch(err => {
			console.log(err)
			return err
		})
	}
}
