<template>
  <div class="recipe-view" >
    <v-img :src="recipe.recipeInfo.image_url"></v-img>

    <div class="d-flex justify-space-between align-center mb-5">
      <h2 >{{ recipe.recipeInfo.name }} </h2>
      <!-- only if you are logged in -->
      <v-btn text color="deep-purple" to="edit">Edit</v-btn>
    </div>  

    <!-- <div class="mb-5"> -->
      <!-- <v-chip outlined color="deep-purple" class="ma-2" v-for="tag in recipe.tags" :key="tag">{{ tag }}</v-chip> -->
    <!-- </div> -->

    <h3 class="headline"><v-icon class="mr-5">mdi-shaker-outline</v-icon>Ingredients</h3>    
    <v-divider class="mb-5"></v-divider>
    <div class="ingredients mb-5">
      <v-list>
        <v-list-item v-for="ingredient in recipe.ingredients" :key="ingredient.name">
          <v-list-item-content>{{ ingredient.amount }} {{ ingredient.unit }} of {{ ingredient.name }}</v-list-item-content>
        </v-list-item>

      </v-list>
    </div>

    <h3 class="headline"><v-icon class="mr-5">mdi-format-list-numbered</v-icon>Instructions</h3>    
    <v-divider class="mb-5"></v-divider>
    <div class="mb-5">
      <p>
        <ol>
          <li class="mb-2" 
            v-for="instruction in recipe.instructions" 
            :key="instruction.step"
          >
            {{ instruction.step_description }}
          </li>
        </ol>
      </p>
    </div>

    <v-btn outlined color="deep-purple" class="mr-2"><v-icon left>mdi-heart</v-icon>Favourite</v-btn>
    <!-- <v-btn outlined color="deep-purple" class="mr-2"><v-icon left>mdi-share-variant</v-icon>Share</v-btn> -->
  </div>
</template>

<script>
import RecipeService from '@/services/RecipeService'

export default {
  name: 'RecipeView',
  data: () => ({
    recipe: {
      recipeInfo: {},
      ingredients: [],
      instructions: [],
    },
  }),

  created: async function() {
    const response =  await RecipeService.show(this.$route.params.id)
    this.recipe = response.data
  }
  
}
</script>
