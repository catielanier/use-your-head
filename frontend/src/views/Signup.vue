<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Signup msg="Use Your Head Trivia"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/Signup.vue'

export default {
  name: 'home',
  components: {
    Signup
  }
}
</script>
