<template>
  <div class="recipe-view" >
    <h2 class="text-center display-1">{{ usedfor | capitalize }} a Recipe</h2>
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

      <h3 class="headline"><v-icon class="mr-5">mdi-shaker-outline</v-icon>Ingredients</h3>    
      <v-divider class="mb-5"></v-divider>

      <v-card class="mb-5 pa-2">
        <div class= "d-flex align-center" v-for="(ingredient, index) of recipe.ingredients" :key="index">
          <v-text-field
            label="Amount"
            v-model="ingredient.amount"
          >
          </v-text-field>  
          <v-text-field
            label="Unit"
            v-model="ingredient.unit"
          >
          </v-text-field>  
            <div class="mr-2 ml-2"> of </div>
          <v-combobox
            label="Ingredient"
            :items="comboIngredients"
            v-model="ingredient.name"
          >
          </v-combobox>
          <v-btn icon @click="removeIngredient(index)"><v-icon>mdi-close</v-icon></v-btn>
        </div>
        <v-btn icon @click="addIngredient()"><v-icon>mdi-plus</v-icon></v-btn>
      </v-card>


      <h3 class="headline"><v-icon class="mr-5">mdi-format-list-numbered</v-icon>Instructions</h3>    
      <v-divider class="mb-5"></v-divider>


      <v-card class="mb-5 pa-2">
        <ol >
          <li v-for="(instruction, index) of recipe.instructions" :key="index">
            <div class="d-flex align-center">
              <v-text-field
                label="Description"
                v-model="instruction.step_description"
                @keyup.enter="addInstruction"
                ></v-text-field>
                <v-btn icon @click="removeIngredient(index)"><v-icon>mdi-close</v-icon></v-btn>
            </div>
          </li>
        </ol>
        <v-btn icon @click="addInstruction"><v-icon>mdi-plus</v-icon></v-btn>
        </v-card>
        <v-btn 
          outlined 
          block 
          color="deep-purple" 
          v-if="usedfor == 'create'" 
          @click="create"
        >
          {{ usedfor }}
        </v-btn>
        <v-btn 
          outlined 
          block 
          color="deep-purple" 
          v-if="usedfor == 'update'" 
          @click="update"
        >
          {{ usedfor }}
        </v-btn>

    </v-form>
  </div>
</template>

<script>
import RecipeService from '@/services/RecipeService'
import IngredientService from '@/services/IngredientService'
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
      ingredients: [{
        amount: "",
        unit: "",
        name: ""
      }],
      instructions: [{
        step_description: ""
      }]
    },
    comboIngredients: []
  }),

  created: async function() {
    if (this.usedfor == "update") {
      const response = await RecipeService.show(this.$route.params.id)
      this.recipe = response.data
    }

    // Fetch ingredients from database
    const response = await IngredientService.index()
    const jsonIngredients = response.data
    // Put into string array for combobox
    for (let index in jsonIngredients) {
      this.comboIngredients.push(jsonIngredients[index].name)
    }

    // Sort the ingredients for aesthetics
    this.comboIngredients.sort()
  },

  methods: {
    create: async function () {
/*      this.recipe.recipeInfo.username = this.$store.state.username

      const response = await RecipeService.post({
        recipe: this.recipe
      })

      const recipeId = response.data.recipeId;

      this.$router.push({ name: 'RecipeView', params: { id: recipeId }})
  */
      console.log(this.recipe.ingredients)
  },

    update: function () {
      this.recipe.recipeInfo.username = this.$store.state.username

      RecipeService.put(this.$route.params.id, {
        recipe: this.recipe
      })

      this.$router.push({ name: 'RecipeView', params: { id: this.$route.params.id }})

      
    },

    addIngredient: function() {
      this.recipe.ingredients.push({amount: "", unit: "", name: ""})
    },

    removeIngredient: function(index) {
      this.recipe.ingredients.splice(index, 1);
    },

    addInstruction: function() {
      this.recipe.instructions.push({ step_description: "" })
    },

    removeInstruction: function(index) {
      this.recipe.instructions.splice(index, 1);
    }
    
  }
}
</script>
