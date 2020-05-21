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
      <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-share-variant</v-icon></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    recipe: Object
  }
}
</script>
