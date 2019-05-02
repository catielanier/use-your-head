<template>
  <div class="home">
    <img alt="Use Your Head Trivia" src="../assets/logo.png">
    <AdminLogin />
  </div>
</template>

<script>
// @ is an alias to /src
import AdminLogin from '@/components/AdminLogin.vue'

export default {
  name: 'home',
  components: {
    AdminLogin
  }
}
</script>
