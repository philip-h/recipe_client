import Api from '@/services/Api'

export default {
  index() {
    return Api().get('/recipes')
  },

  show(id) {
    return Api().get(`recipes/${id}`)
  },

  post(recipeData) {
    Api().post('recipes', recipeData)
  },

  put(id, recipeData) {
    Api().put(`recipes/${id}`, recipeData)
  }


}
