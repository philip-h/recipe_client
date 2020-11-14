import Api from '@/services/Api'

export default {
  index() {
    return Api().get('/favourites/')
  },

  show(recipe_id) {
    return Api().get(`/favourites/${recipe_id}`)
  },

  post(recipe_id) {
    return Api().post(`/favourites/${recipe_id}`)
  },

  delete(recipe_id) {
    return Api().delete(`/favourites/${recipe_id}`)
  },

}
