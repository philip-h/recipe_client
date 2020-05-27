<template>
  <v-app>
    <v-content>
      <v-container fluid class="fill-height d-block" style="max-width: 800px;">
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-bottom-navigation
      color="deep-purple"
      grow
      app
    >
      <v-btn :to="{name: 'Home'}" exact>
        <span>Browse</span>
        <v-icon>mdi-earth</v-icon>
      </v-btn>

      <v-btn 
        :to="{ name: 'RecipeCreate' }"
        v-if="$store.state.isUserLoggedIn"
      >
        <span>Create</span>
        <v-icon>mdi-plus-circle</v-icon>
      </v-btn>

      <v-btn 
        :to="{ name: 'MyRecipes' }"
        v-if="$store.state.isUserLoggedIn"
        >
        <span>My Recipes</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn 
        :to="{ name: 'Login' }"
        v-if="!$store.state.isUserLoggedIn"
        >
        <span>Login</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-menu top left v-if="$store.state.isUserLoggedIn">
        <template v-slot:activator="{ on }">
          <v-btn
            dark
            icon
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout: function() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUsername', null)
      this.$router.push({ name: 'Home' })
    }
  }


};
</script>

<style>
.v-item-group.v-bottom-navigation {
  align-items: center;
}
</style>
