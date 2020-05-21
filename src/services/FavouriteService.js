import Api from '@/services/Api'

export default {
  index() {
    return Api().get('/favourites')
  },

  show(id) {
    return Api().get(`/favourites/${id}`)
  },

  post(id) {
    return Api().post(`/favourites/${id}`)
  },

  delete(id) {
    return Api().delete(`/favourites/${id}`)
  },

}
