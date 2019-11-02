<template>
  <Login
    v-if="!admin"
    :catchAdmin="catchAdmin"
  />
</template>

<script>
import Login from "./Login";
export default {
  components: {
    Login
  },
  props: {
    admin: String,
    catchAdmin: Function
  }
};
</script>