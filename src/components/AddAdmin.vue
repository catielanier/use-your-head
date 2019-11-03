<template>
  <v-container>
    <h2 class="display-1">Sign-up</h2>
    <v-form @submit.prevent="doSignup">
      <p
        v-if="this.error !== null"
        class="error"
      >
        <span>Error:</span> {{this.error}}
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
import { setToken } from "../services/tokenService";
export default {
  name: "signup",
  props: {
    catchUser: Function
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      verifyPassword: "",
      loading: false,
      success: false,
      error: null
    };
  },
  methods: {
    doSignup: async function() {
      this.loading = true;
      const { username, email, password, verifyPassword } = this.$data;
      if (password !== verifyPassword) {
        this.error = "Your passwords do not match.";
        this.loading = false;
        return;
      }
      try {
        const res = await axios.post("/api/users/signup", {
          data: {
            username,
            email,
            password
          }
        });
        const { token } = res.data.data;
        await setToken(token);
        await this.$props.catchUser();
        this.loading = false;
        this.success = true;
        this.$router.push("/");
      } catch (e) {
        this.error = e;
        this.loading = false;
      }
    }
  }
};
</script>