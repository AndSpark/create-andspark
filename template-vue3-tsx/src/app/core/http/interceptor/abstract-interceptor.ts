import { AxiosRequestConfig, AxiosResponse } from 'axios'

export type AxiosRequest = (req: AxiosRequestConfig) => Promise<AxiosResponse>

export default abstract class AbstractInterceptor {
	abstract interceptor(request: AxiosRequestConfig, next: AxiosRequest): Promise<AxiosResponse>
}
