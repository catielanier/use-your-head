<template>
    <div class="admin">
        <div class="login">
            <form action="post" id="adminLogin" @submit.prevent="doLogin" v-bind:disabled="this.loading">
                <fieldset v-bind:aria-busy="this.loading">
                    <p v-if="this.success">You are logged in!</p>
                    <p class="error-message" v-if="this.error !== null"><span>Error:</span> {{this.error}}</p>
                    <h3>Login to the admin panel</h3>
                    <label for="email">
                        Email address:
                        <input type="email" placeholder="Email address" v-model="email" />
                    </label>
                    <label for="password">
                        Password:
                        <input type="password" placeholder="Password" v-model="password" />
                    </label>
                    <button type="submit">Login</button>
                    <div>
                        <router-link to="/signup">Sign up for an account.</router-link>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script>
    import { LOGIN_ADMIN_MUTATION, CURRENT_ADMIN_QUERY } from '../constraints/graphql';
    import { onLogin } from '../vue-apollo';

    export default {
        name: 'AdminLogin',
        data() {
            return {
                email: '',
                password: '',
                error: null,
                loading: false,
                success: false
            }
        },
        methods: {
            doLogin: async function () {
                const {email, password} = this.$data;
                this.loading = true;
                this.success = false;

                await this.$apollo.mutate({
                    mutation: LOGIN_ADMIN_MUTATION,
                    variables: {
                        email,
                        password
                    },
                    refetchQueries: {
                        query: CURRENT_ADMIN_QUERY
                    }
                }).then(async (res) => {
                    console.log(res);
                    this.email = '';
                    this.password = '';
                    this.loading = false;
                    this.success = true;
                    this.error = null;
                    await onLogin(this.$apollo.provider.clients.defaultClient, res.token);
                }).catch(error => {
                    this.loading = false;
                    const errorMessage = error.message.replace('GraphQL error: ', '');
                    this.error = errorMessage;
                });
            }
        }
    }
</script>