<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          text color="deep-purple"
        >
          Delete
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline">
          Are you sure?
        </v-card-title>

        <v-card-text>
          Are you sure you want to delete this recipe?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="deep-purple"
            text
            @click="deleteRecipe"
          >
            Yes
          </v-btn>
          <v-btn
            color="deep-purple"
            text
            @click="dialog = false"
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import RecipeService from '@/services/RecipeService'
  export default {
    name: 'ConfirmDeleteRecipe',
    data: () => ({
      dialog: false
    }),

  methods: {
    deleteRecipe: async function() {
      await RecipeService.delete(this.$route.params.id)
      this.dialog = false
      this.$router.push({ name: 'Home'})
    }

  }
}
</script>
