<template>
  <div class="d-flex fill-height justify-center align-center flex-column">
    <h1>Recipes</h1>
    <v-form style="width: 100%">
      <v-text-field
        label="Username"
        name="username"
        prepend-icon="mdi-account"
        type="text"
        color="deep-purple"
      ></v-text-field>

      <v-text-field
        id="password"
        label="Password"
        name="password"
        prepend-icon="mdi-lock"
        type="password"
        color="deep-purple"
      ></v-text-field>
        <v-btn outlined block color="deep-purple">{{ buttonName }}</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'UserpassForm',
  props: {
    usedfor: String
  },

  computed: {
    buttonName()  {
      let buttonName;
      if (this.usedfor === "login") {
        buttonName = "Login"
      } else if (this.usedfor === "register") {
        buttonName = "Register"
      }
      return buttonName
    }
  }
}
</script>

