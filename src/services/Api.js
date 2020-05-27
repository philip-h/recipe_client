import axios from 'axios'

export default () => {
  return axios.create({
    // baseURL: 'https://api--recipes.herokuapp.com/'
    baseURL: 'http://localhost:8081/'
  })
}
