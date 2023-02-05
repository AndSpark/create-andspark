import ErrorInterceptor from './error-interceptor'
import LoggingInterceptor from './logging-interceptor'

const httpInterceptorProviders = [LoggingInterceptor, ErrorInterceptor]

export default httpInterceptorProviders
