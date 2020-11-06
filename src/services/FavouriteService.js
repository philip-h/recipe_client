import Api from '@/services/Api'

export default {
  index(username) {
    return Api().post('/favourites/', username)
  },

  show(recipe_id, username) {
    return Api().post(`/favourites/${recipe_id}`, username)
  },

  post(recipe_id, username) {
    return Api().post(`/favourites/u/${recipe_id}`, username)
  },

  delete(recipe_id) {
    return Api().delete(`/favourites/${recipe_id}`)
  },

}
