import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://192.168.14.21:8081/'
  })
}
