<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-bottom-navigation
      color="deep-purple"
      grow
      app
    >
    <v-btn :to="{ name: 'Recents' }">
        <span>Recents</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn :to="{name: 'Home'}" exact>
        <span>Browse</span>
        <v-icon>mdi-earth</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'MyRecipes' }">
        <span>My Recipes</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
  })
};
</script>

<style>
.v-item-group.v-bottom-navigation {
  align-items: center;
}
</style>
