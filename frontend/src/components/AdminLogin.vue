<template>
    <div class="admin">
        <div class="header">
            <h1>{{ msg }}</h1>
        </div>
        <div class="login">
            <form action="post">
                <fieldset>
                    <h3>Login to the admin panel</h3>
                    <label for="email">
                        Email address:
                        <input type="email" name="email" placeholder="Email address" />
                    </label>
                    <label for="password">
                        Password:
                        <input type="password" name="password" placeholder="Password">
                    </label>
                    <button type="submit">Login</button>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AdminLogin',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>