<template>
    <div class="admin">
        <div class="sign">
            <form action="post" id="adminLogin" @submit.prevent="doSignup">
                <fieldset>
                    <h3>Sign up for an account!</h3>
                    <label for="name">
                        Name:
                        <input type="text" placeholder="Your name" v-model="name">
                    </label>
                    <label for="email">
                        Email address:
                        <input type="email" placeholder="Email address" v-model="email" />
                    </label>
                    <label for="password">
                        Password:
                        <input type="password" placeholder="Password" v-model="password" />
                    </label>
                    <label for="verifyPassword">
                        Verify password:
                        <input type="password" placeholder="Password" v-model="verifyPassword" />
                    </label>
                    <button type="submit">Signup</button>
                    <div>
                        <router-link to="/">Login to your admin account.</router-link>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script>
    import { CREATE_ADMIN_MUTATION } from '../constraints/graphql';

    export default {
        name: 'Signup',
        data() {
            return {
                email: '',
                name: '',
                password: '',
                verifyPassword: ''
            }
        },
        methods: {
            doSignup: function () {
                const {email, name, password, verifyPassword} = this.$data;
                console.log(this.$data);
                this.$apollo.mutate({
                    mutation: CREATE_ADMIN_MUTATION,
                    variables: {
                        email,
                        name,
                        password,
                        verifyPassword
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
            background-image: linear-gradient(to right, #ff3019 0%, #e2b04a 50%, #ff3019 100%);
        }
        &[aria-busy='true']::before {
            background-size: 50% auto;
            // animation: ${loading} 0.5s linear infinite;
        }
    }
</style>