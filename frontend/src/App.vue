<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @font-face {
    font-family: 'BigNoodleTilting';
    src: url('/assets/big_noodle_tilting.ttf') format('truetype');
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
    .sign, .login {
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
            animation: 0.5s linear infinite;
        }
    }
</style>
