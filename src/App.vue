<template>
  <v-app>
    <Header :admin="admin" />
    <main>
      <router-view
        :admin="this.admin"
        :catchAdmin="catchAdmin"
      />
    </main>
  </v-app>
</template>

<script>
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
@import "./assets/css/setup.css";
@import "./assets/css/fonts.css";
</style>