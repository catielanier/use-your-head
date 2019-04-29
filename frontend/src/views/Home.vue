<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AdminLogin msg="Use Your Head Trivia"/>
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
