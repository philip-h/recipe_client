import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://192.168.14.20:8081/'
  })
}
