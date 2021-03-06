import Api from '@/services/Api'

export default {
  index() {
    return Api().get('/recipes')
  },

  indexByUsername(username) {
    return Api().post('/myrecipes',username)
  },

  show(id) {
    return Api().get(`/recipes/${id}`)
  },

  post(recipeData) {
    return Api().post('/recipes', recipeData)
  },

  put(id, recipeData) {
    Api().put(`/recipes/${id}`, recipeData)
  },

  delete(id) {
    Api().delete(`/recipes/${id}`)
  }


}
