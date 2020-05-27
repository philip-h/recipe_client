<template>
  <div class="home">
    <h2 class="display-1 mb-5">Favourites</h2>
    <recipe-card v-for="recipe in faveRecipes" :key="recipe.id" :recipe="recipe"></recipe-card>
    <h4 class="subtitle-1 text-center mt-5" v-if="!faveRecipes.length">
      No favourites yet
    </h4>

    <h2 class="display-1 mb-5">My Creations</h2>
    <recipe-card v-for="recipe in myRecipes" :key="recipe.id" :recipe="recipe"></recipe-card>
    <h4 class="subtitle-1 text-center mt-5" v-if="!myRecipes.length">
      No creations yet
    </h4>

  </div>
</template>

<script>
import FavouriteService from '@/services/FavouriteService'
import RecipeService from '@/services/RecipeService'
import RecipeCard from '@/components/RecipeCard'
export default {
  name: 'MyRecipes',

  components: {
    RecipeCard
  },

  created: async function() {
    let response = await FavouriteService.index({username: this.$store.state.username})
    this.faveRecipes = response.data

    response = await RecipeService.indexByUsername({username: this.$store.state.username})
    this.myRecipes = response.data

  },

  data: () => ({
    faveRecipes: [],
    myRecipes: []
  }),
}
</script>
