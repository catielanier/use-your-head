<template>
    <div class="admin">
        <div class="login">
            <form action="post" id="adminLogin" @submit.prevent="doLogin" v-bind:disabled="this.loading">
                <fieldset v-bind:aria-busy="this.loading">
                    <p v-if="this.success">You are logged in!</p>
                    <p class="error-message" v-if="this.error !== null">Error: {{this.error}}</p>
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
    import { LOGIN_ADMIN_MUTATION } from '../constraints/graphql';

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
                    }
                }).then((res) => {
                    console.log(res);
                    this.email = '';
                    this.password = '';
                    this.loading = false;
                    this.success = true;
                    this.error = null;
                }).catch(error => {
                    this.loading = false;
                    const errorMessage = error.message.replace('GraphQL error: ', '');
                    this.error = errorMessage;
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .login {
        margin-top: 25px;
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
            font-size: 1.3rem;
            font-weight: 600;
            margin-top: 10px;
            display: inline-block;
        }
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
    input[type='submit'] {
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
            content: '';
            display: block;
            background-image: linear-gradient(to right, #333 0%, #999 50%, #333 100%);
        }
        &[aria-busy='true']::before {
            background-size: 50% auto;
            // animation: ${loading} 0.5s linear infinite;
        }
    }
</style>