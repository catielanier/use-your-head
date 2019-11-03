<template>
  <v-app>
    <Header :admin="admin" />
    <v-content>
      <router-view
        :admin="this.admin"
        :catchAdmin="catchAdmin"
      />
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
import Header from "./components/Header";
export default {
  name: "App",
  data() {
    return {
      admin: null
    };
  },
  components: {
    Header
  },
  beforeMount() {
    const user = localStorage.getItem("uyhAdminId");
    this.user = user;
  },
  mounted() {
    this.checkPermission();
  },
  methods: {
    catchUser: function(id) {
      this.user = id;
      this.checkPermission();
    },
    checkPermission: async function() {
      const { user } = this.$data;
      if (!user) {
        this.role = null;
      } else {
        const userData = await axios.get(`/api/users/${user}`);
        const { role } = userData.data.data;
        this.role = role;
      }
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Big Noodle Titling";
  src: local("Big Noodle Titling"), local("Big Noodle Titling"),
    url("./assets/fonts/big_noodle_titling.ttf") format("truetype");
}

@font-face {
  font-family: "Big Noodle Titling Oblique";
  src: local("Big Noodle Titling Oblique"), local("Big Noodle Titling Oblique"),
    url("./assets/fonts/big_noodle_titling_oblique.ttf") format("truetype");
}

.v-application h2.display-1 {
  font-family: "Big Noodle Titling", sans-serif !important;
}
</style>