<template>
  <v-container>
    <h2 class="display-1">Add Admin</h2>
    <v-form @submit.prevent="doSignup">
      <p v-if="error">
        {{error}}
      </p>
      <v-text-field
        label="Name"
        v-model="name"
        prepend-icon="mdi-email"
      />
      <v-text-field
        label="Email Address"
        v-model="email"
        prepend-icon="mdi-email"
      />
      <v-text-field
        :type="show ? 'text' : 'password'"
        :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
        v-model="password"
        label="Password"
        prepend-icon="mdi-key"
        @click:append="show = !show"
      />
      <v-btn type="submit">
        Sign-up
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "add-admin",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      loading: false,
      success: false,
      error: null
    };
  },
  methods: {
    doSignup: async function() {
      this.loading = true;
      const { username, email, password } = this.$data;
      try {
        const res = await axios.post("/api/users/signup", {
          data: {
            username,
            email,
            password
          }
        });
        if (res) {
          this.loading = false;
          this.success = true;
          this.$router.push("/");
        }
      } catch (e) {
        this.error = e;
        this.loading = false;
      }
    }
  }
};
</script>