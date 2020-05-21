<template>
  <div class="home">
    <recipe-card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"></recipe-card>
  </div>
</template>

<script>
import FavouriteService from '@/services/FavouriteService'
import RecipeCard from '@/components/RecipeCard'
export default {
  name: 'MyRecipes',

  components: {
    RecipeCard
  },

  created: async function() {
    let response = await FavouriteService.index()
    this.recipes = response.data
  },

  data: () => ({
    recipes: []
  }),
}
</script>
