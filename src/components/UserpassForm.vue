<template>
  <div class="d-flex fill-height justify-center align-center flex-column">
    <h1>Recipes</h1>
    <p class="deep-purple--text">{{ error }}</p>
    <v-form style="width: 100%">
      <v-text-field
        label="Username"
        prepend-icon="mdi-account"
        type="text"
        color="deep-purple"
        v-model="username"
      ></v-text-field>

      <v-text-field
        id="password"
        label="Password"
        prepend-icon="mdi-lock"
        type="password"
        color="deep-purple"
        v-model="password"
      ></v-text-field>
        <p class="text-right">
          <router-link v-if="usedfor === 'login'" :to="{ name: 'Register' }">New? Register Here.</router-link>
          <router-link v-if="usedfor === 'register'" :to="{ name: 'Login' }">Have an account? Login Here.</router-link>
        </p>
        <v-btn type="submit" v-if="usedfor === 'login'" outlined block color="deep-purple" @click="login">Login</v-btn>
        <v-btn type="submit" v-if="usedfor === 'register'" outlined block color="deep-purple" @click="register">Register</v-btn>
    </v-form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'UserpassForm',
  props: {
    usedfor: String
  },

  data: () => ({
    username: '',
    password: '',
    error: ''
  }),

  methods: {
    login: async function(e) {
      e.preventDefault()
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUsername', response.data.username)

        this.$router.push({ name: 'Home' })

      } catch (err) {
        this.error = err.response.data.error
      }
    },
    async register() {
      try {
        const response = await AuthenticationService.register({
          username: this.username,
          password: this.password,
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUsername', response.data.username)

        this.$router.push({ name: 'Home' })
      } catch (err) {
        this.error = err.response.data.error
      }

    }
  }
}
</script>

