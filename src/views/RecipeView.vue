<template>
  <div class="recipe-view" >
    <v-img :src="recipe.recipeInfo.image_url"></v-img>

    <div class="d-flex justify-space-between align-center">
      <h2 class="display-1">{{ recipe.recipeInfo.name }} </h2>
      <v-btn 
        v-if="$store.state.isUserLoggedIn && $store.state.username === recipe.recipeInfo.username" 
        text color="deep-purple" to="edit"
      >
        Edit
      </v-btn>
    </div>  
    <h4 class="subtitle-1 mb-5">By {{ recipe.recipeInfo.username }}</h4>

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

    <v-btn 
      :outlined="!favourited" 
      :dark="favourited" 
      color="deep-purple"
      class="mr-2"
      @click="favourite"
      v-if="$store.state.isUserLoggedIn"
    >
      <v-icon left>mdi-heart</v-icon>Favourite
    </v-btn>
    <!-- <v-btn outlined color="deep-purple" class="mr-2"><v-icon left>mdi-share-variant</v-icon>Share</v-btn> -->
  </div>
</template>

<script>
import RecipeService from '@/services/RecipeService'
import FavouriteService from '@/services/FavouriteService'

export default {
  name: 'RecipeView',
  data: () => ({
    recipe: {
      recipeInfo: {},
      ingredients: [],
      instructions: [],
    },
    favourited:  false
  }),

  created: async function() {
    const response =  await RecipeService.show(this.$route.params.id)
    this.recipe = response.data
  },

  mounted: async function() {
    if (this.$store.state.isUserLoggedIn) {
      const response = await FavouriteService.show(
          this.$route.params.id,
          {username: this.$store.state.username}
      );
      if (response.data.length) {
        this.favourited = true;
      } else {
        this.favourited = false;
      }
    }
    
  },


  methods: {
    favourite: async function() {
      if (this.favourited) {
        await FavouriteService.delete(this.$route.params.id);
      } else {
        await FavouriteService.post(this.$route.params.id);
      }

      this.favourited = !this.favourited;
    }
  }
  
}
</script>
