<template>
  <v-container>
    <h2 class="display-1">Admin Login</h2>
    <v-form @submit.prevent="doLogin">
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
      <v-btn
        color="primary"
        dark
        :loading="loading"
        type="submit"
      >
        <v-icon>mdi-login</v-icon> Sign In
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
import { setToken } from "../services/tokenService";
export default {
  name: "login",
  props: {
    catchAdmin: Function
  },
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      show: false,
      error: null
    };
  },
  methods: {
    doLogin: async function() {
      this.loading = true;
      const { email, password } = this.$data;
      try {
        const res = await axios({
          method: "POST",
          url: "/api/users/login",
          data: {
            email,
            password
          }
        });
        const { token, id } = res.data.data;
        await setToken("uyhAdmin", token);
        await this.$props.catchAdmin(id);
        await localStorage.setItem("uyhAdminId", id);
        this.loading = false;
        this.$router.push("/");
      } catch (e) {
        this.error = e;
        this.loading = false;
      }
    }
  }
};
</script>