<template>
  <v-app>
    <Header />
    <main>
      <router-view />
    </main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "./assets/css/setup.css";
@import "./assets/css/fonts.css";
</style>