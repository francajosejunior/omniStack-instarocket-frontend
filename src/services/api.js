import axios from 'axios'

const api = axios.create({
  baseURL: 'https://omnistack-instarocket-backend.herokuapp.com'
})

export default api
