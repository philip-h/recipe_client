import Api from '@/services/Api'

export default {
  index(username) {
    return Api().post('/favourites/', username)
  },

  show(id, username) {
    return Api().post(`/favourites/${id}`, username)
  },

  post(id) {
    return Api().post(`/favourites/${id}`)
  },

  delete(id) {
    return Api().delete(`/favourites/${id}`)
  },

}
