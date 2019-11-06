<template>
  <v-app>
    <Header
      :admin="admin"
      :signOut="signOut"
    />
    <v-content>
      <router-view
        :admin="this.admin"
        :catchAdmin="catchAdmin"
      />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import { removeToken } from "./services/tokenService";
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
    this.admin = user;
  },
  methods: {
    catchAdmin: function(id) {
      this.admin = id;
    },
    signOut: function() {
      removeToken("uyhAdmin");
      localStorage.removeItem("uyhAdminId");
      this.admin = null;
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

.v-application h2.display-1,
.v-application h3.display-2 {
  font-family: "Big Noodle Titling", sans-serif !important;
}

.v-application h3.display-2 {
  font-size: 1.8rem !important;
}
</style>