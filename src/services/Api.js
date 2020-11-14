import axios from 'axios'
import store from '@/store'

const baseURL = process.env.NODE_ENV == 'production' ? 'https://api--recipes.herokuapp.com/' : 'http://localhost:8081/'
export default () => {
  return axios.create({
      baseURL,
      headers: {
          Authorization: `Bearer ${store.state.token}`
      }
  })
}
