<template>
  <v-app
    style="background: #fffbfc"
    id="app"
  >
    <v-navigation-drawer
      app
      temporary
      fixed
      v-model="sideNav"
    >
      <v-toolbar
        color="secondary"
        dark
        flat
      >
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          <h1 class="title pl-3">Use Your Head</h1>
        </router-link>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile
          ripple
          v-for="item in sideNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      fixed
      color="primary"
      dark
    >
      <v-toolbar-side-icon @click="toggleSideNav">
      </v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          Use Your Head
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        flex
        prepend-icon="search"
        placeholder="Search games..."
        color="accent"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          class="hidden-xs-only"
          flat
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <router-view />
        </transition>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sideNav: false
    };
  },
  computed: {
    horizontalNavItems() {
      return [
        {
          icon: "videogame_asset",
          title: "Games",
          link: "/games"
        },
        { icon: "lock_open", title: "Sign In", link: "/" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
    },
    sideNavItems() {
      return [
        {
          icon: "videogame_asset",
          title: "Games",
          link: "/games"
        },
        { icon: "lock_open", title: "Sign In", link: "/" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "BigNoodleTilting";
  src: url("/assets/big_noodle_tilting.ttf") format("truetype");
}
html {
  box-sizing: border-box;
  font-size: 10px;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1300px;
  margin: 0 auto;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.home {
  img {
    width: 30%;
  }
}
.error-message {
  font-weight: 600;
  span {
    color: red;
  }
}
.sign,
.login {
  margin-top: 25px;
}
h3 {
  margin: 40px 0 0;
  padding-bottom: 25px;
}
form {
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  max-width: 640px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.02);
  border: 2px solid black;
  padding: 20px;
  line-height: 1.5;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    background: black;
    color: white;
    padding: 0.5rem 1.2rem;
    font-weight: 600;
    font-size: 1.3rem;
    margin-top: 10px;
    display: inline-block;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: blue;
    }
  }
  button,
  input[type="submit"] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: "";
      display: block;
      background-image: linear-gradient(to right, #333 0%, #999 50%, #333 100%);
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: 0.5s linear infinite;
    }
  }
}
</style>