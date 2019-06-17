<template>
  <div class="admin">
    <div class="sign">
      <form
        action="post"
        id="adminLogin"
        @submit.prevent="doSignup"
        v-bind:disabled="this.loading"
      >
        <fieldset v-bind:aria-busy="this.loading">
          <p v-if="this.success">Success! You will be emailed when your account is active.</p>
          <p
            class="error-message"
            v-if="this.error !== null"
          ><span>Error:</span> {{this.error}}</p>
          <h3>Sign up for an account!</h3>
          <label for="name">
            Name:
            <input
              type="text"
              placeholder="Your name"
              v-model="name"
            >
          </label>
          <label for="email">
            Email address:
            <input
              type="email"
              placeholder="Email address"
              v-model="email"
            />
          </label>
          <label for="password">
            Password:
            <input
              type="password"
              placeholder="Password"
              v-model="password"
            />
          </label>
          <label for="verifyPassword">
            Verify password:
            <input
              type="password"
              placeholder="Verify Password"
              v-model="verifyPassword"
            />
          </label>
          <button type="submit">Signup</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import {
  CREATE_ADMIN_MUTATION,
  CURRENT_ADMIN_QUERY
} from "../constraints/graphql";

export default {
  name: "Signup",
  data() {
    return {
      email: "",
      name: "",
      password: "",
      verifyPassword: "",
      error: null,
      loading: false,
      success: false
    };
  },
  methods: {
    doSignup: async function() {
      const { email, name, password, verifyPassword } = this.$data;
      this.loading = true;
      this.success = false;

      await this.$apollo
        .mutate({
          mutation: CREATE_ADMIN_MUTATION,
          variables: {
            email,
            name,
            password,
            verifyPassword
          }
        })
        .then(res => {
          console.log(res);
          this.email = "";
          this.name = "";
          this.password = "";
          this.verifyPassword = "";
          this.loading = false;
          this.success = true;
          this.error = null;
        })
        .catch(error => {
          this.loading = false;
          const errorMessage = error.message.replace("GraphQL error: ", "");
          this.error = errorMessage;
        });
    }
  }
};
</script>