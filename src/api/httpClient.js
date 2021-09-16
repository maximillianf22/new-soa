import axios from 'axios'

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

/* Autenthication */
// const getAuthToken = () => `Bearer ${localStorage.getItem('persist:v100-demo1-auth')}`

// const authInterceptor = (config) => {
//   config.headers.Authorization = getAuthToken()
//   return config
// }

const responseInterceptor = (response) => {
  return response
}

/* Errors */
const errorInterceptor = (error) => {
  if (!error.response) {
    return Promise.reject(error)
  }

  switch (error.response.status) {
    case 400:
      console.log(error.response.status, error.message)
      break

    case 401:
      console.log('No autorizado (httpClient.js)', error.response)
      localStorage.clear()
      // router.push('/login')
      break
    case 403:
      // router.push('/portal/contracts')
      break

    default:
      console.error('Ocurrió un error', error.response.status, error.message)
      break
  }
  return Promise.reject(error)
}

/* Config */
// httpClient.interceptors.request.use(authInterceptor)
httpClient.interceptors.response.use(responseInterceptor, errorInterceptor)

export default httpClient
