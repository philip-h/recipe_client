<template>
  <userpass-form usedfor="login"></userpass-form>
</template>

<script>
import UserpassForm from '@/components/UserpassForm.vue'

export default {
  name: 'Login',
  components: {
    UserpassForm
  }
}
</script>
