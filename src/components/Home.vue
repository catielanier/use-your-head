<template>
  <v-container>
    <Login
      v-if="!admin"
      :catchAdmin="catchAdmin"
    />
    <Games v-if="admin" />
  </v-container>
</template>

<script>
import Games from "./Games";
import Login from "./Login";
export default {
  components: {
    Login,
    Games
  },
  props: {
    admin: String,
    catchAdmin: Function
  }
};
</script>