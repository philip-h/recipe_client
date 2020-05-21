import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recents',
    name: 'Recents',
    component: () => import('../views/Recents.vue')
  },{
    path: '/my-recipes',
    name: 'MyRecipes',
    component: () => import('../views/MyRecipes.vue')
  },{
    path: '/recipe/:id',
    name: 'RecipeView',
    component: () => import('../views/RecipeView.vue')
  },{
    path: '/recipe/:id/edit',
    name: 'RecipeEdit',
    component: () => import('../views/RecipeEdit.vue')
  },{
    path: '/create',
    name: 'RecipeCreate',
    component: () => import('../views/RecipeCreate.vue')
  },{
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
