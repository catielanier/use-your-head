<template>
  <v-app-bar
    color="primary"
    dark
    app
  >
    <v-app-bar-nav-icon />
    <v-toolbar-title>Use Your Head Trivia</v-toolbar-title>
    <v-spacer />
    <v-btn
      text
      to="/login"
      v-if="!admin"
    >
      <v-icon>mdi-login</v-icon> Login
    </v-btn>
    <v-btn
      text
      v-if="admin"
    >
      <v-icon>mdi-logout</v-icon> Logout
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "header",
  props: {
    admin: String
  }
};
</script>