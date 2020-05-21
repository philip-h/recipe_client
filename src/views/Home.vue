<template>
  <div class="home">
    <recipe-card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"></recipe-card>
  </div>
</template>

<script>
import RecipeService from '@/services/RecipeService'
import RecipeCard from '@/components/RecipeCard'
export default {
  name: 'Home',

  components: {
    RecipeCard
  },

  created: async function() {
    let response = await RecipeService.index()
    this.recipes = response.data
  },

  data: () => ({
    recipes: []
  }),
}
</script>
