<template>
  <v-card outlined class="mb-5" >
    <router-link :to="`/recipe/${recipe.id}/`">
      <v-img
        height="200"
        :src="recipe.image_url"
      ></v-img>
    </router-link>

      <v-card-title>{{ recipe.name }}</v-card-title>

    <v-card-actions>
      <v-chip outlined color="deep-purple" class="ma-2" v-for="tag in recipe.tags" :key="tag">{{ tag }}</v-chip>
      <v-spacer></v-spacer>
      <v-btn icon :color="favourited ? 'deep-purple' : undefined" @click="favourite"><v-icon>mdi-heart</v-icon></v-btn>
      <!-- <v-btn icon><v-icon>mdi-share-variant</v-icon></v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>
import FavouriteService from '@/services/FavouriteService'
export default {
  name: 'RecipeCard',
  props: {
    recipe: Object
  },

  data: () => ({
    favourited: false
  }),

  mounted: async function() {
    const response = await FavouriteService.show(this.recipe.id);
    if (response.data.length) {
      this.favourited = true;
    } else {
      this.favourited = false;
    }
    
  },

  methods: {
    favourite: async function() {
      if (this.favourited) {
        await FavouriteService.delete(this.recipe.id);
        this.favourited = !this.favourited;
      } else {
        await FavouriteService.post(this.recipe.id);
        this.favourited = !this.favourited;
      }
    }
  }
}
</script>
