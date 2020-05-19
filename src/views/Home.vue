<template>
  <div class="home">
    <v-card outlined class="mb-5" v-for="i in 5" :key="i">
      <v-img
        height="200"
        :src="`http://lorempixel.com/output/food-q-c-300-200-${i}.jpg`"
      ></v-img>

        <v-card-title>Name of dish {{i}}</v-card-title>

      <v-card-actions>
        <v-chip class="ma-2" v-for="j in 2">Tag {{j}}</v-chip>
        <v-spacer></v-spacer>
        <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-share-variant</v-icon></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
