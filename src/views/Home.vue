<template>
  <div class="home">
    <v-skeleton-loader
      class="mx-auto"
      type="card, card, card"
      v-if="loading"
    ></v-skeleton-loader>
    <recipe-card v-if="!loading" v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"></recipe-card>
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

  mounted: function() {
    this.loading = false
  },

  data: () => ({
    recipes: [],
    loading: true
  }),
}
</script>
