<template>
  <div class="recipe-view" >
    <h2 class="text-center">{{ usedfor | capitalize }} a Recipe</h2>
    <v-form style="width: 100%">
      <v-text-field
        label="Image Url"
        name="imageUrl"
        prepend-icon="mdi-camera"
        type="text"
        color="deep-purple"
        v-model="recipe.recipeInfo.image_url"
      ></v-text-field>

      <v-text-field
        label="Dish Name"
        name="dishName"
        prepend-icon="mdi-food"
        type="text"
        color="deep-purple"
        v-model="recipe.recipeInfo.name"
      ></v-text-field>

      <v-textarea
        label="Ingredients"
        name="ingredients"
        type="text"
        solo
        color="deep-purple"
        v-model="ingredients_raw"
      ></v-textarea>

      <v-textarea
        label="Instructions"
        name="instructions"
        type="text"
        solo
        color="deep-purple"
        v-model="instructions_raw"
      ></v-textarea>
        <v-btn outlined block color="deep-purple" v-if="usedfor == 'create'" @click="create">{{ usedfor }}</v-btn>
        <v-btn outlined block color="deep-purple" v-if="usedfor == 'update'" @click="update">{{ usedfor }}</v-btn>

    </v-form>
  </div>
</template>

<script>
import RecipeService from '@/services/RecipeService'
export default {
  name: 'RecipeForm',
  props: {
    usedfor: String
  },
  filters: {
    capitalize: (value) => {
      if (!value) return;
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },

  data: () => ({
    recipe: {
      recipeInfo: {},
      ingredients: [],
      instructions: []
    },
    ingredients_raw: "",
    instructions_raw: ""
  }),

  created: async function() {
    if (this.usedfor == "update") {
      let response = await RecipeService.show(this.$route.params.id)
      this.recipe = response.data;

      this.ingredients_raw = this.arrayToString(this.recipe.ingredients);
      this.instructions_raw = this.arrayToString(this.recipe.instructions);
    }
  },

  methods: {
    create:function () {
      RecipeService.post({
        recipeInfo: this.recipe.recipeInfo,
        ingredients: this.ingredients_raw,
        instructions: this.instructions_raw
      });

      // this.$router.push({ name: 'Home' })
    },

    update: function () {
      
    },

    arrayToString: function(arr) {
      let str = "";

      for (const row of arr){
        for (const key in row) {
          if (row.hasOwnProperty(key)) {
            str += `${row[key]} `;
          }
        }
        str += "\n";
      }

      return str;
    },
  }

}
</script>
